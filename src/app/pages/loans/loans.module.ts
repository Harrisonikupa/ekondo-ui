import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { LoansComponent } from './loans.component';
import { CreateLoanComponent } from 'src/app/features/loans/create-loan/create-loan.component';
import { ViewScheduleComponent } from 'src/app/features/loans/view-schedule/view-schedule.component';


@NgModule({
  declarations: [LoansComponent, CreateLoanComponent, ViewScheduleComponent],
  imports: [
    CommonModule,
    LoansRoutingModule,
    SharedModule
  ]
})
export class LoansModule { }
