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

}
