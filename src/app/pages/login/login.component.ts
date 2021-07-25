import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DatabankService } from 'src/app/shared/services/databank.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iForgotPassword: any = {
    forgotPassword: false,
    readyToReset: false
  };

  loginObject: any = {};

  representativeObject: any = {};

  constructor(private authService: AuthService, private dataBankService: DatabankService, private toastrService: ToastrService,
    private router: Router) {
  }

  // Forms

  ngOnInit(): void {
    localStorage.clear();
  }

  forgotPassword(status: boolean) {
    this.iForgotPassword.forgotPassword = status;
  }

  togglePassword() {
    this.iForgotPassword.forgotPassword = !this.iForgotPassword.forgotPassword;
    this.iForgotPassword.readyToReset = false;
  }

  loginRepresentative() {
    const that = this;
    // if ($('#loginForm').smkValidate()) {
    //   this.authService.login(this.loginObject).subscribe((response: any) => {
    //     if (response.status) {
    //       localStorage.clear();
    //       localStorage.setItem('authorized-details', JSON.stringify(response.data));
          that.router.navigateByUrl('/dashboard');
      //   }
      // })
    // }
  }

  getRepresentativeObject(response: any) {
    this.representativeObject = response;
    if (this.representativeObject) {
      this.iForgotPassword.forgotPassword = true;
      this.iForgotPassword.readyToReset = true;
    }
  }

  getResetPasswordResponse(response: any) {
    this.iForgotPassword = response;
  }

}
