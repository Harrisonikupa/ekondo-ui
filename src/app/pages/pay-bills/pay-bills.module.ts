import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayBillsRoutingModule } from './pay-bills-routing.module';
import { PayBillsComponent } from './pay-bills.component';
import { AirtimeComponent } from 'src/app/features/bills/airtime/airtime.component';
import { DataComponent } from 'src/app/features/bills/data/data.component';
import { CableComponent } from 'src/app/features/bills/cable/cable.component';
import { ElectricityComponent } from 'src/app/features/bills/electricity/electricity.component';
import { EducationComponent } from 'src/app/features/bills/education/education.component';
import { InsuranceComponent } from 'src/app/features/bills/insurance/insurance.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    PayBillsComponent,
    AirtimeComponent,
    DataComponent,
    CableComponent,
    ElectricityComponent,
    EducationComponent,
    InsuranceComponent
  ],
  imports: [
    CommonModule,
    PayBillsRoutingModule,
    SharedModule
  ]
})
export class PayBillsModule { }
