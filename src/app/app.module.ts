import { AtivosModule } from './pages/ativos/ativos.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AtivoCadastroComponent } from './pages/ativos/ativo-cadastro/ativo-cadastro.component';
import { AtivosGridComponent } from './pages/ativos/ativos-grid/ativos-grid.component';
import { AporteCadastroComponent } from './pages/aportes/aporte-cadastro/aporte-cadastro.component';
import { CoreModule } from './core/core.module';

import { AtivoService, AtivoFiltro } from './pages/ativos/ativo.service';
import { CategoriaService } from './pages/ativos/categoria.service';
import { AporteService } from './pages/aportes/aporte.service';
import { VendaService } from './pages/vendas/venda.service';
import { AportesGridComponent } from './pages/aportes/aportes-grid/aportes-grid.component';
import { VendaCadastroComponent } from './pages/vendas/venda-cadastro/venda-cadastro.component';
import { VendasGridComponent } from './pages/vendas/vendas-grid/vendas-grid.component';
import { Routes, RouterModule } from '@angular/router';
import { AtivosCardsComponent } from './pages/ativos/ativos-cards/ativos-cards.component';
import { AportesModule } from './pages/aportes/aportes.module';

registerLocaleData(localePt);

const routes: Routes = [
  {path: 'ativos', component: AtivoCadastroComponent},
  {path: 'ativos/:id', component: AtivoCadastroComponent},
  {path: 'aportes', component: AporteCadastroComponent},
  {path: 'vendas', component: VendaCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AporteCadastroComponent,
    AportesGridComponent,
    VendaCadastroComponent,
    VendasGridComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    FormsModule,

    ToolbarModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    CalendarModule,
    SpinnerModule,
    InputMaskModule,
    CurrencyMaskModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    InputTextModule,
    FieldsetModule,


    RouterModule.forRoot(routes),

    CoreModule,
    AtivosModule,
    AportesModule,

    HttpClientModule,

    AppRoutingModule

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
