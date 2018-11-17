import { Component, OnInit } from '@angular/core';

declare let AWS: any;
declare let AWSCognito: any;

@Component({
  selector: 'app-about',
  template: '<p>Hello and welcome to Tenants Management!"</p>'
})
export class AboutComponent {

}

@Component({
  selector: 'app-home-landing',
  templateUrl: './landinghome.html'
})
export class HomeLandingComponent {
  constructor() {
      console.log("HomeLandingComponent constructor");
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    console.log("HomeComponent constructor");
  }

  ngOnInit() {
  }

}
