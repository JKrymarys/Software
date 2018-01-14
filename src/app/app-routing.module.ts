import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login&registration/login.component';
import { RegistrationComponent } from './login&registration/registration.component';
import { RecoveryComponent } from './login&registration/recovery.component';
import { CalComponent } from './calendar/calendar.component';
import { UserDetailComponent } from './user/userDetail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'dashboard', component: CalComponent },
  { path: 'signin', component: RegistrationComponent },
  { path: 'recovery', component: RegistrationComponent },
  { path: 'userDetail', component: UserDetailComponent }
  //TODO default ? 
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
