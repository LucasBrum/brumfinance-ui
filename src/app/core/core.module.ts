import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';

import { ErrorHandlerService } from './error-handler.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideBarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MenubarModule,
    ButtonModule,
    ToastyModule.forRoot(),
    RouterModule

  ],
  exports: [
    NavbarComponent,
    SideBarComponent,
    ToastyModule
  ],
  providers: [
    ErrorHandlerService
  ]
})
export class CoreModule { }
