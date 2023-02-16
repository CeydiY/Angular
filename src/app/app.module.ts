import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BodyComponent} from "./body/body/body.component";
import {HeaderComponent} from "./header/header/header.component";
import { NavComponent } from './nav/nav/nav.component';
import { FooterComponent } from './footer/footer/footer.component';
import { SideBarComponent } from './side_bar/side-bar/side-bar.component';
import { SideBarToggleComponent } from './side_bar_toggle/side-bar-toggle/side-bar-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SideBarComponent,
    SideBarToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
