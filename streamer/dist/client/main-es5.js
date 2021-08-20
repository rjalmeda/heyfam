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
      /*! /Users/rjalmeda/Desktop/projects/heyfam/streamer/src/main.ts */
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["userWindow"];
      var _c1 = ["videoStreams"];

      function AppComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var c_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", c_r2.sessionId);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(socketService, userVideoService) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.socketService = socketService;
          this.userVideoService = userVideoService;
          this.connections = [];
          this.screenCapEnabled = false;
          this.socketService.connections.subscribe(function (d) {
            _this.connections = d;
          });
          this.userVideoService.getUserCam().subscribe(function (cam) {
            _this.userCam = cam;

            _this.playStream(_this.userWindow, cam);
          });
        }

        _createClass(AppComponent, [{
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this2 = this;

            this.videoStreamsWindows.forEach(function (s) {
              if (!s.nativeElement.srcObject) {
                var c = _this2.connections.find(function (connection) {
                  return connection.sessionId === s.nativeElement.id;
                });

                s.nativeElement.srcObject = c.stream;
              }
            });
          }
        }, {
          key: "getVideoWindow",
          value: function getVideoWindow(id) {}
        }, {
          key: "enableScreenCapture",
          value: function enableScreenCapture() {
            var _this3 = this;

            this.screenCapEnabled = true;
            this.userVideoService.getUserScreen().subscribe(function (screen) {
              screen.getVideoTracks()[0].addEventListener("ended", function () {
                _this3.enableUserCam();
              });

              _this3.playStream(_this3.userWindow, screen);
            });
          }
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
          key: "playStream",
          value: function playStream(elRef, stream) {
            var videoWindow = elRef.nativeElement;
            videoWindow.srcObject = stream;
            videoWindow.muted = true;
            videoWindow.play();
            videoWindow.addEventListener("ended", function () {});
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userWindow = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoStreamsWindows = _t);
          }
        },
        decls: 3,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], ["width", "100", "height", "100", 2, "border", "1px solid red"], ["userWindow", ""], ["width", "100", "height", "100", "autoplay", "", 2, "border", "1px solid blue", 3, "id"], ["videoStreams", ""]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 3, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.connections);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
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
          }],
          videoStreamsWindows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ["videoStreams"]
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var UserVideoService = /*#__PURE__*/function () {
        function UserVideoService() {
          _classCallCheck(this, UserVideoService);
        }

        _createClass(UserVideoService, [{
          key: "getUserCam",
          value: function getUserCam() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(navigator.mediaDevices.getUserMedia({
              video: true,
              audio: true
            }));
          }
        }, {
          key: "getUserScreen",
          value: function getUserScreen() {
            var displayMediaOptions = {
              video: {
                cursor: "always"
              },
              audio: false
            };
            var md = navigator.mediaDevices;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(md.getDisplayMedia(displayMediaOptions));
          }
        }, {
          key: "createPeerConnection",
          value: function createPeerConnection() {
            var configuration = {
              configuration: {
                offerToReceiveAudio: true,
                offerToReceiveVideo: true
              },
              iceServers: [{
                urls: 'stun:stun.l.google.com:19302'
              }]
            };
            return new RTCPeerConnection(configuration);
          }
        }]);

        return UserVideoService;
      }();

      UserVideoService.ɵfac = function UserVideoService_Factory(t) {
        return new (t || UserVideoService)();
      };

      UserVideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserVideoService,
        factory: UserVideoService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserVideoService, [{
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
            this.socket = window["socketIo"]();
            this.socket.on("connect", function () {});
          }
        }, {
          key: "setupListeners",
          value: function setupListeners() {
            var _this4 = this;

            this.socket.on("sessionId", function (data) {});
            this.socket.on("offer", function (from, offer) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this5 = this;

                var connection, streams, answer;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        connection = this.allUsers.find(function (u) {
                          return u.sessionId === from;
                        });

                        if (!connection) {
                          _context.next = 17;
                          break;
                        }

                        connection.peerConnection = this.userVideoService.createPeerConnection();
                        _context.next = 5;
                        return navigator.mediaDevices.getUserMedia({
                          video: true,
                          audio: {
                            echoCancellation: true
                          }
                        });

                      case 5:
                        streams = _context.sent;
                        streams.getTracks().forEach(function (track) {
                          connection.peerConnection.addTrack(track, streams);
                        });

                        connection.peerConnection.onconnectionstatechange = function (event) {};

                        connection.peerConnection.onicecandidate = function (event) {
                          if (event.candidate) {
                            _this5.socket.emit("iceCandidate", connection.sessionId, _this5.socket.id, event.candidate);
                          }
                        };

                        connection.peerConnection.setRemoteDescription(new RTCSessionDescription(offer));

                        connection.peerConnection.ontrack = function (event) {
                          connection.stream.addTrack(event.track);
                        };

                        _context.next = 13;
                        return connection.peerConnection.createAnswer();

                      case 13:
                        answer = _context.sent;
                        _context.next = 16;
                        return connection.peerConnection.setLocalDescription(answer);

                      case 16:
                        this.socket.emit("answer", connection.sessionId, this.socket.id, answer);

                      case 17:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
            this.socket.on("answer", function (from, answer) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var connection, remoteDesc;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        connection = this.allUsers.find(function (u) {
                          return u.sessionId === from;
                        });
                        remoteDesc = new RTCSessionDescription(answer);

                        connection.peerConnection.ontrack = function (event) {
                          connection.stream.addTrack(event.track);
                        };

                        _context2.next = 5;
                        return connection.peerConnection.setRemoteDescription(remoteDesc);

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
            this.socket.on("iceCandidate", function (from, iceCandidate) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var connection;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        connection = this.allUsers.find(function (u) {
                          return u.sessionId === from;
                        });

                        if (!iceCandidate) {
                          _context3.next = 9;
                          break;
                        }

                        _context3.prev = 2;
                        _context3.next = 5;
                        return connection.peerConnection.addIceCandidate(iceCandidate);

                      case 5:
                        _context3.next = 9;
                        break;

                      case 7:
                        _context3.prev = 7;
                        _context3.t0 = _context3["catch"](2);

                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 7]]);
              }));
            });
            this.socket.on("allUsers", function (data) {
              data = data.filter(function (session) {
                return session.sessionId !== _this4.socket.id;
              });
              data.forEach(function (d) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  var _this6 = this;

                  var streams, offer;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          d.peerConnection = this.userVideoService.createPeerConnection();
                          _context4.next = 3;
                          return navigator.mediaDevices.getUserMedia({
                            video: true,
                            audio: {
                              echoCancellation: true
                            }
                          });

                        case 3:
                          streams = _context4.sent;
                          streams.getTracks().forEach(function (track) {
                            d.peerConnection.addTrack(track, streams);
                          });

                          d.peerConnection.onconnectionstatechange = function (event) {};

                          d.peerConnection.onicecandidate = function (event) {
                            if (event.candidate) {
                              _this6.socket.emit("iceCandidate", d.sessionId, _this6.socket.id, event.candidate);
                            }
                          };

                          _context4.next = 9;
                          return d.peerConnection.createOffer();

                        case 9:
                          offer = _context4.sent;
                          _context4.next = 12;
                          return d.peerConnection.setLocalDescription(offer);

                        case 12:
                          this.socket.emit("offer", d.sessionId, this.socket.id, offer);

                        case 13:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));
              });
              _this4.allUsers = data;

              _this4.allUsers.forEach(function (u) {
                u.stream = new MediaStream();
              });

              _this4.connectionsSubject.next(data);
            });
            this.socket.on("userDisconnected", function (sessionId) {
              var idx = _this4.allUsers.findIndex(function (u) {
                return u.sessionId === sessionId;
              });

              if (idx > -1) {
                _this4.allUsers.splice(idx, 1);
              }

              _this4.connectionsSubject.next(_this4.allUsers);
            });
            this.socket.on("newUserConnected", function (connection) {
              connection.stream = new MediaStream();

              _this4.allUsers.push(connection);

              _this4.connectionsSubject.next(_this4.allUsers);
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