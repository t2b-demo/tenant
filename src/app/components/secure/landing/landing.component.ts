import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {UserLoginService} from "../../../services/aws/user-login.service";
import {LoggedInCallback} from "../../../services/aws/cognito.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class SecureHomeComponent implements OnInit, LoggedInCallback {

  constructor(public router: Router, public userService: UserLoginService) {
    this.userService.isAuthenticated(this);
    console.log("SecureHomeComponent: constructor");
  }

  ngOnInit() {

  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
          this.router.navigate(['/home/login']);
      }
  }

}
