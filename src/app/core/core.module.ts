import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    SideBarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MenuModule,
    ButtonModule
  ],
  exports: [
    NavbarComponent,
    SideBarComponent
  ]
})
export class CoreModule { }
