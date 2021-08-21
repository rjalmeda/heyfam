(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rjalmeda/Desktop/projects/heyfam/streamer/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socket_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket-service.service */ "nzwC");
/* harmony import */ var _user_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-video.service */ "ghKE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["videoStreams"];
function AppComponent_video_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 4, 5);
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", c_r1.sessionId);
} }
class AppComponent {
    constructor(socketService, userVideoService) {
        this.socketService = socketService;
        this.userVideoService = userVideoService;
        this.connections = [];
        this.screenCapEnabled = false;
        this.socketService.connections.subscribe((d) => {
            this.connections = d;
        });
        this.socketService.currentChannel.subscribe((channel) => {
            this.currentChannel = channel;
        });
    }
    ngAfterViewChecked() {
        this.videoStreamsWindows.forEach((s) => {
            if (!s.nativeElement.srcObject) {
                const c = this.connections.find((connection) => connection.sessionId === s.nativeElement.id);
                s.nativeElement.srcObject = c.stream;
            }
        });
    }
    getVideoWindow(id) { }
    // public enableScreenCapture() {
    //   this.screenCapEnabled = true;
    //   this.userVideoService.getUserScreen().subscribe((screen: any) => {
    //     screen.getVideoTracks()[0].addEventListener("ended", () => {
    //       this.enableUserCam();
    //     });
    //     this.playStream(this.userWindow, screen);
    //   });
    // }
    // public enableUserCam(): void {
    //   this.screenCapEnabled = false;
    //   this.playStream(this.userWindow, this.userCam);
    // }
    showConnections(connection) {
        if (connection) {
        }
        else {
        }
    }
    playStream(elRef, stream) {
        const videoWindow = elRef.nativeElement;
        videoWindow.srcObject = stream;
        videoWindow.muted = true;
        videoWindow.play();
        videoWindow.addEventListener("ended", () => { });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service_service__WEBPACK_IMPORTED_MODULE_1__["SocketServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_video_service__WEBPACK_IMPORTED_MODULE_2__["UserVideoService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoStreamsWindows = _t);
    } }, decls: 4, vars: 2, consts: [[1, "grid-wrapper"], [1, "main-window"], ["frameborder", "0", "allowfullscreen", "", "allow", "autoplay", 3, "src"], ["autoplay", "", 3, "id", 4, "ngFor", "ngForOf"], ["autoplay", "", 3, "id"], ["videoStreams", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_video_3_Template, 2, 1, "video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentChannel, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.connections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.grid-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n}\n\n.grid-wrapper[_ngcontent-%COMP%]   .main-window[_ngcontent-%COMP%] {\n  grid-column: 1/4;\n  grid-row: 1/4;\n  background: grey;\n  position: relative;\n  overflow: hidden;\n}\n\n.grid-wrapper[_ngcontent-%COMP%]   .main-window[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], app-root[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUNRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUNaOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQURKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4uZ3JpZC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuXG4gICAgLm1haW4td2luZG93IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICAgICAgICBncmlkLXJvdzogMSAvIDQ7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBpZnJhbWUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5odG1sLCBib2R5LCBhcHAtcm9vdCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
            }]
    }], function () { return [{ type: _socket_service_service__WEBPACK_IMPORTED_MODULE_1__["SocketServiceService"] }, { type: _user_video_service__WEBPACK_IMPORTED_MODULE_2__["UserVideoService"] }]; }, { videoStreamsWindows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ["videoStreams"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _socket_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socket-service.service */ "nzwC");
/* harmony import */ var _user_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-video.service */ "ghKE");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "xdv0");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_socket_service_service__WEBPACK_IMPORTED_MODULE_6__["SocketServiceService"], _user_video_service__WEBPACK_IMPORTED_MODULE_7__["UserVideoService"], _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                ],
                providers: [_socket_service_service__WEBPACK_IMPORTED_MODULE_6__["SocketServiceService"], _user_video_service__WEBPACK_IMPORTED_MODULE_7__["UserVideoService"], _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ghKE":
/*!***************************************!*\
  !*** ./src/app/user-video.service.ts ***!
  \***************************************/
/*! exports provided: UserVideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVideoService", function() { return UserVideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class UserVideoService {
    constructor() { }
    getUserCam() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(navigator.mediaDevices.getUserMedia({ video: true, audio: true }));
    }
    getUserScreen() {
        const displayMediaOptions = {
            video: {
                cursor: "always"
            },
            audio: false
        };
        const md = navigator.mediaDevices;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(md.getDisplayMedia(displayMediaOptions));
    }
    createPeerConnection() {
        const configuration = {
            configuration: {
                offerToReceiveAudio: true,
                offerToReceiveVideo: true
            },
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        };
        return new RTCPeerConnection(configuration);
    }
}
UserVideoService.ɵfac = function UserVideoService_Factory(t) { return new (t || UserVideoService)(); };
UserVideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserVideoService, factory: UserVideoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserVideoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nzwC":
/*!*******************************************!*\
  !*** ./src/app/socket-service.service.ts ***!
  \*******************************************/
/*! exports provided: SocketServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketServiceService", function() { return SocketServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-video.service */ "ghKE");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");








class SocketServiceService {
    constructor(http, userVideoService, sanitizer, snackbar) {
        this.http = http;
        this.userVideoService = userVideoService;
        this.sanitizer = sanitizer;
        this.snackbar = snackbar;
        this.connectionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.connections = this.connectionsSubject.asObservable();
        this.channelSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.currentChannel = this.channelSubject.asObservable();
        this.getSocket();
        this.setupListeners();
    }
    getSocket() {
        this.socket = window["socketIo"]();
        this.socket.on("connect", () => {
            this.socket.emit("registerStreamer", {});
        });
    }
    setupListeners() {
        this.socket.on("currentChannel", (channel) => {
            const url = this.sanitizer.bypassSecurityTrustResourceUrl(channel);
            this.channelSubject.next(url);
        });
        this.socket.on("sendMessage", (message) => {
            console.log("message received");
            this.snackbar.open(`${message.name}${message.name ? " : " : ""}${message.message}`, null, { duration: 2000 });
        });
        this.socket.on("sessionId", (data) => { });
        this.socket.on("offer", (from, offer) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const connection = this.allUsers.find((u) => u.sessionId === from);
            if (connection) {
                connection.peerConnection =
                    this.userVideoService.createPeerConnection();
                const streams = yield navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: {
                        echoCancellation: true,
                    },
                });
                streams.getTracks().forEach((track) => {
                    connection.peerConnection.addTrack(track, streams);
                });
                connection.peerConnection.onconnectionstatechange = (event) => { };
                connection.peerConnection.onicecandidate = (event) => {
                    if (event.candidate) {
                        this.socket.emit("iceCandidate", connection.sessionId, this.socket.id, event.candidate);
                    }
                };
                connection.peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
                connection.peerConnection.ontrack = (event) => {
                    connection.stream.addTrack(event.track);
                };
                const answer = yield connection.peerConnection.createAnswer();
                yield connection.peerConnection.setLocalDescription(answer);
                this.socket.emit("answer", connection.sessionId, this.socket.id, answer);
            }
        }));
        this.socket.on("answer", (from, answer) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const connection = this.allUsers.find((u) => u.sessionId === from);
            const remoteDesc = new RTCSessionDescription(answer);
            connection.peerConnection.ontrack = (event) => {
                connection.stream.addTrack(event.track);
            };
            yield connection.peerConnection.setRemoteDescription(remoteDesc);
        }));
        this.socket.on("iceCandidate", (from, iceCandidate) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const connection = this.allUsers.find((u) => u.sessionId === from);
            if (iceCandidate) {
                try {
                    yield connection.peerConnection.addIceCandidate(iceCandidate);
                }
                catch (e) {
                    // ignore errors
                }
            }
        }));
        this.socket.on("allClients", (data) => {
            data = data.filter((session) => session.sessionId !== this.socket.id);
            data.forEach((d) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                d.peerConnection = this.userVideoService.createPeerConnection();
                const streams = yield navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: {
                        echoCancellation: true,
                    },
                });
                streams.getTracks().forEach((track) => {
                    d.peerConnection.addTrack(track, streams);
                });
                d.peerConnection.onconnectionstatechange = (event) => { };
                d.peerConnection.onicecandidate = (event) => {
                    if (event.candidate) {
                        this.socket.emit("iceCandidate", d.sessionId, this.socket.id, event.candidate);
                    }
                };
                const offer = yield d.peerConnection.createOffer();
                yield d.peerConnection.setLocalDescription(offer);
                this.socket.emit("offer", d.sessionId, this.socket.id, offer);
            }));
            this.allUsers = data;
            this.allUsers.forEach((u) => {
                u.stream = new MediaStream();
            });
            this.connectionsSubject.next(data);
        });
        this.socket.on("userDisconnected", (sessionId) => {
            const idx = this.allUsers.findIndex((u) => u.sessionId === sessionId);
            if (idx > -1) {
                this.allUsers.splice(idx, 1);
            }
            this.connectionsSubject.next(this.allUsers);
        });
        this.socket.on("newClientConnected", (connection) => {
            connection.stream = new MediaStream();
            this.allUsers.push(connection);
            this.connectionsSubject.next(this.allUsers);
        });
    }
}
SocketServiceService.ɵfac = function SocketServiceService_Factory(t) { return new (t || SocketServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_video_service__WEBPACK_IMPORTED_MODULE_4__["UserVideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
SocketServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SocketServiceService, factory: SocketServiceService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocketServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _user_video_service__WEBPACK_IMPORTED_MODULE_4__["UserVideoService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "4USb");



class UserService {
    constructor() {
        this.userId = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        this.userName = `Guest[${this.userId.split('-')[0]}]`;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map