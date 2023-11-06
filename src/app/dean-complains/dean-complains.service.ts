import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeanComplainsService {

  private baseUrl = 'http://localhost:8080/api/deancomplains/all';
  private baseUrl2 = 'http://localhost:8080/api/deancomplains';

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  updateComplaintStatus(complaint: any): Observable<any> {
    return this.http.put(`${this.baseUrl2}/updateStatus`, complaint);
  }

}
