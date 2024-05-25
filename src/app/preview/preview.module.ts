import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UikitButtonComponent,
  UikitCopyrightComponent,
  UikitFooterComponent,
  UikitGalleryComponent,
  UikitHeaderComponent,
  UikitInputComponent,
  UikitTextareaComponent } from 'uikit';
import { PreviewComponent } from './preview.component';
import { PreviewRoutingModule } from './preview-routing.module';


@NgModule({
  declarations: [PreviewComponent],
  imports: [
    CommonModule,
    PreviewRoutingModule,
    UikitButtonComponent,
    UikitCopyrightComponent,
    UikitFooterComponent,
    UikitGalleryComponent,
    UikitHeaderComponent,
    UikitInputComponent,
    UikitTextareaComponent
  ],
  exports: [PreviewComponent]
})
export class PreviewModule { }
