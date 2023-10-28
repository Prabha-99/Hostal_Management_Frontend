import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  username: string | undefined;


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getUsername().subscribe(
      (response: any) => {
        const email = response.firstname; // Email is returned in the response
        const atIndex = email.indexOf('@'); // Find the index of the '@' symbol
        this.username = email.substring(0, atIndex); // Extract the string before the '@' symbol
      },
      (error: any) => {
      }
    );
  }

  onLogout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }



}
