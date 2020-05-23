import { TooltipModule } from 'primeng/tooltip';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SpinnerModule } from 'primeng/spinner';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosGridComponent } from './ativos-grid/ativos-grid.component';
import { AtivosCardsComponent } from './ativos-cards/ativos-cards.component';
import { AtivoCadastroComponent } from './ativo-cadastro/ativo-cadastro.component';



@NgModule({
  declarations: [
    AtivosCardsComponent,
    AtivoCadastroComponent,
    AtivosGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    DropdownModule,
    ConfirmDialogModule,
    TableModule,
    FieldsetModule,
    DialogModule,
    InputTextareaModule,
    ToolbarModule,
    TooltipModule,
    InputTextModule,
    SpinnerModule,
    ButtonModule,

    AtivosRoutingModule
  ],
  exports:[]
})
export class AtivosModule { }
