import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  representative: any = {};
  constructor() { }

  ngOnInit(): void {
    this.representative = JSON.parse(localStorage.getItem('authorized-details') || '{}').repDetails;
  }

  toggleSideBar() {
    $('#sidebarMenu').toggleClass('active');
    $('.main-page').toggleClass('full');
  }

  closeSideBar() {
    $('#sidebarMenu').removeClass('active');
    $('.main-page').removeClass('full');
  }

  toggleNotification() {
    $('#notificationModal').modal('show');
  }

  getGreetingTime (m: moment.Moment = moment()) {
    var g = null; //return g

    if(!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

    var split_afternoon = 12 //24hr time to split the afternoon
    var split_evening = 17 //24hr time to split the evening
    var currentHour = parseFloat(m.format("HH"));

    if(currentHour >= split_afternoon && currentHour <= split_evening) {
      g = "Good afternoon";
    } else if(currentHour >= split_evening) {
      g = "Good evening";
    } else {
      g = "Good morning";
    }

    return g;
  }
}
