import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  private baseUrl = 'http://localhost:8080/api/complain'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  submitComplain(complainData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit`, complainData);
  }

  uploadFile(file: FormData): Observable<string> {
    return this.http.post(`${this.baseUrl}/upload`, file, { responseType: 'text' }) as Observable<string>;
}
  getAcceptedInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/accepted`);
  }

  getNullInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/null`);
  }


}
