import { Component, OnInit, ViewChild } from '@angular/core';
import { ExUser } from './user-mock';
import { User } from './user';


@Component({
  selector: 'user-detail-module',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() {}
  
  userData: User;

  ngOnInit() {
    console.log("user przypisane");
   this.userData = ExUser;
   console.log(ExUser);

  }

}