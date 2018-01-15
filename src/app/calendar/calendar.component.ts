import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
  selector: 'calendar-module',
  templateUrl: './calendar.component.html'
})
export class CalComponent implements OnInit {
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() {}

  ngOnInit() {
    let e1 = {
      title: 'The great opening marathon',
      start: '2018-01-15',
      end: '2018-01-18',
    }
    let e2 = {
      title: 'Shape',
      start: '2018-01-18',
      end: '2018-01-18',
    }
    let e3 = {
      title: 'Intro',
      start: '2018-01-19',
      end: '2018-01-19',
    }
    let e4 = {
      title: 'Weightlifting',
      start: '2018-01-24',
      end: '2018-01-24',
    }
    let e5 = {
      title: 'Shape',
      start: '2018-01-23',
      end: '2018-01-23',
    }
    let e6 = {
      title: 'TRX',
      start: '2018-01-26',
      end: '2018-01-26',
    }

     this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: [e1,e2,e3,e4,e5,e6]
      };

     
    //  this.ucCalendar.fullCalendar('renderEvent', el);
      //this.ucCalendar.fullCalendar('rerenderEvents');
  }

}