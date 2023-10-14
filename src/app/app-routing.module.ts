import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { StudentDashComponent } from './student-dash/student-dash.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin-dash",component:AdminDashComponent},
  {path:"student-dash",component:StudentDashComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
