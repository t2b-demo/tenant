import { Component, OnInit, OnDestroy } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {UserRegistrationService} from '../../../../services/aws/user-registration.service';
import {UserLoginService} from '../../../../services/aws/user-login.service';
import {LoggedInCallback} from '../../../../services/aws/cognito.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements LoggedInCallback {
  constructor(public router: Router,
              public userService: UserLoginService) {
      this.userService.isAuthenticated(this);
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (isLoggedIn) {
          this.userService.logout();
          this.router.navigate(['/home']);
      }
      this.router.navigate(['/home']);
  }
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, OnDestroy {

  confirmationCode: string;
  email: string;
  errorMessage: string;
  private sub: any;

  constructor(public regService: UserRegistrationService, public router: Router, public route: ActivatedRoute) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.email = params['username'];

      });

      this.errorMessage = null;
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  onConfirmRegistration() {
      this.errorMessage = null;
      this.regService.confirmRegistration(this.email, this.confirmationCode, this);
  }

  cognitoCallback(message: string, result: any) {
      if (message != null) { // error
          this.errorMessage = message;
          console.log('message: ' + this.errorMessage);
      } else { // success
          // move to the next step
          console.log('Moving to securehome');
          // this.configs.curUser = result.user;
          this.router.navigate(['/securehome']);
      }
  }

}
