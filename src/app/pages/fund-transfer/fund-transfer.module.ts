import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundTransferRoutingModule } from './fund-transfer-routing.module';
import { FundTransferComponent } from './fund-transfer.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { NewTransferComponent } from 'src/app/features/fund-transfer/new-transfer/new-transfer.component';
import { FundWalletComponent } from 'src/app/features/fund-transfer/fund-wallet/fund-wallet.component';


@NgModule({
  declarations:
  [
    FundTransferComponent,
    NewTransferComponent,
    FundWalletComponent
  ],
  imports: [
    CommonModule,
    FundTransferRoutingModule,
    SharedModule
  ]
})
export class FundTransferModule { }
