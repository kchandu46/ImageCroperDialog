import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageCropDialog } from 'src/image-crop-dialog/image-crop-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  logo = '';
  title = 'dailogImageCropper'; 

  constructor(public dialog:MatDialog,
    private changeDetectorRef: ChangeDetectorRef,){

  }

  fileChangeEvent(event){
    const dialogRef = this.dialog.open(ImageCropDialog, {
      data: {image: event}  
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logo= result;
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    });
  }
}
