(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/rjalmeda/Desktop/projects/heyfam/client/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _socket_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./socket-service.service */
      "nzwC");
      /* harmony import */


      var _user_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-video.service */
      "ghKE");

      var _c0 = ["userWindow"];

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(socketService, userVideoService) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.socketService = socketService;
          this.userVideoService = userVideoService;
          this.connections = [];
          this.screenCapEnabled = false;
          this.sources = [];
          this.socketService.connections.subscribe(function (d) {
            _this.connections = d;
          });
          this.userVideoService.currentFeed.subscribe(function (f) {
            _this.sources = _this.userVideoService.sources;

            _this.playStream(_this.userWindow, f);
          });
        }

        _createClass(AppComponent, [{
          key: "getVideoWindow",
          value: function getVideoWindow(id) {} // public enableScreenCapture() {
          //   this.screenCapEnabled = true;
          //   this.userVideoService.getUserScreen().subscribe((screen: any) => {
          //     screen.getVideoTracks()[0].addEventListener("ended", () => {
          //       this.enableUserCam();
          //     });
          //     this.playStream(this.userWindow, screen);
          //   });
          // }

        }, {
          key: "enableUserCam",
          value: function enableUserCam() {
            this.screenCapEnabled = false;
            this.playStream(this.userWindow, this.userCam);
          }
        }, {
          key: "showConnections",
          value: function showConnections(connection) {
            if (connection) {} else {}
          }
        }, {
          key: "nextSource",
          value: function nextSource() {
            if (this.EnableVideoToggle) {
              console.log("toggling devices");
              this.userVideoService.nextSource();
            }
          }
        }, {
          key: "playStream",
          value: function playStream(elRef, stream) {
            var videoWindow = elRef.nativeElement;
            videoWindow.srcObject = stream;
            videoWindow.muted = true;
            videoWindow.play();
            videoWindow.addEventListener("ended", function () {});
          }
        }, {
          key: "EnableVideoToggle",
          get: function get() {
            return this.sources.length > 1;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service_service__WEBPACK_IMPORTED_MODULE_1__["SocketServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_video_service__WEBPACK_IMPORTED_MODULE_2__["UserVideoService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        viewQuery: function AppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userWindow = _t.first);
          }
        },
        decls: 3,
        vars: 0,
        consts: [[1, "video-container", 3, "click"], ["autoplay", ""], ["userWindow", ""]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_0_listener() {
              return ctx.nextSource();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".video-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 98%;\n  height: 98%;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  \n  min-width: 100%;\n  min-height: 100%;\n  \n  width: auto;\n  height: auto;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNFO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSwrRkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFBSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogOTglO1xuICAgIGhlaWdodDogOTglOyBcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbiAgLnZpZGVvLWNvbnRhaW5lciB2aWRlbyB7XG4gICAgLyogTWFrZSB2aWRlbyB0byBhdCBsZWFzdCAxMDAlIHdpZGUgYW5kIHRhbGwgKi9cbiAgICBtaW4td2lkdGg6IDEwMCU7IFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IFxuICBcbiAgICAvKiBTZXR0aW5nIHdpZHRoICYgaGVpZ2h0IHRvIGF1dG8gcHJldmVudHMgdGhlIGJyb3dzZXIgZnJvbSBzdHJldGNoaW5nIG9yIHNxdWlzaGluZyB0aGUgdmlkZW8gKi9cbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIFxuICAgIC8qIENlbnRlciB0aGUgdmlkZW8gKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.scss"]
          }]
        }], function () {
          return [{
            type: _socket_service_service__WEBPACK_IMPORTED_MODULE_1__["SocketServiceService"]
          }, {
            type: _user_video_service__WEBPACK_IMPORTED_MODULE_2__["UserVideoService"]
          }];
        }, {
          userWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["userWindow", {
              "static": false,
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _socket_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./socket-service.service */
      "nzwC");
      /* harmony import */


      var _user_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-video.service */
      "ghKE");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user.service */
      "xdv0");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_socket_service_service__WEBPACK_IMPORTED_MODULE_5__["SocketServiceService"], _user_video_service__WEBPACK_IMPORTED_MODULE_6__["UserVideoService"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [_socket_service_service__WEBPACK_IMPORTED_MODULE_5__["SocketServiceService"], _user_video_service__WEBPACK_IMPORTED_MODULE_6__["UserVideoService"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ghKE":
    /*!***************************************!*\
      !*** ./src/app/user-video.service.ts ***!
      \***************************************/

    /*! exports provided: UserVideoService */

    /***/
    function ghKE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserVideoService", function () {
        return UserVideoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var UserVideoService = /*#__PURE__*/function () {
        function UserVideoService() {
          _classCallCheck(this, UserVideoService);

          this.sources = [];
          this.currentSource = 0;
          this.replayVideo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.currentFeed = this.replayVideo.asObservable();
          this.enumerateVideoDevices();
        }

        _createClass(UserVideoService, [{
          key: "updateFeed",
          value: function updateFeed() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var deviceId, media;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      deviceId = this.sources[this.currentSource].deviceId;
                      _context.next = 3;
                      return navigator.mediaDevices.getUserMedia({
                        video: {
                          deviceId: deviceId
                        },
                        audio: {
                          echoCancellation: true
                        }
                      });

                    case 3:
                      media = _context.sent;
                      this.media = media.clone();
                      this.replayVideo.next(media);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getStream",
          value: function getStream() {} // public getUserScreen() {
          //   const displayMediaOptions = {
          //     video: {
          //       cursor: "always",
          //     },
          //     audio: false,
          //   };
          //   const md: any = navigator.mediaDevices;
          //   return from(md.getDisplayMedia(displayMediaOptions));
          // }

        }, {
          key: "createPeerConnection",
          value: function createPeerConnection() {
            var configuration = {
              configuration: {
                offerToReceiveAudio: true,
                offerToReceiveVideo: true
              },
              iceServers: [{
                urls: "stun:stun.l.google.com:19302"
              }]
            };
            return new RTCPeerConnection(configuration);
          }
        }, {
          key: "nextSource",
          value: function nextSource() {
            if (this.currentSource >= this.sources.length - 1) {
              this.currentSource = 0;
            } else {
              this.currentSource++;
            }

            this.updateFeed();
          }
        }, {
          key: "enumerateVideoDevices",
          value: function enumerateVideoDevices() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var devices, videoDevices;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return navigator.mediaDevices.getUserMedia({
                        video: true,
                        audio: true
                      });

                    case 2:
                      _context2.next = 4;
                      return navigator.mediaDevices.enumerateDevices();

                    case 4:
                      devices = _context2.sent;
                      videoDevices = devices.filter(function (device) {
                        return !device.kind.toLowerCase().includes("audio");
                      });
                      this.sources = videoDevices;
                      this.currentSource = 0;
                      this.updateFeed();

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return UserVideoService;
      }();

      UserVideoService.ɵfac = function UserVideoService_Factory(t) {
        return new (t || UserVideoService)();
      };

      UserVideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserVideoService,
        factory: UserVideoService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserVideoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "nzwC":
    /*!*******************************************!*\
      !*** ./src/app/socket-service.service.ts ***!
      \*******************************************/

    /*! exports provided: SocketServiceService */

    /***/
    function nzwC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocketServiceService", function () {
        return SocketServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _user_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-video.service */
      "ghKE");

      var SocketServiceService = /*#__PURE__*/function () {
        function SocketServiceService(http, userVideoService) {
          _classCallCheck(this, SocketServiceService);

          this.http = http;
          this.userVideoService = userVideoService;
          this.connectionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.connections = this.connectionsSubject.asObservable();
          this.getSocket();
          this.setupListeners();
        }

        _createClass(SocketServiceService, [{
          key: "getSocket",
          value: function getSocket() {
            var _this2 = this;

            this.socket = window["socketIo"]();
            this.socket.on("connect", function () {
              _this2.socket.emit("registerClient", {});
            });
          }
        }, {
          key: "setupListeners",
          value: function setupListeners() {
            var _this3 = this;

            this.socket.on("sessionId", function (data) {});
            this.socket.on("offer", function (from, offer) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this4 = this;

                var connection, answer;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        connection = this.allUsers.find(function (u) {
                          return u.sessionId === from;
                        });

                        if (!connection) {
                          _context3.next = 14;
                          break;
                        }

                        connection.peerConnection = this.userVideoService.createPeerConnection();
                        this.userVideoService.media.getTracks().forEach(function (track) {
                          connection.peerConnection.addTrack(track, _this4.userVideoService.media);
                        });
                        this.userVideoService.currentFeed.subscribe(function (f) {
                          var tracks = f.getTracks();
                          var senders = connection.peerConnection.getSenders();
                          senders.forEach(function (s) {
                            var track = tracks.find(function (t) {
                              return t.kind === s.track.kind;
                            });
                            s.replaceTrack(track);
                          });
                        });

                        connection.peerConnection.onconnectionstatechange = function (event) {};

                        connection.peerConnection.onicecandidate = function (event) {
                          if (event.candidate) {
                            _this4.socket.emit("iceCandidate", connection.sessionId, _this4.socket.id, event.candidate);
                          }
                        };

                        connection.peerConnection.setRemoteDescription(new RTCSessionDescription(offer)); // connection.peerConnection.ontrack = (event: RTCTrackEvent) => {
                        //   connection.stream.addTrack(event.track);
                        // };

                        _context3.next = 10;
                        return connection.peerConnection.createAnswer();

                      case 10:
                        answer = _context3.sent;
                        _context3.next = 13;
                        return connection.peerConnection.setLocalDescription(answer);

                      case 13:
                        this.socket.emit("answer", connection.sessionId, this.socket.id, answer);

                      case 14:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
            this.socket.on("answer", function (from, answer) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var connection, remoteDesc;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        connection = this.allUsers.find(function (u) {
                          return u.sessionId === from;
                        });
                        remoteDesc = new RTCSessionDescription(answer); // connection.peerConnection.ontrack = (event: RTCTrackEvent) => {
                        //   connection.stream.addTrack(event.track);
                        // };

                        _context4.next = 4;
                        return connection.peerConnection.setRemoteDescription(remoteDesc);

                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
            this.socket.on("iceCandidate", function (from, iceCandidate) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var connection;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        connection = this.allUsers.find(function (u) {
                          return u.sessionId === from;
                        });

                        if (!iceCandidate) {
                          _context5.next = 9;
                          break;
                        }

                        _context5.prev = 2;
                        _context5.next = 5;
                        return connection.peerConnection.addIceCandidate(iceCandidate);

                      case 5:
                        _context5.next = 9;
                        break;

                      case 7:
                        _context5.prev = 7;
                        _context5.t0 = _context5["catch"](2);

                      case 9:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this, [[2, 7]]);
              }));
            });
            this.socket.on("allStreamers", function (data) {
              data = data.filter(function (session) {
                return session.sessionId !== _this3.socket.id;
              });
              data.forEach(function (d) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  var _this5 = this;

                  var offer;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          d.peerConnection = this.userVideoService.createPeerConnection();
                          this.userVideoService.media.getTracks().forEach(function (track) {
                            d.peerConnection.addTrack(track, _this5.userVideoService.media);
                          });
                          this.userVideoService.currentFeed.subscribe(function (f) {
                            var tracks = f.getTracks();
                            var senders = d.peerConnection.getSenders();
                            senders.forEach(function (s) {
                              var track = tracks.find(function (t) {
                                return t.kind === s.track.kind;
                              });
                              s.replaceTrack(track);
                            });
                          });

                          d.peerConnection.onconnectionstatechange = function (event) {};

                          d.peerConnection.onicecandidate = function (event) {
                            if (event.candidate) {
                              _this5.socket.emit("iceCandidate", d.sessionId, _this5.socket.id, event.candidate);
                            }
                          };

                          _context6.next = 7;
                          return d.peerConnection.createOffer();

                        case 7:
                          offer = _context6.sent;
                          _context6.next = 10;
                          return d.peerConnection.setLocalDescription(offer);

                        case 10:
                          this.socket.emit("offer", d.sessionId, this.socket.id, offer);

                        case 11:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, this);
                }));
              });
              _this3.allUsers = data;

              _this3.connectionsSubject.next(data);
            });
            this.socket.on("userDisconnected", function (sessionId) {
              var idx = _this3.allUsers.findIndex(function (u) {
                return u.sessionId === sessionId;
              });

              if (idx > -1) {
                _this3.allUsers.splice(idx, 1);
              }

              _this3.connectionsSubject.next(_this3.allUsers);
            });
            this.socket.on("newStreamerConnected", function (connection) {
              _this3.allUsers.push(connection);

              _this3.connectionsSubject.next(_this3.allUsers);
            });
          }
        }]);

        return SocketServiceService;
      }();

      SocketServiceService.ɵfac = function SocketServiceService_Factory(t) {
        return new (t || SocketServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_video_service__WEBPACK_IMPORTED_MODULE_4__["UserVideoService"]));
      };

      SocketServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: SocketServiceService,
        factory: SocketServiceService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocketServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _user_video_service__WEBPACK_IMPORTED_MODULE_4__["UserVideoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xdv0":
    /*!*********************************!*\
      !*** ./src/app/user.service.ts ***!
      \*********************************/

    /*! exports provided: UserService */

    /***/
    function xdv0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! uuid */
      "4USb");

      var UserService = function UserService() {
        _classCallCheck(this, UserService);

        this.userId = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        this.userName = "Guest[".concat(this.userId.split('-')[0], "]");
      };

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)();
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map