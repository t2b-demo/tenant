import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {routing} from "./app.routes";
import {UserRegistrationService} from "../app/services/aws/user-registration.service";
import {UserParametersService} from "../app/services/aws/user-parameters.service";
import {UserLoginService} from "../app/services/aws/user-login.service";
import {CognitoService} from "../app/services/aws/cognito.service";
import {AwsService} from "../app/services/aws/aws.service";
import {DynamoDBService} from "../app/services/aws/dynamodb.service";

import { AppComponent } from './app.component';
import { AboutComponent, HomeComponent, HomeLandingComponent } from './components/public/home.component';
import { LoginComponent } from './components/public/auth/login/login.component';
import { ConfirmComponent, LogoutComponent } from './components/public/auth/confirm/confirm.component';
import { ForgotComponent, ForgotPasswordComponent } from './components/public/auth/forgot/forgot.component';
import { MFAComponent } from './components/public/auth/mfa/mfa.component';
import { NewPasswordComponent } from './components/public/auth/newpassword/newpassword.component';
import { RegisterComponent } from './components/public/auth/register/register.component';
import { ResendComponent } from './components/public/auth/resend/resend.component';
import {TenantComponent} from "./components/secure/tenant/tenant.component";
import { SecureHomeComponent } from './components/secure/landing/landing.component';
import {SysAdminComponent} from "./components/secure/sysadmin/sysadmin.component";
import { SoaComponent } from './components/secure/soa/soa.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLandingComponent,
    AboutComponent,
    LoginComponent,
    ConfirmComponent,
    LogoutComponent,
    ForgotComponent,
    ForgotPasswordComponent,
    MFAComponent,
    NewPasswordComponent,
    RegisterComponent,
    ResendComponent,
    TenantComponent,
    SecureHomeComponent,
    SysAdminComponent,
    SoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
  CognitoService,
  AwsService,
  DynamoDBService,
  UserRegistrationService,
  UserLoginService,
  UserParametersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
