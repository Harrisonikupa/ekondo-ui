import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.css']
})
export class SecuritySettingsComponent implements OnInit {

  isFieldOneTextVisible: boolean = false;
  securityOption: number = 1;
  resetOption: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setSecurityOption(option: number) {
    this.securityOption = option;
  }

  setResetOption(option: number) {
    this.resetOption = option;
  }

  togglePinText(option: any) {
    if (option == 1) {
      this.isFieldOneTextVisible = !this.isFieldOneTextVisible;
    }
  }

}
