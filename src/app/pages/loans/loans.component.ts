import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  isCreateLoan: any = false;
  currentStep: number = 1;
  constructor() { }

  ngOnInit(): void {
  }


  toggleCreateLoan(): void {
    this.isCreateLoan = !this.isCreateLoan;
    this.currentStep = 1;
  }

  changeStep(type) {
    if (type == '+') {
      if (this.currentStep < 3) {
        this.currentStep += 1;
      }
    } else {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
    }
  }

  proceedToFinalStep(value) {
    if (value) {
      this.changeStep('+');
    }
  }
}
