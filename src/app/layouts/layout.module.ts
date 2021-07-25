import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Menu, Bell, Grid, User, Power, Settings, CreditCard,
  Activity, Pocket, UserPlus, DollarSign, Clipboard, Shuffle, Sliders, List } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

const icons = {
  Menu,
  Bell,
  Grid,
  User,
  Power,
  Settings,
  CreditCard,
  Activity,
  Pocket,
  UserPlus,
  DollarSign,
  Clipboard,
  Shuffle,
  Sliders,
  List
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FeatherModule.pick(icons),
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    FeatherModule
  ],
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
