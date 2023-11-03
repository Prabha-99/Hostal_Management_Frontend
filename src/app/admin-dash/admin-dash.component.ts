import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent {
  rooms:any;
  items:any;
  users:any;

  constructor(private http:HttpClient){}
  
  ngOnInit() {
    this.http.get<any>("http://localhost:8080/api/room/count").subscribe(count =>this.rooms = count);
    this.http.get<any>("http://localhost:8080/api/property/count").subscribe(count =>this.items = count);
    this.http.get<any>("http://localhost:8080/api/auth/count").subscribe(count =>this.users = count);
  }

}
