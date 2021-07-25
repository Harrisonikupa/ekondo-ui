import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuritySettingsRoutingModule } from './security-settings-routing.module';
import { SecuritySettingsComponent } from './security-settings.component';
import { ChangePasswordComponent } from 'src/app/features/security-settings/change-password/change-password.component';
import { ChangePinComponent } from 'src/app/features/security-settings/change-pin/change-pin.component';
import { ResetPinComponent } from 'src/app/features/security-settings/reset-pin/reset-pin.component';
import { ResetPasswordComponent } from 'src/app/features/security-settings/reset-password/reset-password.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    SecuritySettingsComponent,
    ChangePasswordComponent,
    ChangePinComponent,
    ResetPinComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    SecuritySettingsRoutingModule,
    SharedModule
  ]
})
export class SecuritySettingsModule { }
