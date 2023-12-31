import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ComplainService } from './complain.service';
import { LoginService } from '../Service/login.service';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent {

  @ViewChild('scanner', { static: false })
  scanner!: ZXingScannerComponent;
  propID: string = '';
  allowedFormats = [BarcodeFormat.QR_CODE];

  successMessage: string = '';
  showMessage: boolean = false;

  room: string | undefined;
  firstname: string | undefined;
  reg_no: string | undefined;

  complainData: any = {
    cType: '', // Initialize with the default value
    description: '',
  };

  selectedFile: File | undefined;

  constructor(
    private http: HttpClient,
    private complainService: ComplainService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.getUserInfo().subscribe((user) => {
      this.room = user.room;
      this.firstname = user.firstname;
      this.reg_no = user.reg_no;
    });
  }

  resetForm(): void {
    this.complainData = {
      cType: '',
      room: '',
      description: '',
    };
    this.selectedFile = undefined;
  }

  // Method to hide the success message
  hideMessage(): void {
    this.showMessage = false;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    console.log('Devices: ', devices);
    this.scanner.device = devices[0];
  }

  onCodeScanned(result: string): void {
    this.propID = result;
    console.log('Scanned PropID: ', this.propID);
    this.showAlert('QR Code Scanned: ' + this.propID);
  }

  onSubmit() {
    this.complainData.propID = this.propID; // Include the propID in the complaint data

    if (this.selectedFile) {
      this.uploadFile(this.selectedFile).subscribe((fileUrl) => {
        this.complainData.imagePath = fileUrl; // Store the file path in the complainData object
        this.submitComplaint();
      });
    } else {
      this.submitComplaint();
    }
  }

  submitComplaint() {
    this.complainService.submitComplain(this.complainData).subscribe(
      (response) => {
        console.log(response.reg_no);
        this.successMessage = 'Complaint submitted successfully!';
        this.showMessage = true; // Show the message
        this.resetForm(); // Reset the form after successful submission

        // Set a timeout to hide the message after 5 seconds (adjust as needed)
        setTimeout(() => {
          this.hideMessage();
        }, 5000);
      },
      (error) => {
        console.error('Error submitting complaint:', error);
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  private uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);

    return this.complainService.uploadFile(formData);
  }

  private showAlert(message: string): void {
    alert(message);
  }
}
