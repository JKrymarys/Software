import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'registration-module',
  templateUrl: './registration.component.html',
  styleUrls: ['./css/style.css']
})
export class RegistrationComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log("dziala");
  }
}