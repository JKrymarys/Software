import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'recovery-module',
  templateUrl: './recovery.component.html'
})
export class RecoveryComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log("dziala");
    alert("To unlock more features, please pay 9.99$/month. \n Best regards. EA Games");
  }
}