import { Component, OnInit } from '@angular/core';
import {UserLoginService} from "../../../services/aws/user-login.service";
import {LoggedInCallback} from "../../../services/aws/cognito.service";
import {Router} from "@angular/router";
import {DynamoDBService} from "../../../services/aws/dynamodb.service";

export class Stuff {
  public type: string;
  public date: string;
}

@Component({
  selector: 'app-soa',
  templateUrl: './soa.component.html',
  styleUrls: ['./soa.component.css']
})
export class SoaComponent implements LoggedInCallback {

  public logdata: Array<Stuff> = [];

  constructor(public router: Router, public ddb: DynamoDBService, public userService: UserLoginService) {
      this.userService.isAuthenticated(this);
      console.log("in SoaComponent");
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
          this.router.navigate(['/home/login']);
      } else {
          console.log("scanning DDB");
          this.ddb.getLogEntries(this.logdata);
      }
  }

}
