import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';
import { ChangRoomComponent } from './chang-room/chang-room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { ComplainComponent } from './complain/complain.component';
import { SwComplainsComponent } from './sw-complains/sw-complains.component';
import { AwComplainsComponent } from './aw-complains/aw-complains.component';
import { StudentSideBarComponent } from './student-side-bar/student-side-bar.component';
import { ItemsComponent } from './items/items.component';
import { DeanComplainsComponent } from './dean-complains/dean-complains.component';
import { MyComplainsComponent } from './my-complains/my-complains.component';
import { DeanDashComponent } from './dean-dash/dean-dash.component';
import { DeanSideComponent } from './dean-side/dean-side.component';
import { SubWardenDashComponent } from './sub-warden-dash/sub-warden-dash.component';
import { SubWardenSideComponent } from './sub-warden-side/sub-warden-side.component';
import { WardenDashComponent } from './warden-dash/warden-dash.component';
import { WardenSideComponent } from './warden-side/warden-side.component';
import { UsersComponent } from './users/users.component';






const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin-dash",component:AdminDashComponent},
  {path:"student-dash",component:StudentDashComponent},
  {path:"nav-bar",component:NavBarComponent},
  {path:"admin-side",component:AdminSideComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"staff-registration",component:StaffRegistrationComponent},
  {path:"change-room",component:ChangRoomComponent},
  {path:"rooms",component:RoomsComponent},
  {path:"qrcode",component:QRCodeComponent},
  {path:"complain",component:ComplainComponent},
  {path:"complain",component:ComplainComponent},
  {path:"sw-complains",component:SwComplainsComponent},
  {path:"aw-complains",component:AwComplainsComponent},
  {path:"student-side-bar",component:StudentSideBarComponent},
  {path:"dean-complains",component:DeanComplainsComponent},
  {path:"my-complains",component:MyComplainsComponent},
  {path:"items",component:ItemsComponent},
  {path:"dean-complains",component:DeanComplainsComponent},
  {path:"dean-dash",component:DeanDashComponent},
  {path:"dean-side",component:DeanSideComponent},
  {path:"sub-warden-dash",component:SubWardenDashComponent},
  {path:"sub-warden-side",component:SubWardenSideComponent},
  {path:"warden-dash",component:WardenDashComponent},
  {path:"warden-side",component:WardenSideComponent},
  {path:"users",component:UsersComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
