import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';

import { ChangRoomComponent } from './chang-room/chang-room.component';
import { RoomsComponent } from './rooms/rooms.component'; 

import { QRCodeComponent } from './qrcode/qrcode.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComplainComponent } from './complain/complain.component'; 
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashComponent,
    StudentDashComponent,
    NavBarComponent,
    AdminSideComponent,
    RegistrationComponent,
    StaffRegistrationComponent,

    ChangRoomComponent,
    RoomsComponent,

    QRCodeComponent,
    NavComponent,
    ComplainComponent

  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
