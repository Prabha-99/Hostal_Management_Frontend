import { Component } from '@angular/core';
import { QRCodeInfo } from './QRCodeInfo.model';
import { QRCodeService } from './qrcode.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRCodeComponent {
  image!: File;
  qrCodeInfo!: QRCodeInfo;

  constructor(private qrCodeService: QRCodeService) { }

  onFileChange(event: any) {
    this.image = event.target.files[0];
  }

  uploadImage() {
    if (this.image) {
      this.qrCodeService.uploadImage(this.image).subscribe(
        (data) => {
          this.qrCodeInfo = data;
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }
}
