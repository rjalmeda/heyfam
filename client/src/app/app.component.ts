import {
  Component,
  ViewChildren,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  SimpleChanges,
} from "@angular/core";
import { SocketServiceService, IConnection } from "./socket-service.service";
import { UserVideoService } from "./user-video.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public connections: IConnection[] = [];
  public userCam: any;
  public screenCapEnabled = false;
  public sources: MediaDeviceInfo[] = [];
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
    this.userVideoService.currentFeed.subscribe((cam) => {
      this.userCam = cam;
      this.playStream(this.userWindow, cam);
    });
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

  getVideoWindow(id: string) {}

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

  public nextSource(): void {
    this.userVideoService.nextSource();
  }

  private playStream(elRef: ElementRef, stream: any): void {
    const videoWindow = elRef.nativeElement;
    videoWindow.srcObject = stream;
    videoWindow.muted = true;
    videoWindow.play();
    videoWindow.addEventListener("ended", () => {});
  }
}
