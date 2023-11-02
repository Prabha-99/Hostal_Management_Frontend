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
import { QRCodeComponent } from './qrcode/qrcode.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComplainComponent } from './complain/complain.component'; 
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwComplainsComponent } from './sw-complains/sw-complains.component';
import { AwComplainsComponent } from './aw-complains/aw-complains.component';
import { DeanComplainsComponent } from './dean-complains/dean-complains.component';
import { StudentSideBarComponent } from './student-side-bar/student-side-bar.component';


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
    QRCodeComponent,
    NavComponent,
    ComplainComponent,
    SwComplainsComponent,
    AwComplainsComponent,
    DeanComplainsComponent,
    StudentSideBarComponent
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
