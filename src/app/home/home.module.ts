import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from "../shared/components/header/header.module";
import {HeaderComponent} from "../shared/components/header/header.component";
import {HomeComponent} from "./home.component";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    // HeaderModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
