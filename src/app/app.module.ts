import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {ToolbarModule} from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { AtivoCadastroComponent } from './ativos/ativo-cadastro/ativo-cadastro.component';
import { AtivosGridComponent } from './ativos/ativos-grid/ativos-grid.component';
import { CoreModule } from './core/core.module';

import { AtivoService } from './ativos/ativo.service';
import { CategoriaService } from './ativos/categoria.service';




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
    FormsModule,
    ToolbarModule,

    CoreModule,

    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    HttpClientModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    DialogModule

  ],
  providers: [AtivoService, CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
