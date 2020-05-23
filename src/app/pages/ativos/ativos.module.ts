import { SpinnerModule } from 'primeng/spinner';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

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
    InputTextModule,
    SpinnerModule,
    ButtonModule
  ],
  exports:[]
})
export class AtivosModule { }
