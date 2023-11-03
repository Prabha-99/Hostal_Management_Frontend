import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ComplainService } from './complain.service';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent {

  successMessage: string = '';
  showMessage: boolean = false;
  
  
  

  complainData: any = {
    cType: 'Broken Property', // Initialize with the default value
    room: '',
    description: '',
  };

  selectedFile: File | undefined;

  constructor(private complainService: ComplainService, private loginService: LoginService ) {}

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


  onSubmit() {
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

}
