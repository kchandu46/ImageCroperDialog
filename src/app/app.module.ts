import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageCropDialog } from 'src/image-crop-dialog/image-crop-dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ImageCropDialog
  ],
  imports: [
    BrowserAnimationsModule,
    ImageCropperModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports:[ImageCropDialog],
  entryComponents:[ImageCropDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
