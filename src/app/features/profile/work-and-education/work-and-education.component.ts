import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
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
  levelOfWork: any = 'selfemployed';
  qualifications: any[] = [];
  industries: any[] = [];
  errorMessages: any = {};
  isWorkAndEducationFormSubmitted = false;
  isBusinessRegistered: any ='no';
  selfemployedObject: any = {};
  microTraderObject: any = {};
  employedObject: any = {};
  unepmloyedObject: any = {};
  showRcNumberField: boolean = false;
  documentFileLength: any = 0;
  documentFile: any;
  documentData: any = '';
  // Forms
  @ViewChild('workAndEducationForm') workAndEducationForm: any;

  constructor(private dataBankService: DatabankService,  private toastrService: ToastrService, private imageCompress: NgxImageCompressService) {
    this.errorMessages = this.dataBankService.messages;
   }

  ngOnInit(): void {
    if (this.workAndEducationDetails) {
      this.levelOfWork = this.workAndEducationDetails.jobStatus;
      if (this.levelOfWork == 'selfemployed') {
        this.selfemployedObject = this.workAndEducationDetails;
      }else if (this.levelOfWork == 'employed') {
        this.employedObject = this.workAndEducationDetails;
      } else if(this.levelOfWork == 'unemployed') {
        this.unepmloyedObject = this.workAndEducationDetails;
      }
    }
  }

  navigateStep(value: any): void {
    this.moveStep.emit(value);
  }

  clearObjects(): void {
    this.selfemployedObject = {};
    this.employedObject = {};
    this.unepmloyedObject = {};
  }

  showRcField() {
    console.log('sss');
    if (this.isBusinessRegistered == 'yes') {
      this.showRcNumberField = true;
    } else {
      this.showRcNumberField = false;
    }
  }

  openDocumentUpload(): void {
    $('#documentUpload').trigger('click');
  }

  handleDocumentUpload(fileInput: any): void {
    this.documentFile = fileInput.target.files[0];
    this.documentFileLength = fileInput.target.files.length;
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          this.documentData = e.target.result;
          // image compression
          this.imageCompress.compressFile(e.target.result, -2, 50, 70).then(
            result => {
              this.documentData = result;
              // converting result back to a file
              fetch(this.documentData)
                .then(res => res.blob())
                .then(blob => {
                  this.documentFile = new File([blob], this.documentFile.name, {
                    type: this.documentFile.type,
                  });
                });
            }
          );
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
