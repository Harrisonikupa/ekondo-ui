import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.css']
})
export class ResetPinComponent implements OnInit {

  isFieldOneTextVisible: boolean = false;
  isFieldTwoTextVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePinText(option: any) {
    if (option == 1) {
      this.isFieldOneTextVisible = !this.isFieldOneTextVisible;
    }

    if (option == 2) {
      this.isFieldTwoTextVisible = !this.isFieldTwoTextVisible;
    }
  }
}
