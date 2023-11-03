import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../items';


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

}
