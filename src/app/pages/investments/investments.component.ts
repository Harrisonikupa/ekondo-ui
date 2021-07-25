import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  isCreateInvestment: any = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleCreateInvestment(): void {
    this.isCreateInvestment = !this.isCreateInvestment;
  }

}
