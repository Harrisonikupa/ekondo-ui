import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  example: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.example = [

    ]
  }

}
