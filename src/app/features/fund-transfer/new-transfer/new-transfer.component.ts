import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {

  transferVia: any = 1;
  example: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.example = [

    ]
  }

  transferBy(e: any) {
    if (e.target.value == 1) {
      this.transferVia = 1;
    } else {
      this.transferVia = 2;
    }
    // this.clearFields();
  }

}
