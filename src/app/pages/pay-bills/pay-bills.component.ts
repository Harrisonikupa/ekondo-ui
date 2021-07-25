import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-bills',
  templateUrl: './pay-bills.component.html',
  styleUrls: ['./pay-bills.component.css']
})
export class PayBillsComponent implements OnInit {

  currentTab: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  gotoTab(tab: number) {
    this.currentTab = tab;
  }

}
