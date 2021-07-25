import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {
  loanParams: any = {};
  interest: any = 10;
  accruedInterest: any = 0;
  returnOnLoan: any = 0;
  @Output() proceed: any = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  calculator() {
    this.accruedInterest = isNaN(this.loanParams.amount * ((this.interest/100) / 30) * parseInt(this.loanParams.tenure) * 30) ? 0 : (this.loanParams.amount * ((this.interest/100) / 30) * parseInt(this.loanParams.tenure) * 30).toFixed(2);
    this.returnOnLoan = isNaN(parseFloat(this.loanParams.amount) + parseFloat(this.accruedInterest)) ? 0 : parseFloat(this.loanParams.amount) + parseFloat(this.accruedInterest) ;
  }

  moveToNextStep() {
    this.proceed.emit(true);
  }
}
