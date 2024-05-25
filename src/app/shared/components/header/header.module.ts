import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {UikitHeaderComponent} from "uikit";
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    UikitHeaderComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
