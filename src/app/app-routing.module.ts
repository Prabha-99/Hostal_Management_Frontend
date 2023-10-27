import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin-dash",component:AdminDashComponent},
  {path:"student-dash",component:StudentDashComponent},
  {path:"nav-bar",component:NavBarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
