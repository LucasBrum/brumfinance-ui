import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import {SpinnerModule} from 'primeng/spinner';

import { AppComponent } from './app.component';
import { AtivoCadastroComponent } from './ativos/ativo-cadastro/ativo-cadastro.component';
import { AtivosGridComponent } from './ativos/ativos-grid/ativos-grid.component';
import { AporteCadastroComponent } from './aportes/aporte-cadastro/aporte-cadastro.component';
import { CoreModule } from './core/core.module';

import { AtivoService, AtivoFiltro } from './ativos/ativo.service';
import { CategoriaService } from './ativos/categoria.service';
import { AporteService } from './aportes/aporte.service';




@NgModule({
  declarations: [
    AppComponent,
    AtivoCadastroComponent,
    AtivosGridComponent,
    AporteCadastroComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    ToolbarModule,
    ConfirmDialogModule,
    CalendarModule,
    SpinnerModule,
    InputMaskModule,

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
  providers: [AtivoService, CategoriaService, ConfirmationService, AtivoFiltro, AporteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
