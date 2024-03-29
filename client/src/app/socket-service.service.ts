import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as io from "socket.io-client";
import { ReplaySubject, Subject } from "rxjs";
import { UserVideoService } from "./user-video.service";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class SocketServiceService {
  public sessionId: string;
  public allUsers: IConnection[];
  public connectionsSubject = new Subject<IConnection[]>();
  public connections = this.connectionsSubject.asObservable();
  public channelSubject = new ReplaySubject<string>();
  public currentChannel = this.channelSubject.asObservable();
  public messages: IMessage[] = [];

  private socket: any;
  private camEnabled = false;

  constructor(
    private http: HttpClient,
    private userVideoService: UserVideoService,
    private sanitizer: DomSanitizer
  ) {
    this.getSocket();
    this.setupListeners();
  }

  updateChannel(channel: string) {
    this.socket.emit("updateChannel", channel);
  }

  sendMessage(message: IMessage) {
    this.messages.push(message);
    this.socket.emit("sendMessage", message);
  }

  getSocket() {
    this.socket = window["socketIo"]();
    this.socket.on("connect", () => {});
  }

  setupListeners() {
    this.socket.on("channelJoined", () => {
      console.log("channel joined");
      // this.socket.emit("registerClient", {});
    });

    this.socket.on("currentChannel", (channel) => {
      this.channelSubject.next(channel);
    });

    this.socket.on("sendMessage", (message: IMessage) => {
      this.messages.push(message);
    });

    this.socket.on("sessionId", (data) => {});

    if (this.camEnabled) {
      this.socket.on("offer", async (from, offer) => {
        const connection = this.allUsers.find((u) => u.sessionId === from);
        if (connection) {
          connection.peerConnection =
            this.userVideoService.createPeerConnection();

          const videoStreams = await navigator.mediaDevices.enumerateDevices();
          const isVideoAvailable = videoStreams.some(
            (d) => d.kind === "videoinput"
          );

          const streams = await navigator.mediaDevices.getUserMedia({
            video: isVideoAvailable,
            audio: {
              echoCancellation: true,
            },
          });
          streams.getTracks().forEach((track) => {
            connection.peerConnection.addTrack(track, streams);
          });

          this.userVideoService.getFeed().then((f) => {
            const tracks = f.getTracks();
            const senders = connection.peerConnection.getSenders();
            senders.forEach((s) => {
              const track = tracks.find((t) => t.kind === s.track.kind);
              s.replaceTrack(track);
            });
          });

          connection.peerConnection.onconnectionstatechange = (event) => {};
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
          // connection.peerConnection.ontrack = (event: RTCTrackEvent) => {
          //   connection.stream.addTrack(event.track);
          // };
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
        const connection = this.allUsers.find((u) => u.sessionId === from);
        const remoteDesc = new RTCSessionDescription(answer);
        // connection.peerConnection.ontrack = (event: RTCTrackEvent) => {
        //   connection.stream.addTrack(event.track);
        // };
        await connection.peerConnection.setRemoteDescription(remoteDesc);
      });

      this.socket.on("iceCandidate", async (from, iceCandidate) => {
        const connection = this.allUsers.find((u) => u.sessionId === from);
        if (iceCandidate) {
          try {
            await connection.peerConnection.addIceCandidate(iceCandidate);
          } catch (e) {
            // ignore errors
          }
        }
      });

      this.socket.on("allStreamers", (data) => {
        data = data.filter((session) => session.sessionId !== this.socket.id);
        data.forEach(async (d) => {
          d.peerConnection = this.userVideoService.createPeerConnection();
          const streams = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: {
              echoCancellation: true,
            },
          });
          streams.getTracks().forEach((track) => {
            d.peerConnection.addTrack(track, streams);
          });
          d.peerConnection.onconnectionstatechange = (event) => {};
          d.peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
              this.socket.emit(
                "iceCandidate",
                d.sessionId,
                this.socket.id,
                event.candidate
              );
            }
          };
          const offer = await d.peerConnection.createOffer();
          await d.peerConnection.setLocalDescription(offer);
          this.socket.emit("offer", d.sessionId, this.socket.id, offer);
        });
        this.allUsers = data;
        // this.allUsers.forEach((u) => {
        //   u.stream = new MediaStream();
        // });
        this.connectionsSubject.next(data);
      });

      this.socket.on("newStreamerConnected", (connection) => {
        // connection.stream = new MediaStream();
        this.allUsers.push(connection);
        this.connectionsSubject.next(this.allUsers);
      });

      this.socket.on("userDisconnected", (sessionId) => {
        const idx = this.allUsers.findIndex((u) => u.sessionId === sessionId);
        if (idx > -1) {
          this.allUsers.splice(idx, 1);
        }
        this.connectionsSubject.next(this.allUsers);
      });
    }
  }
}

export interface IConnection {
  sessionId: string;
  name: string;
  peerConnection: RTCPeerConnection;
}

export interface IMessage {
  name: string;
  message: string;
}
