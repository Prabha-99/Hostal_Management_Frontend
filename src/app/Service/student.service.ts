// student.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  getAllStudentsRegistrationAndRoom(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/regroom`);
  }

  updateRoom(userId: number, newRoomNumber: string): Observable<any> {
    const params = { userId, newRoomNumber };
    return this.http.post<any>(`${this.apiUrl}/update-room`, null, { params });
  }

  getStudentInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/students`);
  }

  getStaffInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/staff`);
  }

  getUsersByRoom(inputRoom: string): Observable<User[]> {
    const params = new HttpParams().set('inputRoom', inputRoom);
    return this.http.get<User[]>(`${this.apiUrl}/users`, { params });
  }
  
}
