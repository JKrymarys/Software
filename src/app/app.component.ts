import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    ngOnInit(){
      alert("To unlock more features, please pay 9.99$/month. \n \n Best regards. EA Webapp team");
    }
  
  }