import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { ProfileInformationComponent } from 'src/app/features/profile/profile-information/profile-information.component';
import { WorkAndEducationComponent } from 'src/app/features/profile/work-and-education/work-and-education.component';
import { NextOfKinComponent } from 'src/app/features/profile/next-of-kin/next-of-kin.component';


@NgModule({
  declarations: [ProfileComponent, ProfileInformationComponent, WorkAndEducationComponent, NextOfKinComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
