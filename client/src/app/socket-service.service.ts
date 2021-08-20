import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as io from "socket.io-client";
import { Subject } from "rxjs";
import { UserVideoService } from "./user-video.service";

@Injectable({
  providedIn: "root",
})
export class SocketServiceService {
  public sessionId: string;
  public allUsers: IConnection[];
  public connectionsSubject = new Subject<IConnection[]>();
  public connections = this.connectionsSubject.asObservable();

  private socket: any;

  constructor(
    private http: HttpClient,
    private userVideoService: UserVideoService
  ) {
    this.getSocket();
    this.setupListeners();
  }

  getSocket() {
    this.socket = window["socketIo"]();
    this.socket.on("connect", () => {
      console.log("socket connected");
    });
  }

  setupListeners() {
    this.socket.on("sessionId", (data) => {
      console.log(data);
      console.log(this.socket);
    });

    this.socket.on("offer", async (from, offer) => {
      console.log("offer received");
      console.log();
      const connection = this.allUsers.find((u) => u.sessionId === from);
      if (connection) {
        connection.peerConnection =
          this.userVideoService.createPeerConnection();

        const streams = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        streams.getTracks().forEach((track) => {
          connection.peerConnection.addTrack(track, streams);
        });
        connection.peerConnection.onconnectionstatechange = (event) => {
          console.log("peer connection event");
          console.log(event);
        };
        connection.peerConnection.onicecandidate = (event) => {
          if (event.candidate) {
            this.socket.emit(
              "iceCandidate",
              connection.sessionId,
              this.socket.id,
              event.candidate
            );
          }
        };
        connection.peerConnection.setRemoteDescription(
          new RTCSessionDescription(offer)
        );
        const answer = await connection.peerConnection.createAnswer();
        await connection.peerConnection.setLocalDescription(answer);
        this.socket.emit(
          "answer",
          connection.sessionId,
          this.socket.id,
          answer
        );
      }
    });

    this.socket.on("answer", async (from, answer) => {
      console.log("answer received");
      const connection = this.allUsers.find((u) => u.sessionId === from);
      const remoteDesc = new RTCSessionDescription(answer);
      await connection.peerConnection.setRemoteDescription(remoteDesc);
    });

    this.socket.on("iceCandidate", async (from, iceCandidate) => {
      console.log("ice candidate received");
      console.log(from);
      const connection = this.allUsers.find((u) => u.sessionId === from);
      if (iceCandidate) {
        console.log(iceCandidate);
        await connection.peerConnection.addIceCandidate(iceCandidate);
      }
    });

    this.socket.on("allUsers", (data) => {
      console.log(this.socket);
      console.log("allUsers");
      data = data.filter((session) => session.sessionId !== this.socket.id);
      console.log(data);
      data.forEach(async (d) => {
        d.peerConnection = this.userVideoService.createPeerConnection();
        const streams = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        streams.getTracks().forEach((track) => {
          d.peerConnection.addTrack(track, streams);
        });
        d.peerConnection.onconnectionstatechange = (event) => {
          console.log("peer connection event");
          console.log(event);
        };
        d.peerConnection.onicecandidate = (event) => {
          console.log("ice candidate event");
          if (event.candidate) {
            this.socket.emit(
              "iceCandidate",
              d.sessionId,
              this.socket.id,
              event.candidate
            );
          }
        };
        d.peerConnection.on;
        const offer = await d.peerConnection.createOffer();
        await d.peerConnection.setLocalDescription(offer);
        this.socket.emit("offer", d.sessionId, this.socket.id, offer);
      });
      this.allUsers = data;
      this.connectionsSubject.next(data);
    });

    this.socket.on("userDisconnected", (sessionId) => {
      const idx = this.allUsers.findIndex((u) => u.sessionId === sessionId);
      if (idx > -1) {
        this.allUsers.splice(idx, 1);
      }
      this.connectionsSubject.next(this.allUsers);
    });

    this.socket.on("newUserConnected", (connection) => {
      this.allUsers.push(connection);
      this.connectionsSubject.next(this.allUsers);
    });
  }
}

export interface IConnection {
  sessionId: string;
  name: string;
  peerConnection: RTCPeerConnection;
}
