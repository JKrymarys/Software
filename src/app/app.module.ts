import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from 'ng-fullcalendar';

import { CalComponent } from './calendar/calendar.component';
import { AppComponent } from '../app/app.component'

import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from 'ng-fullcalendar/src/calendar.component';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    CalComponent,
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
