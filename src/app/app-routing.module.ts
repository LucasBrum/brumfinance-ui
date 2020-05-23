import { VendaCadastroComponent } from './pages/vendas/venda-cadastro/venda-cadastro.component';
import { AporteCadastroComponent } from './pages/aportes/aporte-cadastro/aporte-cadastro.component';
import { AtivoCadastroComponent } from './pages/ativos/ativo-cadastro/ativo-cadastro.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'ativos', component: AtivoCadastroComponent},
  {path: 'ativos/:id', component: AtivoCadastroComponent},
  {path: 'aportes', component: AporteCadastroComponent},
  {path: 'vendas', component: VendaCadastroComponent}
];

@NgModule({

  imports: [

    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
