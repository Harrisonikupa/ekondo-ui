import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cable',
  templateUrl: './cable.component.html',
  styleUrls: ['./cable.component.css']
})
export class CableComponent implements OnInit {

  example: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.example = [

    ]
  }

}
