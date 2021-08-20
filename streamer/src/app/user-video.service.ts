import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserVideoService {
  constructor() { }

  public getUserCam() {
    return from(navigator.mediaDevices.getUserMedia({video: true, audio: true}));
  }
  
  public getUserScreen() {
    const displayMediaOptions = {
      video: {
        cursor: "always"
      },
      audio: false
    };

    const md:any = navigator.mediaDevices;
    return from(md.getDisplayMedia(displayMediaOptions));
  }

  public createPeerConnection() {
    
    const configuration = {
      configuration: {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      },
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    }
    return new RTCPeerConnection(configuration)
  }
}
