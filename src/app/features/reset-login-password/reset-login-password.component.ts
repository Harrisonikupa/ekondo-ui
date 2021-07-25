import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DatabankService } from 'src/app/shared/services/databank.service';

@Component({
  selector: 'app-reset-login-password',
  templateUrl: './reset-login-password.component.html',
  styleUrls: ['./reset-login-password.component.css']
})
export class ResetLoginPasswordComponent implements OnInit {

  @Input() representativeObject: any = {};
  @Output() resetPasswordResponse: any = new EventEmitter();

  resetPasswordObject: any = {};

  finalResetPasswordObject: any = {};
  errorMessages: any = {};

  isResetPasswordFormSubmitted: boolean = false;

  isFieldOneTextVisible: boolean = false;
  isFieldTwoTextVisible: boolean = false;
  isFieldOneTextVisible1: boolean = false;

  isFieldTwoTextVisible1: boolean = false;

  constructor(private authService: AuthService, private dataBankService: DatabankService, private toastrService: ToastrService) {
    this.errorMessages = dataBankService.messages;
   }

  // Form
  @ViewChild('resetPasswordForm') resetPasswordForm: any;

  ngOnInit(): void {
  }

  resetPassword() {
    this.isResetPasswordFormSubmitted = true;
    if (this.resetPasswordForm.form.valid) {
      this.resetPasswordObject.email = this.representativeObject.email;

      this.finalResetPasswordObject = Object.assign({}, this.resetPasswordObject);
      delete this.finalResetPasswordObject.confirmPassword;

      this.authService.forgotPassword(this.finalResetPasswordObject).subscribe((response: any) => {
        if (response.status) {
         const resetPasswordResponse: any = {
            forgotPassword: false,
            readyToReset: false
          };
          this.toastrService.success('', response.message, { closeButton: true });
          this.resetPasswordResponse.emit(resetPasswordResponse);
        }
      })
    }
  }

  togglePasswordText(option: any) {
    if (option == 1) {
      this.isFieldOneTextVisible = !this.isFieldOneTextVisible;
    }

    if (option == 2) {
      this.isFieldTwoTextVisible = !this.isFieldTwoTextVisible;
    }
  }

  togglePinText(option: any) {
    if (option == 1) {
      this.isFieldOneTextVisible1 = !this.isFieldOneTextVisible1;
    }
  }

}
