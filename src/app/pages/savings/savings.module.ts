import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingsRoutingModule } from './savings-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { SavingsComponent } from './savings.component';
import { CreateSavingsComponent } from 'src/app/features/savings/create-savings/create-savings.component';


@NgModule({
  declarations: [SavingsComponent, CreateSavingsComponent],
  imports: [
    CommonModule,
    SavingsRoutingModule,
    SharedModule
  ]
})
export class SavingsModule { }
