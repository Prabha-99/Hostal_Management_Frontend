import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AwComplainsService } from './aw-complains.service';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-aw-complains',
  templateUrl: './aw-complains.component.html',
  styleUrls: ['./aw-complains.component.css']
})
export class AwComplainsComponent {

  files!: any[];
  originalFiles!: any[]; // Store the original files before filtering
  searchValue: Date | null | undefined;
  error='';
  reg_no: string | undefined;


  constructor(
    private router: Router,
    private http: HttpClient,
    private awComplainsService: AwComplainsService,
    private loginService: LoginService ) { }

  reloadPage() {
    this.router.navigate(['/sw-complains'], {
      queryParamsHandling: 'merge', // Preserve query parameters
    });
  }


  ngOnInit(): void {

    this.awComplainsService.getAllFiles().subscribe(
      (response) => {
        this.files = response;
        this.originalFiles = response; // Assign the fetched files to originalFiles
      },
      (error) => {
        console.log('Error retrieving files:', error);
      }
    );

    this.loginService.getUserInfo().subscribe(user => {
      this.reg_no = user.reg_no;
      
    });
  }


  // downloadFile(cid: number, report_name: string) {

  //   const httpOptions = {
  //     responseType: 'blob' as 'json',
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };

  //   // Send a GET request to the backend endpoint
  //   this.http.get('http://localhost:8080/api/academicwardencomplains/download?id=' + cid, httpOptions)
  //   .subscribe((response: any) => {

  //       // Create a blob from the response data
  //       const blob = new Blob([response], { type: 'application/octet-stream' });

  //       // Create a temporary URL for the blob
  //       const url = URL.createObjectURL(blob);

  //       // Trigger the file download
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = report_name;
  //       link.click();
  //     }, error => {
  //       console.error('Error occurred while downloading the file:', error);
  //     });
  // }


  downloadFile(cid: number) {
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Send a GET request to the backend endpoint
    this.http.get('http://localhost:8080/api/academicwardencomplains/download?id=' + cid, httpOptions)
    .subscribe((response: any) => { // Use 'any' type for the response
        // Create a temporary URL for the blob
        const url = URL.createObjectURL(response);

        // Trigger the file download
        const link = document.createElement('a');
        link.href = url;
        link.download = `complaint_${cid}.jpg`; // Set a default file name or any desired name
        link.click();
      }, error => {
        console.error('Error occurred while downloading the file:', error);
      });
  }



  


  acceptComplaint(file: any) {
    const updatedComplaint = { ...file, status: 'Accepted' };
  
    // Include the updated complaint as the request body
    this.awComplainsService.updateComplaintStatus(updatedComplaint).subscribe(
      () => {
        console.log('Complaint status updated successfully.');
        // Update the local status in the component's files array
        file.status = 'Accepted';
      },
      (error) => {
        console.error('Error accepting complaint:', error);
      }
    );
  }

  getTextColor(complainType: string): string {
    switch (complainType) {
      case 'Broken Property':
        return 'rgb(255, 82, 2)'; 
      case 'Damaged Property':
        return 'rgb(255, 166, 0)'; 
      case 'Missing Item':
        return 'rgb(197, 23, 0)'; 
      default:
        return 'black'; 
    }
  }

}
