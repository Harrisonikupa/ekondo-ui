import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { ForgotPasswordComponent } from 'src/app/features/forgot-password/forgot-password.component';
import { ResetLoginPasswordComponent } from 'src/app/features/reset-login-password/reset-login-password.component';


@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetLoginPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
