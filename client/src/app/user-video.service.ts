import { Injectable } from "@angular/core";
import { from, Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserVideoService {
  constructor() {}

  public async getFeed() {
    return await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: {
        echoCancellation: true,
      },
    });
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
}
