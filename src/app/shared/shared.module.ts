import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {UikitHeaderComponent} from "uikit";
import {HeaderModule} from "./components/header/header.module";


@NgModule({
  declarations: [
    // HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // HeaderComponent,
  ]
})
export class SharedModule { }
