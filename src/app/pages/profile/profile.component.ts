import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentTab: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  gotoTab(tab: number) {
    this.currentTab = tab;
  }

  navigateTab(char: string) {
    if (char == '+') {
      if (this.currentTab < 3) {
        this.currentTab = this.currentTab + 1;
      }
    } else {
      if (this.currentTab > 1) {
        this.currentTab = this.currentTab - 1;
      }
    }
  }

}
