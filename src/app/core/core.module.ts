import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';

import { ErrorHandlerService } from './error-handler.service';


@NgModule({
  declarations: [
    SideBarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MenuModule,
    ButtonModule,
    ToastyModule.forRoot(),

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
