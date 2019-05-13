import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import bootstrap from "bootstrap";

import { AppComponent } from "./app.component";
import { BannerComponent } from "./header/banner.component";

@NgModule({
  declarations: [AppComponent, BannerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
