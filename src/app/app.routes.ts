import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AboutComponent, HomeComponent, HomeLandingComponent} from "./components/public/home.component";
import {SecureHomeComponent} from "./components/secure/landing/landing.component";
import {ProfileComponent} from "./components/secure/profile/profile.component";
import {JwttokenComponent} from "./components/secure/jwttokens/jwttoken.component";
import {UseractivityComponent} from "./components/secure/useractivity/useractivity.component";
import {LoginComponent} from "./components/public/auth/login/login.component";
import {RegisterComponent} from "./components/public/auth/register/register.component";
import {ForgotPasswordComponent, ForgotComponent} from "./components/public/auth/forgot/forgot.component";
import {LogoutComponent, ConfirmComponent} from "./components/public/auth/confirm/confirm.component";
import {ResendComponent} from "./components/public/auth/resend/resend.component";
import {NewPasswordComponent} from "./components/public/auth/newpassword/newpassword.component";

const homeRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: 'about', component: AboutComponent},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'confirmRegistration/:username', component: ConfirmComponent},
            {path: 'resendCode', component: ResendComponent},
            {path: 'forgotPassword/:email', component: ForgotPasswordComponent},
            {path: 'forgotPassword', component: ForgotComponent},
            {path: 'newPassword', component: NewPasswordComponent},
            {path: '', component: HomeLandingComponent}
        ]
    },
];

const secureHomeRoutes: Routes = [
    {

        path: '',
        redirectTo: '/securehome',
        pathMatch: 'full'
    },
    {
        path: 'securehome', component: SecureHomeComponent, children: [
        {path: 'logout', component: LogoutComponent},
        {path: 'jwttokens', component: JwttokenComponent},
        {path: 'myprofile', component: ProfileComponent},
        {path: 'useractivity', component: UseractivityComponent},
        {path: '', component: ProfileComponent}]
    }
];

const routes: Routes = [
    {
        path: '',
        children: [
            ...homeRoutes,
            ...secureHomeRoutes,
            {
                path: '',
                component: HomeComponent
            }
        ]
    },


];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
