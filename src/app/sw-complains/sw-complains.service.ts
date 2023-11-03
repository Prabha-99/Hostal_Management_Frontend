import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwComplainsService {

  private baseUrl = 'http://localhost:8080/api/complain/all';
  private baseUrl2 = 'http://localhost:8080/api/complain';

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  updateComplaintStatus(complaint: any): Observable<any> {
    return this.http.put(`${this.baseUrl2}/updateStatus`, complaint);
  }
}
