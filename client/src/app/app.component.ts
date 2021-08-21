import {
  Component,
  ViewChildren,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  SimpleChanges,
  OnInit,
} from "@angular/core";
import {
  SocketServiceService,
  IConnection,
  IMessage,
} from "./socket-service.service";
import { UserVideoService } from "./user-video.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public connections: IConnection[] = [];
  public userCam: any;
  public screenCapEnabled = false;
  public sources: MediaDeviceInfo[] = [];
  public streamUrl: string;
  public name: string;
  public message: string;
  public messages: IMessage[] = [];

  public get EnableVideoToggle() {
    return this.sources.length > 1;
  }

  @ViewChild("userWindow", { static: false, read: ElementRef })
  private userWindow: ElementRef;

  // @ViewChildren("videoStreams")
  // private videoStreamsWindows: ElementRef[];

  constructor(
    private socketService: SocketServiceService,
    private userVideoService: UserVideoService
  ) {
    this.socketService.connections.subscribe((d) => {
      this.connections = d;
    });
    this.socketService.currentChannel.subscribe((channel) => {
      this.streamUrl = channel;
    });
    // this.userVideoService.getFeed().then((cam) => {
    //   this.userCam = cam;
    //   this.playStream(this.userWindow, cam);
    // });
  }

  // public ngAfterViewChecked(): void {
  //   this.videoStreamsWindows.forEach((s) => {
  //     if (!s.nativeElement.srcObject) {
  //       const c = this.connections.find(
  //         (connection) => connection.sessionId === s.nativeElement.id
  //       );
  //       s.nativeElement.srcObject = c.stream;
  //     }
  //   });
  // }

  public ngOnInit() {
    this.messages = this.socketService.messages;
  }

  public enableScreenCapture() {
    this.screenCapEnabled = true;
    this.userVideoService.getUserScreen().subscribe((screen: any) => {
      screen.getVideoTracks()[0].addEventListener("ended", () => {
        this.enableUserCam();
      });
      this.playStream(this.userWindow, screen);
    });
  }

  public enableUserCam(): void {
    this.screenCapEnabled = false;
    this.playStream(this.userWindow, this.userCam);
  }

  public showConnections(connection?: any): void {
    if (connection) {
    } else {
    }
  }

  public updateStream(): void {
    if (confirm("Update Current Channel")) {
      this.socketService.updateChannel(this.streamUrl);
    }
  }

  public sendMessage(): void {
    if (this.message) {
      this.socketService.sendMessage({
        name: this.name,
        message: this.message,
      });
    }
    this.message = "";
  }

  private playStream(elRef: ElementRef, stream: any): void {
    const videoWindow = elRef.nativeElement;
    videoWindow.srcObject = stream;
    videoWindow.muted = true;
    videoWindow.play();
    videoWindow.addEventListener("ended", () => {});
  }
}
