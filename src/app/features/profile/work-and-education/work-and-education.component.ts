import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DatabankService } from 'src/app/shared/services/databank.service';

@Component({
  selector: 'app-work-and-education',
  templateUrl: './work-and-education.component.html',
  styleUrls: ['./work-and-education.component.css']
})
export class WorkAndEducationComponent implements OnInit {

  @Input() workAndEducationDetails: any;
  @Output() moveStep: any = new EventEmitter<any>();
  @Output() updateWorkAndEducationDetails: any = new EventEmitter<any>();
  personalDetails: any = {};
  stateList: any[] = [];
  levelOfWork: any = 'entrepreneur';
  qualifications: any[] = [];
  industries: any[] = [];
  errorMessages: any = {};
  isWorkAndEducationFormSubmitted = false;

  entrepreneurObject: any = {};
  microTraderObject: any = {};
  salaryEarnerObject: any = {};
  studentObject: any = {};

  // Forms
  @ViewChild('workAndEducationForm') workAndEducationForm: any;

  constructor(private dataBankService: DatabankService,  private toastrService: ToastrService) {
    this.errorMessages = this.dataBankService.messages;
   }

  ngOnInit(): void {
    if (this.workAndEducationDetails) {
      this.levelOfWork = this.workAndEducationDetails.jobStatus;
      if (this.levelOfWork == 'entrepreneur') {
        this.entrepreneurObject = this.workAndEducationDetails;
      } else if (this.levelOfWork == 'microTrader') {
        this.microTraderObject = this.workAndEducationDetails;
      } else if (this.levelOfWork == 'salaryEarner') {
        this.salaryEarnerObject = this.workAndEducationDetails;
      } else if(this.levelOfWork == 'student') {
        this.studentObject = this.workAndEducationDetails;
      }
    }
  }

  navigateStep(value: any): void {
    this.moveStep.emit(value);
  }

  clearObjects(): void {
    this.entrepreneurObject = {};
    this.microTraderObject = {};
    this.salaryEarnerObject = {};
    this.studentObject = {};
  }
}
