import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';
import { MyComplainsService } from './my-complains.service';

@Component({
  selector: 'app-my-complains',
  templateUrl: './my-complains.component.html',
  styleUrls: ['./my-complains.component.css']
})
export class MyComplainsComponent {

  
  files!: any[];
  originalFiles!: any[]; // Store the original files before filtering
  searchValue: Date | null | undefined;
  error='';
  reg_no: string | undefined;
  


  constructor(
    private router: Router,
    private http: HttpClient,
    private myComplainsService: MyComplainsService,
    private loginService: LoginService ) { }

  reloadPage() {
    this.router.navigate(['/sw-complains'], {
      queryParamsHandling: 'merge', // Preserve query parameters
    });
  }


  // ngOnInit(): void {

  //   this.myComplainsService.getAllFiles().subscribe(
  //     (response) => {
  //       this.files = response;
  //       this.originalFiles = response; // Assign the fetched files to originalFiles
  //     },
  //     (error) => {
  //       console.log('Error retrieving files:', error);
  //     }
  //   );

  //   this.loginService.getUserInfo().subscribe(user => {
  //     this.reg_no = user.reg_no;
      
  //   });

  // }

  ngOnInit(): void {

    this.loginService.getUserInfo().subscribe(user => {
      this.reg_no = user.reg_no;
    });
  
    this.myComplainsService.getAllFiles().subscribe(
      (response) => {
        this.originalFiles = response; // Store all complaints
  
        // Filter complaints submitted by the logged-in user
        this.files = this.originalFiles.filter(complaint => complaint.reg_no === this.reg_no);
      },
      (error) => {
        console.log('Error retrieving all complaints:', error);
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
