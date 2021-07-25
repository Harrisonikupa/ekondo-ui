import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.css']
})
export class AirtimeComponent implements OnInit {

  example: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.example = [

    ]
  }

}
