import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { UserDto } from '../UserDto';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl1 = "http://localhost:8080/api/auth/login";
  private apiUrl2 = 'http://localhost:8080/api/auth/CurrentUser';


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{ token: string }> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<{ token: string }>(`${this.apiUrl1}`, body);
  }
  

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }


  getUserRole(): Observable<string> {
    const token = localStorage.getItem('token') || ''; // Providing a default value of an empty string if token is null
    const decodedToken: any = jwt_decode(token);
    const role = decodedToken.role[0];
    return of(role);
  }

  getUserInfo(): Observable<UserDto> {
    // Fetch the JWT from wherever you stored it
    const token = localStorage.getItem('token');
    // Fetch the user info from your backend, including the JWT for authentication
    return this.http.get<UserDto>('http://localhost:8080/api/auth/OnlineUser', {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
