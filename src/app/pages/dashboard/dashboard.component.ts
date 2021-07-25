import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentTab: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  gotoTab(tab: number) {
    this.currentTab = tab;
  }

}
