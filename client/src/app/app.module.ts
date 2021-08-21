import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { SocketServiceService } from "./socket-service.service";
import { UserVideoService } from "./user-video.service";
import { UserService } from "./user.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SocketServiceService, UserVideoService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
