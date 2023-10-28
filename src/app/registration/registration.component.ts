import { Component } from '@angular/core';
import { RegistrationService } from '../Service/registration.service';
import { ro } from 'date-fns/locale';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  regData = {
    firstname: '',
    lastname: '',
    reg_no: '',
    email: '',
    password: '',
    room: '',
    role: ''
  };

    constructor(private registrationService: RegistrationService) { }

    register(): void {
      if (this.validateForm()) {
        this.registrationService.registerUser(this.regData)
          .subscribe(
            response => {
              console.log(response);
              alert('Registration successful');
              this.clear();
            },
            error => {
              console.error(error);
              if (error.status === 409) {
                alert('Email is Already Registered! Please Check Your Email!');
              } else {
                alert('Room is already full. Please choose another room.');
              }
            }
          );
      }
    }
    clear(): void {
      this.regData = {
        firstname: '',
        lastname: '',
        reg_no: '',
        email: '',
        password: '',
        room: '',
        role: ''
      };
    }
    validateForm(): boolean {
      // Perform front-end validation
      if (
        this.regData.firstname.trim() === '' ||
        this.regData.lastname.trim() === '' ||
        this.regData.reg_no.trim() === '' ||
        this.regData.email.trim() === '' ||
        this.regData.password.trim() === '' ||
        this.regData.room.trim() === '' ||
        this.regData.role.trim() === ''
      ) {
        // Show an error message or perform any other desired actions
        alert('All fields are required');
        return false;
      }
      
  
  
      if (!this.validateEmail(this.regData.email)) {
        // Show an error message or perform any other desired actions
        alert('Invalid email');
        return false;
      }
  
      if (!this.validatePassword(this.regData.password)) {
        // Show an error message or perform any other desired actions
        alert('Invalid password. It should contain at least one lowercase letter, one uppercase letter, one special character, one number, and be at least 8 characters long.  Example - @Example8');
        return false;
      }
  
      // Additional validation rules can be added here if needed
  
      return true; // Form is valid
    }
    validateEmail(email: string): boolean {
      // Email validation logic
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
    validatePassword(password: string): boolean {
      // Password validation logic
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }

}
