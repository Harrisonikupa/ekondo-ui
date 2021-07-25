import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsComponent } from './investments.component';
import { CreateInvestmentComponent } from 'src/app/features/investments/create-investment/create-investment.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [InvestmentsComponent, CreateInvestmentComponent],
  imports: [
    CommonModule,
    SharedModule,
    InvestmentsRoutingModule
  ]
})
export class InvestmentsModule { }
