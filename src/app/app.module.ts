import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { PreviewModule } from './preview/preview.module';
import { HomeModule } from './home/home.module';
import {SharedModule} from "./shared/shared.module";
import {HeaderModule} from "./shared/components/header/header.module";
import {UikitHeaderComponent} from "uikit";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HomeModule,
    UikitHeaderComponent,
    // PreviewModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
