import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  firstname: string | undefined;
  lastname: string | undefined;


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.loginService.getUserInfo().subscribe(user => {
      this.firstname = user.firstname;
      this.lastname = user.lastname;
    });
  }

  onLogout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }



}
