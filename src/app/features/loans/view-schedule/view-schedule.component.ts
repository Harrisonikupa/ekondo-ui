import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {
  data: any[] = [1,2,3];
  constructor() { }

  ngOnInit(): void {
  }

  bookLoan() {

  }
}
