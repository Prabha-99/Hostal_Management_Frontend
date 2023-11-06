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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComplainComponent } from './complain/complain.component'; 
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwComplainsComponent } from './sw-complains/sw-complains.component';
import { AwComplainsComponent } from './aw-complains/aw-complains.component';
import { DeanComplainsComponent } from './dean-complains/dean-complains.component';
import { StudentSideBarComponent } from './student-side-bar/student-side-bar.component';
import { MyComplainsComponent } from './my-complains/my-complains.component';
import { ItemsComponent } from './items/items.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SubWardenDashComponent } from './sub-warden-dash/sub-warden-dash.component';
import { WardenDashComponent } from './warden-dash/warden-dash.component';
import { DeanDashComponent } from './dean-dash/dean-dash.component';
import { SubWardenSideComponent } from './sub-warden-side/sub-warden-side.component';
import { WardenSideComponent } from './warden-side/warden-side.component';
import { DeanSideComponent } from './dean-side/dean-side.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { UsersComponent } from './users/users.component';
import { ComplainFilterComponent } from './complain-filter/complain-filter.component';
import { RoomMatesComponent } from './room-mates/room-mates.component';
import { NotfoundComponent } from './notfound/notfound.component';



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
    ComplainComponent,
    ComplainComponent,
    SwComplainsComponent,
    AwComplainsComponent,
    DeanComplainsComponent,
    StudentSideBarComponent,
    MyComplainsComponent,
    ItemsComponent,
    SubWardenDashComponent,
    WardenDashComponent,
    DeanDashComponent,
    SubWardenSideComponent,
    WardenSideComponent,
    DeanSideComponent,
    UsersComponent,
    ComplainFilterComponent,
    RoomMatesComponent,
    NotfoundComponent


  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
