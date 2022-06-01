import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { AuthBaseComponent } from './auth-base/auth-base.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { AdminComponent } from './signup/admin/admin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    SigninComponent,
    AuthBaseComponent,
    SignupComponent,
    PageNotFoundComponent,
    AdminComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
