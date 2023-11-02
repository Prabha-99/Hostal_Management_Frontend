import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QRCodeInfo } from './QRCodeInfo.model';

@Injectable({
  providedIn: 'root'
})
export class QRCodeService {

  private apiUrl = 'http://localhost:8080/api/qr'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  uploadImage(image: File): Observable<QRCodeInfo> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<QRCodeInfo>(`${this.apiUrl}/uploadImage`, formData);
  }
}
