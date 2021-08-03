import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  documentFileLength: any = 0;
  documentFile: any;
  documentData: any = '';

  profileFileLength: any = 0;
  profileFile: any;
  profileData: any = '';

  constructor(private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void {
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


  openProfileUpload(): void {
    $('#documentUpload').trigger('click');
  }

  handleProfileUpload(fileInput: any): void {
    this.profileFile = fileInput.target.files[0];
    this.profileFileLength = fileInput.target.files.length;
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          this.profileData = e.target.result;
          // image compression
          this.imageCompress.compressFile(e.target.result, -2, 50, 70).then(
            result => {
              this.profileData = result;
              // converting result back to a file
              fetch(this.profileData)
                .then(res => res.blob())
                .then(blob => {
                  this.profileFile = new File([blob], this.profileFile.name, {
                    type: this.profileFile.type,
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
