import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../room';


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:8080/api/room';

  constructor(private http: HttpClient) {}

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.apiUrl}/add`, room);
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/all`);
  }
}
