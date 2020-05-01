import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

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
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppComponent } from './app.component';
import { AtivoCadastroComponent } from './ativos/ativo-cadastro/ativo-cadastro.component';
import { AtivosGridComponent } from './ativos/ativos-grid/ativos-grid.component';
import { AporteCadastroComponent } from './aportes/aporte-cadastro/aporte-cadastro.component';
import { CoreModule } from './core/core.module';

import { AtivoService, AtivoFiltro } from './ativos/ativo.service';
import { CategoriaService } from './ativos/categoria.service';
import { AporteService } from './aportes/aporte.service';
import { VendaService } from './vendas/venda.service';
import { AportesGridComponent } from './aportes/aportes-grid/aportes-grid.component';
import { VendaCadastroComponent } from './vendas/venda-cadastro/venda-cadastro.component';
import { VendasGridComponent } from './vendas/vendas-grid/vendas-grid.component';
import { Routes, RouterModule } from '@angular/router';

registerLocaleData(localePt);

const routes: Routes = [
  {path: 'ativos', component: AtivoCadastroComponent},
  {path: 'aportes', component: AporteCadastroComponent},
  {path: 'vendas', component: VendaCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AtivoCadastroComponent,
    AtivosGridComponent,
    AporteCadastroComponent,
    AportesGridComponent,
    VendaCadastroComponent,
    VendasGridComponent
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
    CurrencyMaskModule,
    RouterModule.forRoot(routes),

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
  providers: [
    AtivoService,
    CategoriaService,
    ConfirmationService,
    AtivoFiltro,
    AporteService,
    VendaService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
