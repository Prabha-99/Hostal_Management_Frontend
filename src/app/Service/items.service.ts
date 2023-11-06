import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../items';
import { Property } from '../property';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = 'http://localhost:8080/api/property';

  constructor(private http: HttpClient) { }

  additem(items: Items): Observable<Items> {
    return this.http.post<Items>(`${this.apiUrl}/add`, items);
  }

  getAllItems(): Observable<Items[]> {
    return this.http.get<Items[]>(`${this.apiUrl}/all`);
  }
  getRoomsProperty(inputRoom: Number): Observable<Property[]> {
    const params = new HttpParams().set('inputRoom', inputRoom.toString());
    return this.http.get<Property[]>(`${this.apiUrl}/property`, { params });
}


}
