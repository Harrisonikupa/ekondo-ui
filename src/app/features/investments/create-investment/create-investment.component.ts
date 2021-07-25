import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-investment',
  templateUrl: './create-investment.component.html',
  styleUrls: ['./create-investment.component.css']
})
export class CreateInvestmentComponent implements OnInit {

  investmentParams: any = {};
  interest: any = 0;
  accruedInterest: any = 0;
  returnOnInvestment: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculator() {
    if (this.investmentParams.amount >= 50000 && this.investmentParams.amount <= 99999) {
      if (this.investmentParams.tenure == 1) {
        this.interest = 2.00;
      } else if (this.investmentParams.tenure == 2) {
        this.interest = 3.00;
      } else if (this.investmentParams.tenure >= 3) {
        this.interest = 3.50;
      }
    } else if (this.investmentParams.amount >= 100000 && this.investmentParams.amount <= 499999) {
      if (this.investmentParams.tenure == 1) {
        this.interest = 3.00;
      } else if (this.investmentParams.tenure == 2) {
        this.interest = 3.50;
      } else if (this.investmentParams.tenure >= 3) {
        this.interest = 4.00;
      }
    } else if (this.investmentParams.amount >= 500000 && this.investmentParams.amount <= 999999) {
      if (this.investmentParams.tenure == 1) {
        this.interest = 3.50;
      } else if (this.investmentParams.tenure == 2) {
        this.interest = 4.00;
      } else if (this.investmentParams.tenure >= 3) {
        this.interest = 4.50;
      }
    } else if (this.investmentParams.amount >= 1000000) {
      if (this.investmentParams.tenure == 1) {
        this.interest = 4.00;
      } else if (this.investmentParams.tenure == 2) {
        this.interest = 4.50;
      } else if (this.investmentParams.tenure >= 3) {
        this.interest = 5.00;
      }
    }
    this.accruedInterest = isNaN(this.investmentParams.amount * ((this.interest/100) / 30) * (this.investmentParams.tenure * 30)) ? 0 : (this.investmentParams.amount * ((this.interest/100) / 30) * (this.investmentParams.tenure * 30)).toFixed(2);

    this.returnOnInvestment = isNaN(parseFloat(this.investmentParams.amount) + parseFloat(this.accruedInterest)) ? 0 : parseFloat(this.investmentParams.amount) + parseFloat(this.accruedInterest) ;
  }

}
