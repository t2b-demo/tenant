import { Component, OnInit } from '@angular/core';

import {UserLoginService} from "../../../services/aws/user-login.service";
import {Callback, CognitoService, LoggedInCallback} from "../../../services/aws/cognito.service";
import {UserParametersService} from "../../../services/aws/user-parameters.service";
import {Router} from "@angular/router";


export class Parameters {
  name: string;
  value: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements LoggedInCallback {

  public parameters: Array<Parameters> = [];
  public cognitoId: String;

  constructor(public router: Router, public userService: UserLoginService, public userParams: UserParametersService, public cognitoUtil: CognitoService) {
      this.userService.isAuthenticated(this);
      console.log("In ProfileComponent");
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
          this.router.navigate(['/home/login']);
      } else {
          this.userParams.getParameters(new GetParametersCallback(this, this.cognitoUtil));
      }
  }
}

export class GetParametersCallback implements Callback {

  constructor(public me: ProfileComponent, public cognitoUtil: CognitoService) {

  }

  callback() {

  }

  callbackWithParam(result: any) {

      for (let i = 0; i < result.length; i++) {
          let parameter = new Parameters();
          parameter.name = result[i].getName();
          parameter.value = result[i].getValue();
          this.me.parameters.push(parameter);
      }
      let param = new Parameters()
      param.name = "cognito ID";
      param.value = this.cognitoUtil.getCognitoIdentity();
      this.me.parameters.push(param)
  }
}