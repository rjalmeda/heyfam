(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rjalmeda/Desktop/projects/heyfam/client/src/main.ts */"zUnb");


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




const _c0 = ["userWindow"];
class AppComponent {
    constructor(socketService, userVideoService) {
        this.socketService = socketService;
        this.userVideoService = userVideoService;
        this.connections = [];
        this.screenCapEnabled = false;
        this.sources = [];
        this.socketService.connections.subscribe((d) => {
            this.connections = d;
        });
        this.userVideoService.currentFeed.subscribe((cam) => {
            cam = cam.clone();
            this.sources = this.userVideoService.sources;
            this.playStream(this.userWindow, cam);
        });
    }
    get EnableVideoToggle() {
        return this.sources.length > 1;
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
    enableUserCam() {
        this.screenCapEnabled = false;
        this.playStream(this.userWindow, this.userCam);
    }
    showConnections(connection) {
        if (connection) {
        }
        else {
        }
    }
    nextSource() {
        if (this.EnableVideoToggle) {
            console.log("toggling devices");
            this.userVideoService.nextSource();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userWindow = _t.first);
    } }, decls: 3, vars: 0, consts: [[1, "video-container", 3, "click"], ["autoplay", ""], ["userWindow", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_0_listener() { return ctx.nextSource(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".video-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 98%;\n  height: 98%;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  \n  min-width: 100%;\n  min-height: 100%;\n  \n  width: auto;\n  height: auto;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNFO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSwrRkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFBSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogOTglO1xuICAgIGhlaWdodDogOTglOyBcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbiAgLnZpZGVvLWNvbnRhaW5lciB2aWRlbyB7XG4gICAgLyogTWFrZSB2aWRlbyB0byBhdCBsZWFzdCAxMDAlIHdpZGUgYW5kIHRhbGwgKi9cbiAgICBtaW4td2lkdGg6IDEwMCU7IFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IFxuICBcbiAgICAvKiBTZXR0aW5nIHdpZHRoICYgaGVpZ2h0IHRvIGF1dG8gcHJldmVudHMgdGhlIGJyb3dzZXIgZnJvbSBzdHJldGNoaW5nIG9yIHNxdWlzaGluZyB0aGUgdmlkZW8gKi9cbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIFxuICAgIC8qIENlbnRlciB0aGUgdmlkZW8gKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
            }]
    }], function () { return [{ type: _socket_service_service__WEBPACK_IMPORTED_MODULE_1__["SocketServiceService"] }, { type: _user_video_service__WEBPACK_IMPORTED_MODULE_2__["UserVideoService"] }]; }, { userWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["userWindow", { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
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
/* harmony import */ var _socket_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket-service.service */ "nzwC");
/* harmony import */ var _user_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-video.service */ "ghKE");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "xdv0");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _socket_service_service__WEBPACK_IMPORTED_MODULE_5__["SocketServiceService"],
        _user_video_service__WEBPACK_IMPORTED_MODULE_6__["UserVideoService"],
        _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ],
                providers: [
                    _socket_service_service__WEBPACK_IMPORTED_MODULE_5__["SocketServiceService"],
                    _user_video_service__WEBPACK_IMPORTED_MODULE_6__["UserVideoService"],
                    _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




class UserVideoService {
    constructor() {
        this.sources = [];
        this.currentSource = 0;
        this.replayVideo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.currentFeed = this.replayVideo.asObservable();
        this.enumerateVideoDevices();
    }
    updateFeed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { deviceId } = this.sources[this.currentSource];
            const stream = yield navigator.mediaDevices.getUserMedia({
                video: {
                    deviceId,
                },
                audio: {
                    echoCancellation: true,
                },
            });
            this.replayVideo.next(stream);
        });
    }
    getUserScreen() {
        const displayMediaOptions = {
            video: {
                cursor: "always",
            },
            audio: false,
        };
        const md = navigator.mediaDevices;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(md.getDisplayMedia(displayMediaOptions));
    }
    createPeerConnection() {
        const configuration = {
            configuration: {
                offerToReceiveAudio: true,
                offerToReceiveVideo: true,
            },
            iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        };
        return new RTCPeerConnection(configuration);
    }
    nextSource() {
        if (this.currentSource >= this.sources.length - 1) {
            this.currentSource = 0;
        }
        else {
            this.currentSource++;
        }
        this.updateFeed();
    }
    enumerateVideoDevices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });
            const devices = yield navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter((device) => !device.kind.toLowerCase().includes("audio"));
            this.sources = videoDevices;
            this.currentSource = 0;
            this.updateFeed();
        });
    }
}
UserVideoService.ɵfac = function UserVideoService_Factory(t) { return new (t || UserVideoService)(); };
UserVideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserVideoService, factory: UserVideoService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserVideoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
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






class SocketServiceService {
    constructor(http, userVideoService) {
        this.http = http;
        this.userVideoService = userVideoService;
        this.connectionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.connections = this.connectionsSubject.asObservable();
        this.getSocket();
        this.setupListeners();
    }
    getSocket() {
        this.socket = window["socketIo"]();
        this.socket.on("connect", () => {
            this.socket.emit("registerClient", {});
        });
    }
    setupListeners() {
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
                this.userVideoService.currentFeed.subscribe((f) => {
                    f = f.clone();
                    const tracks = f.getTracks();
                    const senders = connection.peerConnection.getSenders();
                    senders.forEach((s) => {
                        const track = tracks.find((t) => t.kind === s.track.kind);
                        s.replaceTrack(track);
                    });
                });
                connection.peerConnection.onconnectionstatechange = (event) => { };
                connection.peerConnection.onicecandidate = (event) => {
                    if (event.candidate) {
                        this.socket.emit("iceCandidate", connection.sessionId, this.socket.id, event.candidate);
                    }
                };
                connection.peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
                // connection.peerConnection.ontrack = (event: RTCTrackEvent) => {
                //   connection.stream.addTrack(event.track);
                // };
                const answer = yield connection.peerConnection.createAnswer();
                yield connection.peerConnection.setLocalDescription(answer);
                this.socket.emit("answer", connection.sessionId, this.socket.id, answer);
            }
        }));
        this.socket.on("answer", (from, answer) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const connection = this.allUsers.find((u) => u.sessionId === from);
            const remoteDesc = new RTCSessionDescription(answer);
            // connection.peerConnection.ontrack = (event: RTCTrackEvent) => {
            //   connection.stream.addTrack(event.track);
            // };
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
        this.socket.on("allStreamers", (data) => {
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
            // this.allUsers.forEach((u) => {
            //   u.stream = new MediaStream();
            // });
            this.connectionsSubject.next(data);
        });
        this.socket.on("userDisconnected", (sessionId) => {
            const idx = this.allUsers.findIndex((u) => u.sessionId === sessionId);
            if (idx > -1) {
                this.allUsers.splice(idx, 1);
            }
            this.connectionsSubject.next(this.allUsers);
        });
        this.socket.on("newStreamerConnected", (connection) => {
            // connection.stream = new MediaStream();
            this.allUsers.push(connection);
            this.connectionsSubject.next(this.allUsers);
        });
    }
}
SocketServiceService.ɵfac = function SocketServiceService_Factory(t) { return new (t || SocketServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_video_service__WEBPACK_IMPORTED_MODULE_4__["UserVideoService"])); };
SocketServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SocketServiceService, factory: SocketServiceService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocketServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _user_video_service__WEBPACK_IMPORTED_MODULE_4__["UserVideoService"] }]; }, null); })();


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