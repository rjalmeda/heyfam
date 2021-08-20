import { Injectable } from "@angular/core";
import { from, Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserVideoService {
  public sources: MediaDeviceInfo[] = [];
  public currentSource: number = 0;
  public replayVideo = new ReplaySubject<MediaStream>();
  public currentFeed = this.replayVideo.asObservable();

  constructor() {
    this.enumerateVideoDevices();
  }

  public async updateFeed() {
    console.log("updating feed");
    const { deviceId } = this.sources[this.currentSource];
    console.log(deviceId);
    this.replayVideo.next(
      await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId,
        },
        audio: {
          echoCancellation: true,
        },
      })
    );
  }

  public getUserScreen() {
    const displayMediaOptions = {
      video: {
        cursor: "always",
      },
      audio: false,
    };

    const md: any = navigator.mediaDevices;
    return from(md.getDisplayMedia(displayMediaOptions));
  }

  public createPeerConnection() {
    const configuration = {
      configuration: {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
      },
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    };
    return new RTCPeerConnection(configuration);
  }

  public nextSource() {
    if (this.currentSource >= this.sources.length - 1) {
      this.currentSource = 0;
    } else {
      this.currentSource++;
    }
    this.updateFeed();
  }

  private async enumerateVideoDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );
    this.sources = videoDevices;
    this.currentSource = 0;
    this.updateFeed();
  }
}
