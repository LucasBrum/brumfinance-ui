import { AtivoService } from './ativos/ativo.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { AtivoCadastroComponent } from './ativos/ativo-cadastro/ativo-cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AtivosGridComponent } from './ativos/ativos-grid/ativos-grid.component';




@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AtivoCadastroComponent,
    NavbarComponent,
    AtivosGridComponent


  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    HttpClientModule,
    TableModule,
    TooltipModule

  ],
  providers: [AtivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
