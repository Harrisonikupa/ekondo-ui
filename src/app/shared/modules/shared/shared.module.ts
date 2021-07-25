import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Camera, Heart, Github, Menu, Eye, EyeOff, Tv, Sun, BookOpen, Shield, Smartphone,
  Wifi, PlusCircle, MinusCircle, CreditCard, BarChart, Shuffle, Trash } from 'angular-feather/icons';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FeatherModule } from 'angular-feather';
import { DataTablesModule } from 'angular-datatables';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ToastrModule } from 'ngx-toastr';
import { NgSelect2Module } from 'ng-select2';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from '../../services/auth-guard.service';
import { DatabankService } from '../../services/databank.service';
import { MomentModule } from 'angular2-moment';
import { AuthService } from '../../services/auth.service';
import { NgxImageCompressService } from 'ngx-image-compress';


const maskConfig: Partial<IConfig> = {
};
const icons = {
  Camera,
  Heart,
  Github,
  Menu,
  Eye,
  EyeOff,
  PlusCircle,
  Tv,
  Sun,
  BookOpen,
  Shield,
  Smartphone,
  Wifi,
  MinusCircle, CreditCard, BarChart, Shuffle, Trash
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    DataTablesModule,
    MomentModule,
    NgxMaskModule.forRoot(maskConfig),
    CustomFormsModule,
    ToastrModule.forRoot(),
    NgSelect2Module
  ],
  exports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    FeatherModule,
    DataTablesModule,
    NgxMaskModule,
    ToastrModule,
    NgSelect2Module,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    DatabankService,
    NgxImageCompressService
  ]
})
export class SharedModule { }
