import { AtivoService } from './ativos/ativo.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { AtivoCadastroComponent } from './ativos/ativo-cadastro/ativo-cadastro.component';
import { AtivosGridComponent } from './ativos/ativos-grid/ativos-grid.component';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    AtivoCadastroComponent,
    AtivosGridComponent


  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,

    CoreModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    HttpClientModule,
    TableModule,
    TooltipModule,
    DropdownModule


  ],
  providers: [AtivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
