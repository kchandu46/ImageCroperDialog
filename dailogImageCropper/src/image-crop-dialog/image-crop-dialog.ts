import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImageCroppedEvent } from "ngx-image-cropper";

@Component({
    selector: 'image-crop-dialog',
    templateUrl: 'image-crop-dialog.html',
})
export class ImageCropDialog {

    croppedImage: any = '';
    constructor(
        public dialogRef: MatDialogRef<ImageCropDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onCancel(): void {
        this.dialogRef.close();
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
  

}