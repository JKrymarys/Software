import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'login-module',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log("dziala");
  }

}