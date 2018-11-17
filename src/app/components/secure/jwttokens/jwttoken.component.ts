import { Component, OnInit } from '@angular/core';
import {UserLoginService} from "../../../services/aws/user-login.service";
import {Callback, CognitoService, LoggedInCallback} from "../../../services/aws/cognito.service";
import {Router} from "@angular/router";

export class Stuff {
  public accessToken: string;
  public idToken: string;
}

@Component({
  selector: 'app-jwttoken',
  templateUrl: './jwttoken.component.html',
  styleUrls: ['./jwttoken.component.css']
})
export class JwttokenComponent implements LoggedInCallback {

  public stuff: Stuff = new Stuff();

  constructor(public router: Router, public userService: UserLoginService, public cognitoUtil: CognitoService) {
      this.userService.isAuthenticated(this);
      console.log("in JwtComponent");

  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
          this.router.navigate(['/home/login']);
      } else {
          this.cognitoUtil.getAccessToken(new AccessTokenCallback(this));
          this.cognitoUtil.getIdToken(new IdTokenCallback(this));
      }
  }
}


export class AccessTokenCallback implements Callback {
  constructor(public jwt: JwttokenComponent) {

  }

  callback() {

  }

  callbackWithParam(result) {
      this.jwt.stuff.accessToken = result;
  }
}

export class IdTokenCallback implements Callback {
  constructor(public jwt: JwttokenComponent) {

  }

  callback() {

  }

  callbackWithParam(result) {
      this.jwt.stuff.idToken = result;
  }
}
