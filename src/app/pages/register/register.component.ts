import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DatabankService } from 'src/app/shared/services/databank.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  states: any[] = [];
  countries: any[] = [];
  nationalities: any[] = [];
  genders: any[] = [];
  maritalStatuses: any[] = [];
  securityQuestions: any[] = [];

  currentStep: number = 1;

  otpMessage: any = '';
  errorMessages: any = {};

  verificationObject: any = {};
  representativeDetailsObject: any = {};
  oneTimePassword: any = '';
  accountSettingsObject: any = {};

  onboardingObject: any = {};



  constructor(private authService: AuthService, private dataBankService: DatabankService, private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute, private utilityService: UtilityService, private router: Router) {
    this.errorMessages = dataBankService.messages;
    this.representativeDetailsObject.contactInfo = {};
    this.onboardingObject.contactInfo = {};
    this.states = dataBankService.getStates();
    this.countries = dataBankService.getCountries();
    this.nationalities = dataBankService.getNationalities();
    this.genders = dataBankService.getGenders();
    this.maritalStatuses = dataBankService.getMaritalStatuses();
  }


  ngOnInit(): void {
    // const securityQuestions = this.activatedRoute.snapshot.data.securityQuestions.data;

    // securityQuestions.forEach((q: any) => {
    //   let question = q;
    //   question = this.utilityService.renameKey(question, 'key', 'id');
    //   question = this.utilityService.renameKey(question, 'value', 'text');

    //   this.securityQuestions.push(question);
    // });

    // securityQuestions.forEach((q: any) => {
    //   this.securityQuestions.push(q.value);
    // });
  }

  verifyRepresentative() {
    if ($('#verificationForm').smkValidate()) {
      this.authService.getRepresentativeDetails(this.verificationObject).subscribe((response: any) => {
        if (response.status) {
          console.log(response.data);
          this.representativeDetailsObject = response.data;
          this.goToStep('+');
        }
    })
    }
  }

  collectPersonalData() {
    // if (this.personalDataForm.form.status == 'DISABLED') {
      this.sendOtp();
    // }
  }

  validateOneTimePassword() {
    if ($('#otpValidationForm').smkValidate()) {
      this.validateOtp();
    }
  }

  collectAccountSettingsData() {

    if ($('#accountSettingsForm').smkValidate()) {
      this.collateAndSubmitOnboardingData();
    }
  }

  goToStep(step: string) {
    if (step == '-') {
      if(this.currentStep != 1) {
        this.currentStep = this.currentStep - 1;
        console.log('step');
      }
    } else {
      if (this.currentStep != 4) {
        this.currentStep = this.currentStep + 1;
      }
    }
  }

  sendOtp() {
    // this.authService.sendOtpToRepresentative(this.verificationObject).subscribe((response: any) => {
    //   if (response.status) {
        if (this.currentStep !== 3) {
          this.goToStep('+');
        }
        // this.otpMessage = response.message;
    //   }
    // })
  }

  // API Call
  validateOtp() {
    const request = {
      repId: this.representativeDetailsObject._id,
      reference: this.verificationObject.reference,
      otp: this.oneTimePassword
    }
    // this.authService.validateOtp(request).subscribe((response: any) => {
    //   if (response.status) {
        this.goToStep('+');
    //   }
    // })
  }

  // DATA & API
  collateAndSubmitOnboardingData() {
    this.onboardingObject.pin = this.accountSettingsObject.pin;
    this.onboardingObject.securityQuestion = parseInt(this.accountSettingsObject.securityQuestion);
    this.onboardingObject.securityAnswer = this.accountSettingsObject.securityAnswer;
    this.onboardingObject.password = this.accountSettingsObject.password;
    this.onboardingObject.gender = this.representativeDetailsObject.gender;
    this.onboardingObject.bvn = this.representativeDetailsObject.contactInfo.bvn;
    this.onboardingObject.street = this.representativeDetailsObject.contactInfo.address;
    this.onboardingObject.reference = this.verificationObject.reference;
    this.onboardingObject.repId = this.representativeDetailsObject._id;
    this.onboardingObject.dob = this.representativeDetailsObject.dob;

    this.onboardingObject.stateOfOrigin = this.representativeDetailsObject.stateOfOrigin;
    this.onboardingObject.lga = this.representativeDetailsObject.lga;
    this.onboardingObject.nationality = this.representativeDetailsObject.nationality;
    this.onboardingObject.maritalStatus = this.representativeDetailsObject.maritalStatus;
    this.onboardingObject.nationality = this.representativeDetailsObject.nationality;

    this.onboardingObject.contactInfo.houseNumber = this.representativeDetailsObject.contactInfo.houseNumber;
    this.onboardingObject.contactInfo.address = this.representativeDetailsObject.contactInfo.address;
    this.onboardingObject.contactInfo.state = this.representativeDetailsObject.contactInfo.state;
    this.onboardingObject.contactInfo.country = this.representativeDetailsObject.contactInfo.country;
    this.onboardingObject.contactInfo.lga = this.representativeDetailsObject.contactInfo.lga;
    this.onboardingObject.contactInfo.bvn = this.representativeDetailsObject.contactInfo.bvn;
    this.onboardingObject.contactInfo.mobileNumber2 = this.representativeDetailsObject.contactInfo.mobileNumber2;

    console.log(this.onboardingObject);

    this.authService.completeOnboardingForRepresentative(this.onboardingObject).subscribe((response: any) => {
      if (response.status) {
        this.toastrService.success(response.message, 'Registration successful', { closeButton: true });
        this.router.navigate(['/login']);
      }
    })

  }

  submitRegistrationForm() {
    // console.log(this.currentStep);
    if (this.currentStep == 1) {
      this.goToStep('+');
    }
    else if (this.currentStep == 2) {
      this.collectPersonalData();
    } else if (this.currentStep == 3) {
      this.validateOneTimePassword()
    } else if (this.currentStep == 4) {
      this.collectAccountSettingsData();
    }
  }

  termsAndConditionStatus() {
    this.accountSettingsObject.termsAndCondition
    console.log(this.accountSettingsObject);
  }

}
