import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  isFieldOneTextVisible: boolean = false;
  isFieldTwoTextVisible: boolean = false;
  isFieldThreeTextVisible: boolean = false;

  @Input() isChangingPassword: boolean = true;

  ngOnInit(): void {
  }

  togglePasswordText(option: any) {
    if (option == 1) {
      this.isFieldOneTextVisible = !this.isFieldOneTextVisible;
    }

    if (option == 2) {
      this.isFieldTwoTextVisible = !this.isFieldTwoTextVisible;
    }

    if (option == 3) {
      this.isFieldThreeTextVisible = !this.isFieldThreeTextVisible;
    }
  }


}
