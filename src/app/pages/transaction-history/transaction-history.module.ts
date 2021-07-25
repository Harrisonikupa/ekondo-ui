import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionHistoryRoutingModule } from './transaction-history-routing.module';
import { TransactionHistoryComponent } from './transaction-history.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [TransactionHistoryComponent],
  imports: [
    CommonModule,
    TransactionHistoryRoutingModule,
    SharedModule
  ]
})
export class TransactionHistoryModule { }
