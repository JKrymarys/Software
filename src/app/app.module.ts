import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from 'ng-fullcalendar';
import { FormsModule } from '@angular/forms'

import { CalComponent } from './calendar/calendar.component';
import { WorkoutComponent } from './workouts/workouts.component';
import { AppComponent } from '../app/app.component';

import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from 'ng-fullcalendar/src/calendar.component';

import { LoginComponent } from './login&registration/login.component';
import { RegistrationComponent } from './login&registration/registration.component';
import { RecoveryComponent } from './login&registration/recovery.component';
import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module'
import { UserDetailComponent } from './user/userDetail.component';

@NgModule({
  declarations: [
    CalComponent,
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    WorkoutComponent,
    RecoveryComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    AppBootstrapModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
