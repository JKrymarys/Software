import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from 'ng-fullcalendar';

import { CalComponent } from '../calendar/calendar.component';
import { AppComponent } from '../app/app.component'

@NgModule({
  declarations: [
    CalComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
