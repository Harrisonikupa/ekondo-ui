import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiariesRoutingModule } from './beneficiaries-routing.module';
import { BeneficiariesComponent } from './beneficiaries.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [BeneficiariesComponent],
  imports: [
    CommonModule,
    BeneficiariesRoutingModule,
    SharedModule
  ]
})
export class BeneficiariesModule { }
