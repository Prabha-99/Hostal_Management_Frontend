import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password='';
  error='';

  constructor(private loginservice: LoginService, private router: Router) { }

  onSubmit() {
    this.loginservice.login(this.email, this.password)
      .subscribe(
        (response) => {
          const token = response.token;
        localStorage.setItem('token', token);
          
          // Getting the user role
          this.loginservice.getUserRole().subscribe(
            (role) => {

              // Navigate to specific dashboard based on the role
              switch (role) {
                case 'ADMIN':
                  this.router.navigate(['/admin-dash']);
                  break;
                case 'STUDENT':
                  this.router.navigate(['/student-dash']);
                  break;
                default:
                  this.router.navigate(['/']);
                  break;
              }
            }
          );
        },
        (error) => {
          if (error.status === 401) {
            this.error = 'Please enter valid credentials.';
          } else {
            this.error = 'Invalid email or password.';
          }
        }
      );
  }
  onLogout() {
    this.loginservice.logout();
    this.router.navigate(['/']);
  }

}
