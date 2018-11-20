import {Component, OnInit} from '@angular/core';
import {AwsService} from './services/aws/aws.service';
import {UserLoginService} from './services/aws/user-login.service';
import {CognitoService, LoggedInCallback} from './services/aws/cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, LoggedInCallback {

  constructor(public awsUtil: AwsService, public userService: UserLoginService, public cognito: CognitoService) {
    console.log('AppComponent: constructor');
  }

  ngOnInit() {
      console.log('AppComponent: Checking if the user is already authenticated');
      this.userService.isAuthenticated(this);
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    console.log('AppComponent: the user is authenticated:' + isLoggedIn);
      const mythis = this;
      this.cognito.getIdToken({
          callback() {

          },
          callbackWithParam(token: any) {
              // Include the passed-in callback here as well so that it's executed downstream
            console.log('AppComponent: calling initAwsService in callback')
              mythis.awsUtil.initAwsService(null, isLoggedIn, token);
          }
      });
  }
}
