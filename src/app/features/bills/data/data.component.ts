import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  example: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.example = [

    ]
  }

}
