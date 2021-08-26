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
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["userWindow"];

      function AppComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var m_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.name || "anonymous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", m_r1.message, "");
        }
      }

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      var AppComponent = /*#__PURE__*/function () {
        // @ViewChildren("videoStreams")
        // private videoStreamsWindows: ElementRef[];
        function AppComponent(socketService, userVideoService) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.socketService = socketService;
          this.userVideoService = userVideoService;
          this.connections = [];
          this.screenCapEnabled = false;
          this.sources = [];
          this.messages = [];
          this.socketService.connections.subscribe(function (d) {
            _this.connections = d;
          });
          this.socketService.currentChannel.subscribe(function (channel) {
            _this.streamUrl = channel;
          }); // this.userVideoService.getFeed().then((cam) => {
          //   this.userCam = cam;
          //   this.playStream(this.userWindow, cam);
          // });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
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
          value: function ngOnInit() {
            this.messages = this.socketService.messages;
          }
        }, {
          key: "enableScreenCapture",
          value: function enableScreenCapture() {
            var _this2 = this;

            this.screenCapEnabled = true;
            this.userVideoService.getUserScreen().subscribe(function (screen) {
              screen.getVideoTracks()[0].addEventListener("ended", function () {
                _this2.enableUserCam();
              });

              _this2.playStream(_this2.userWindow, screen);
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
          key: "clearUrl",
          value: function clearUrl() {
            this.streamUrl = "";
          }
        }, {
          key: "updateStream",
          value: function updateStream() {
            if (confirm("Update Current Channel")) {
              this.socketService.updateChannel(this.streamUrl);
              this.socketService.sendMessage({
                name: "ROBO",
                message: "".concat(this.name || "Anonymous", " changed the video to ").concat(this.streamUrl)
              });
            }
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            if (this.message) {
              this.socketService.sendMessage({
                name: this.name,
                message: this.message
              });
            }

            this.message = "";
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
        decls: 30,
        vars: 10,
        consts: [["appearance", "fill", 2, "width", "90vw"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [1, "chat-wrapper"], [1, "chat-box"], [4, "ngFor", "ngForOf"], [2, "margin-top", "2em", 3, "submit"], ["appearance", "fill", 2, "width", "60vw"], ["mat-raised-button", "", "type", "submit", 2, "margin-left", "1em"], [2, "font-style", "italic"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stream Camera Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Current Channel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.streamUrl = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() {
              return ctx.clearUrl();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() {
              return ctx.updateStream();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Update Stream");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_ng_container_22_Template, 6, 2, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_Template_form_submit_23_listener() {
              return ctx.sendMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_27_listener($event) {
              return ctx.message = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Send ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.streamUrl)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]],
        styles: [".video-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 98%;\n  height: 98%;\n  overflow: hidden;\n  z-index: 0;\n}\n.video-container[_ngcontent-%COMP%]   .controller-button[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  top: 3em;\n  right: 3em;\n  width: 3em;\n  height: 3em;\n  border: 1px solid green;\n}\n.video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  \n  min-width: 100%;\n  min-height: 100%;\n  \n  width: auto;\n  height: auto;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.chat-wrapper[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  height: 40vh;\n  background: lightgray;\n  position: relative;\n  overflow: hidden;\n}\n.chat-box[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  word-break: normal;\n  overflow: hidden;\n  bottom: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUVFO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSwrRkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFESiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogOTglO1xuICAgIGhlaWdodDogOTglOyBcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDA7XG5cbiAgICAuY29udHJvbGxlci1idXR0b24ge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogM2VtO1xuICAgICAgICByaWdodDogM2VtO1xuICAgICAgICB3aWR0aDogM2VtO1xuICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgfVxuICB9XG4gIC52aWRlby1jb250YWluZXIgdmlkZW8ge1xuICAgIC8qIE1ha2UgdmlkZW8gdG8gYXQgbGVhc3QgMTAwJSB3aWRlIGFuZCB0YWxsICovXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcbiAgICBtaW4taGVpZ2h0OiAxMDAlOyBcbiAgXG4gICAgLyogU2V0dGluZyB3aWR0aCAmIGhlaWdodCB0byBhdXRvIHByZXZlbnRzIHRoZSBicm93c2VyIGZyb20gc3RyZXRjaGluZyBvciBzcXVpc2hpbmcgdGhlIHZpZGVvICovXG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICBcbiAgICAvKiBDZW50ZXIgdGhlIHZpZGVvICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICB9XG5cbiAgLmNoYXQtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAyMTEsIDIxMSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuY2hhdC1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm90dG9tOiAwLjVlbTtcbiAgfVxuIl19 */"]
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _socket_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./socket-service.service */
      "nzwC");
      /* harmony import */


      var _user_video_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-video.service */
      "ghKE");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./user.service */
      "xdv0");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_socket_service_service__WEBPACK_IMPORTED_MODULE_10__["SocketServiceService"], _user_video_service__WEBPACK_IMPORTED_MODULE_11__["UserVideoService"], _user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]],
            providers: [_socket_service_service__WEBPACK_IMPORTED_MODULE_10__["SocketServiceService"], _user_video_service__WEBPACK_IMPORTED_MODULE_11__["UserVideoService"], _user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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
        }

        _createClass(UserVideoService, [{
          key: "getFeed",
          value: function getFeed() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var videoStreams, isVideoAvailable;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return navigator.mediaDevices.enumerateDevices();

                    case 2:
                      videoStreams = _context.sent;
                      isVideoAvailable = videoStreams.some(function (d) {
                        return d.kind === "videoinput";
                      });
                      _context.next = 6;
                      return navigator.mediaDevices.getUserMedia({
                        video: isVideoAvailable,
                        audio: {
                          echoCancellation: true
                        }
                      });

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(md.getDisplayMedia(displayMediaOptions));
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
                urls: "stun:stun.l.google.com:19302"
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
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var SocketServiceService = /*#__PURE__*/function () {
        function SocketServiceService(http, userVideoService, sanitizer) {
          _classCallCheck(this, SocketServiceService);

          this.http = http;
          this.userVideoService = userVideoService;
          this.sanitizer = sanitizer;
          this.connectionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.connections = this.connectionsSubject.asObservable();
          this.channelSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.currentChannel = this.channelSubject.asObservable();
          this.messages = [];
          this.camEnabled = false;
          this.getSocket();
          this.setupListeners();
        }

        _createClass(SocketServiceService, [{
          key: "updateChannel",
          value: function updateChannel(channel) {
            this.socket.emit("updateChannel", channel);
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(message) {
            this.messages.push(message);
            this.socket.emit("sendMessage", message);
          }
        }, {
          key: "getSocket",
          value: function getSocket() {
            var _this3 = this;

            this.socket = window["socketIo"]();
            this.socket.on("connect", function () {
              _this3.socket.emit("registerClient", {});
            });
          }
        }, {
          key: "setupListeners",
          value: function setupListeners() {
            var _this4 = this;

            this.socket.on("channelJoined", function () {
              console.log("channel joined");

              _this4.socket.emit("registerClient", {});
            });
            this.socket.on("currentChannel", function (channel) {
              _this4.channelSubject.next(channel);
            });
            this.socket.on("sendMessage", function (message) {
              _this4.messages.push(message);
            });
            this.socket.on("sessionId", function (data) {});

            if (this.camEnabled) {
              this.socket.on("offer", function (from, offer) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _this5 = this;

                  var connection, videoStreams, isVideoAvailable, streams, answer;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          connection = this.allUsers.find(function (u) {
                            return u.sessionId === from;
                          });

                          if (!connection) {
                            _context2.next = 21;
                            break;
                          }

                          connection.peerConnection = this.userVideoService.createPeerConnection();
                          _context2.next = 5;
                          return navigator.mediaDevices.enumerateDevices();

                        case 5:
                          videoStreams = _context2.sent;
                          isVideoAvailable = videoStreams.some(function (d) {
                            return d.kind === "videoinput";
                          });
                          _context2.next = 9;
                          return navigator.mediaDevices.getUserMedia({
                            video: isVideoAvailable,
                            audio: {
                              echoCancellation: true
                            }
                          });

                        case 9:
                          streams = _context2.sent;
                          streams.getTracks().forEach(function (track) {
                            connection.peerConnection.addTrack(track, streams);
                          });
                          this.userVideoService.getFeed().then(function (f) {
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
                              _this5.socket.emit("iceCandidate", connection.sessionId, _this5.socket.id, event.candidate);
                            }
                          };

                          connection.peerConnection.setRemoteDescription(new RTCSessionDescription(offer)); // connection.peerConnection.ontrack = (event: RTCTrackEvent) => {
                          //   connection.stream.addTrack(event.track);
                          // };

                          _context2.next = 17;
                          return connection.peerConnection.createAnswer();

                        case 17:
                          answer = _context2.sent;
                          _context2.next = 20;
                          return connection.peerConnection.setLocalDescription(answer);

                        case 20:
                          this.socket.emit("answer", connection.sessionId, this.socket.id, answer);

                        case 21:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
              this.socket.on("answer", function (from, answer) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var connection, remoteDesc;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          connection = this.allUsers.find(function (u) {
                            return u.sessionId === from;
                          });
                          remoteDesc = new RTCSessionDescription(answer); // connection.peerConnection.ontrack = (event: RTCTrackEvent) => {
                          //   connection.stream.addTrack(event.track);
                          // };

                          _context3.next = 4;
                          return connection.peerConnection.setRemoteDescription(remoteDesc);

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              });
              this.socket.on("iceCandidate", function (from, iceCandidate) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  var connection;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          connection = this.allUsers.find(function (u) {
                            return u.sessionId === from;
                          });

                          if (!iceCandidate) {
                            _context4.next = 9;
                            break;
                          }

                          _context4.prev = 2;
                          _context4.next = 5;
                          return connection.peerConnection.addIceCandidate(iceCandidate);

                        case 5:
                          _context4.next = 9;
                          break;

                        case 7:
                          _context4.prev = 7;
                          _context4.t0 = _context4["catch"](2);

                        case 9:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this, [[2, 7]]);
                }));
              });
              this.socket.on("allStreamers", function (data) {
                data = data.filter(function (session) {
                  return session.sessionId !== _this4.socket.id;
                });
                data.forEach(function (d) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                    var _this6 = this;

                    var streams, offer;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            d.peerConnection = this.userVideoService.createPeerConnection();
                            _context5.next = 3;
                            return navigator.mediaDevices.getUserMedia({
                              video: true,
                              audio: {
                                echoCancellation: true
                              }
                            });

                          case 3:
                            streams = _context5.sent;
                            streams.getTracks().forEach(function (track) {
                              d.peerConnection.addTrack(track, streams);
                            });

                            d.peerConnection.onconnectionstatechange = function (event) {};

                            d.peerConnection.onicecandidate = function (event) {
                              if (event.candidate) {
                                _this6.socket.emit("iceCandidate", d.sessionId, _this6.socket.id, event.candidate);
                              }
                            };

                            _context5.next = 9;
                            return d.peerConnection.createOffer();

                          case 9:
                            offer = _context5.sent;
                            _context5.next = 12;
                            return d.peerConnection.setLocalDescription(offer);

                          case 12:
                            this.socket.emit("offer", d.sessionId, this.socket.id, offer);

                          case 13:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));
                });
                _this4.allUsers = data; // this.allUsers.forEach((u) => {
                //   u.stream = new MediaStream();
                // });

                _this4.connectionsSubject.next(data);
              });
              this.socket.on("newStreamerConnected", function (connection) {
                // connection.stream = new MediaStream();
                _this4.allUsers.push(connection);

                _this4.connectionsSubject.next(_this4.allUsers);
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
            }
          }
        }]);

        return SocketServiceService;
      }();

      SocketServiceService.ɵfac = function SocketServiceService_Factory(t) {
        return new (t || SocketServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_video_service__WEBPACK_IMPORTED_MODULE_4__["UserVideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
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
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
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