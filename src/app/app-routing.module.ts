import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CalComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'dashboard', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: "full" },
  { path: 'calendar', component: CalComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
