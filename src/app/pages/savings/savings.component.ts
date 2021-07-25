import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  isCreateSavings: any = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleCreateSavings(): void {
    this.isCreateSavings = !this.isCreateSavings;
  }

  savingsCalculator() {

  }

}
