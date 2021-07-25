import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-pin',
  templateUrl: './change-pin.component.html',
  styleUrls: ['./change-pin.component.css']
})
export class ChangePinComponent implements OnInit {

  constructor() { }

  isFieldOneTextVisible1: boolean = false;
  isFieldTwoTextVisible1: boolean = false;
  isFieldThreeTextVisible1: boolean = false;

  @Input() isChangingPin: boolean = true;

  ngOnInit(): void {
  }

  togglePinText(option: any) {
    if (option == 1) {
      this.isFieldOneTextVisible1 = !this.isFieldOneTextVisible1;
    }

    if (option == 2) {
      this.isFieldTwoTextVisible1 = !this.isFieldTwoTextVisible1;
    }

    if (option == 3) {
      this.isFieldThreeTextVisible1 = !this.isFieldThreeTextVisible1;
    }
  }


}
