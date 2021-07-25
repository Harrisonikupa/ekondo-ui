import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DatabankService } from 'src/app/shared/services/databank.service';

declare var $: any;
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  representativeEmail: string = '';
  errorMessages: any = {};

  @Input() representativeEmailAddress: any;
  @Output() representativeObject = new EventEmitter();

  constructor(private authService: AuthService, private dataBankService: DatabankService) {
    this.errorMessages = dataBankService.messages;
   }

  // Forms

  ngOnInit(): void {
  }

  getRepresentativeSecurityQuestion() {
    if($('#resetPasswordForm').smkValidate()) {
      this.authService.getRepresentativeSecurityQuestion(this.representativeEmail).subscribe((response: any) => {
        if (response.status) {
          const model = {
            question: response.data,
            email: this.representativeEmail
          };
          this.representativeObject.emit(model);
        }
      });
    }
  }
}
