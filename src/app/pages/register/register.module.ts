import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { IconOneComponent } from 'src/app/features/icons/icon-one/icon-one.component';
import { IconTwoComponent } from 'src/app/features/icons/icon-two/icon-two.component';
import { IconThreeComponent } from 'src/app/features/icons/icon-three/icon-three.component';
import { IconFourComponent } from 'src/app/features/icons/icon-four/icon-four.component';


@NgModule({
  declarations: [RegisterComponent, IconOneComponent, IconTwoComponent, IconThreeComponent, IconFourComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
