import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  isFieldOneTextVisible: boolean = false;
  isFieldTwoTextVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePasswordText(option: any) {
    if (option == 1) {
      this.isFieldOneTextVisible = !this.isFieldOneTextVisible;
    }

    if (option == 2) {
      this.isFieldTwoTextVisible = !this.isFieldTwoTextVisible;
    }
  }

}
