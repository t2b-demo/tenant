import { Component, OnInit } from '@angular/core';
import {UserLoginService} from "../../../services/aws/user-login.service";
import {Callback, CognitoService, LoggedInCallback} from "../../../services/aws/cognito.service";
import {Router} from "@angular/router";
import jwtDecode from'jwt-decode';

export class Stuff {
  public accessToken: string;
  public idToken: string;
}

export class Tenant {
    public name: string;
    public email: string;
    public status: boolean;
}

export class User {
    public name: string;
    public email: string;
    public status: boolean;
}

@Component({
  selector: 'app-jwttoken',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements LoggedInCallback {

  public stuff: Stuff = new Stuff();
  public tenant: Tenant = new Tenant();

  constructor(public router: Router, public userService: UserLoginService, public cognitoUtil: CognitoService) {
      this.userService.isAuthenticated(this);
      console.log("in TenantComponent");

  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
          this.router.navigate(['/home/login']);
      } else {
          this.cognitoUtil.getUserSession(new TenantCallback(this));
          this.cognitoUtil.getAccessToken(new AccessTokenCallback(this));
          this.cognitoUtil.getIdToken(new IdTokenCallback(this));
      }
  }
}

export class TenantCallback implements Callback {
    constructor(public jwt: TenantComponent) {

    }
  
    callback() {
  
    }
  
    callbackWithParam(result) {
        console.log('-------------------');
        console.log(result);
        var sessionIdInfo = jwtDecode(result.getIdToken().jwtToken);
        console.log(sessionIdInfo['email']);
        console.log(sessionIdInfo['cognito:username']);
        console.log(sessionIdInfo['email_verified']);
        this.jwt.tenant = result;
    }
}


export class AccessTokenCallback implements Callback {
  constructor(public jwt: TenantComponent) {

  }

  callback() {

  }

  callbackWithParam(result) {
      this.jwt.stuff.accessToken = result;
  }
}

export class IdTokenCallback implements Callback {
  constructor(public jwt: TenantComponent) {

  }

  callback() {

  }

  callbackWithParam(result) {
      this.jwt.stuff.idToken = result;
  }
}
