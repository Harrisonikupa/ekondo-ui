import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-savings',
  templateUrl: './create-savings.component.html',
  styleUrls: ['./create-savings.component.css']
})
export class CreateSavingsComponent implements OnInit {
  savingsParams: any = {};
  interest: any = 0;
  accruedInterest: any = 0;
  returnOnInvestment: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculator() {
    if (this.savingsParams.amount >= 10000 && this.savingsParams.amount <= 49999) {
      if (this.savingsParams.tenure == 1) {
        this.interest = 1.00;
      } else if (this.savingsParams.tenure == 2) {
        this.interest = 1.25;
      } else if (this.savingsParams.tenure >= 3) {
        this.interest = 1.50;
      }
    } else if (this.savingsParams.amount >= 50000 && this.savingsParams.amount <= 99999) {
      if (this.savingsParams.tenure == 1) {
        this.interest = 1.25;
      } else if (this.savingsParams.tenure == 2) {
        this.interest = 1.50;
      } else if (this.savingsParams.tenure >= 3) {
        this.interest = 1.75;
      }
    } else if (this.savingsParams.amount >= 100000 && this.savingsParams.amount <= 499999) {
      if (this.savingsParams.tenure == 1) {
        this.interest = 1.50;
      } else if (this.savingsParams.tenure == 2) {
        this.interest = 1.75;
      } else if (this.savingsParams.tenure >= 3) {
        this.interest = 2.00;
      }
    } else if (this.savingsParams.amount >= 500000 && this.savingsParams.amount <= 999999) {
      if (this.savingsParams.tenure == 1) {
        this.interest = 1.75;
      } else if (this.savingsParams.tenure == 2) {
        this.interest = 2.00;
      } else if (this.savingsParams.tenure >= 3) {
        this.interest = 2.50;
      }
    } else if (this.savingsParams.amount >= 1000000) {
      if (this.savingsParams.tenure == 1) {
        this.interest = 2.00;
      } else if (this.savingsParams.tenure == 2) {
        this.interest = 2.50;
      } else if (this.savingsParams.tenure >= 3) {
        this.interest = 3.00;
      }
    }
    this.accruedInterest = isNaN(this.savingsParams.amount * ((this.interest/100) / 30) * (this.savingsParams.tenure * 30)) ? 0 : (this.savingsParams.amount * ((this.interest/100) / 30) * (this.savingsParams.tenure * 30)).toFixed(2);

    this.returnOnInvestment = isNaN(parseFloat(this.savingsParams.amount) + parseFloat(this.accruedInterest)) ? 0 : parseFloat(this.savingsParams.amount) + parseFloat(this.accruedInterest) ;
  }
}
