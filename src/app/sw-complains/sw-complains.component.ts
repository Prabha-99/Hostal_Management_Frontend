import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwComplainsService } from './sw-complains.service';

@Component({
  selector: 'app-sw-complains',
  templateUrl: './sw-complains.component.html',
  styleUrls: ['./sw-complains.component.css']
})
export class SwComplainsComponent {

  files!: any[];
  originalFiles!: any[]; // Store the original files before filtering
  searchValue: Date | null | undefined;
  error='';


  constructor(private http: HttpClient,private swComplainsService: SwComplainsService ) { }


  ngOnInit(): void {
    this.swComplainsService.getAllFiles().subscribe(
      (response) => {
        this.files = response;
        this.originalFiles = response; // Assign the fetched files to originalFiles
      },
      (error) => {
        console.log('Error retrieving files:', error);
      }
    );
  }


  downloadFile(report_id: number, report_name: string) {

    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Send a GET request to the backend endpoint
    this.http.get('http://localhost:8080/api/complain/download?id=' + report_id, httpOptions)
    .subscribe((response: any) => {

        // Create a blob from the response data
        const blob = new Blob([response], { type: 'application/octet-stream' });

        // Create a temporary URL for the blob
        const url = URL.createObjectURL(blob);

        // Trigger the file download
        const link = document.createElement('a');
        link.href = url;
        link.download = report_name;
        link.click();
      }, error => {
        console.error('Error occurred while downloading the file:', error);
      });
  }


  acceptComplaint(file: any) {
    const updatedComplaint = { ...file, status: 'Accepted' };
  
    // Include the updated complaint as the request body
    this.swComplainsService.updateComplaintStatus(updatedComplaint).subscribe(
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
  
  


}
