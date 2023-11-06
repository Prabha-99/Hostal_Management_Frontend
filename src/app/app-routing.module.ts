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
import { ComplainFilterComponent } from './complain-filter/complain-filter.component';
import { RoomMatesComponent } from './room-mates/room-mates.component';
import { AuthGuardService } from './Service/auth-guard.service';
import { RouteResolverService } from './Service/route-resolver.service';
import { NotfoundComponent } from './notfound/notfound.component';






const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin-dash",component:AdminDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"student-dash",component:StudentDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STUDENT'] },resolve: { userRole: RouteResolverService }},
  {path:"nav-bar",component:NavBarComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['DEAN','ADMIN','ACADEMIC_WARDEN','SUB_WARDEN','STUDENT'] },resolve: { userRole: RouteResolverService }},
  {path:"admin-side",component:AdminSideComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"registration",component:RegistrationComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"staff-registration",component:StaffRegistrationComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"change-room",component:ChangRoomComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"rooms",component:RoomsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"complain",component:ComplainComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STUDENT'] },resolve: { userRole: RouteResolverService }},
  {path:"sw-complains",component:SwComplainsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['SUB_WARDEN'] },resolve: { userRole: RouteResolverService }},
  {path:"aw-complains",component:AwComplainsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ACADEMIC_WARDEN'] },resolve: { userRole: RouteResolverService }},
  {path:"student-side-bar",component:StudentSideBarComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STUDENT'] },resolve: { userRole: RouteResolverService }},
  {path:"dean-complains",component:DeanComplainsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['DEAN'] },resolve: { userRole: RouteResolverService }},
  {path:"my-complains",component:MyComplainsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['STUDENT'] },resolve: { userRole: RouteResolverService }},
  {path:"items",component:ItemsComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"dean-dash",component:DeanDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['DEAN'] },resolve: { userRole: RouteResolverService }},
  {path:"dean-side",component:DeanSideComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['DEAN'] },resolve: { userRole: RouteResolverService }},
  {path:"sub-warden-dash",component:SubWardenDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['SUB_WARDEN'] },resolve: { userRole: RouteResolverService }},
  {path:"sub-warden-side",component:SubWardenSideComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['SUB_WARDEN'] },resolve: { userRole: RouteResolverService }},
  {path:"warden-dash",component:WardenDashComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ACADEMIC_WARDEN'] },resolve: { userRole: RouteResolverService }},
  {path:"warden-side",component:WardenSideComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ACADEMIC_WARDEN'] },resolve: { userRole: RouteResolverService }},
  {path:"users",component:UsersComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"complain-filter",component:ComplainFilterComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"room-mates",component:RoomMatesComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouteResolverService }},
  {path:"notfound",component:NotfoundComponent, canActivate: [AuthGuardService], data: { allowedRoles: ['DEAN','ADMIN','ACADEMIC_WARDEN','SUB_WARDEN','STUDENT'] },resolve: { userRole: RouteResolverService }}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
