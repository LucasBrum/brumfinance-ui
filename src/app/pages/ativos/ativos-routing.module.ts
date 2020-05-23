import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { AtivoCadastroComponent } from './ativo-cadastro/ativo-cadastro.component';

const routes: Routes = [
  {path: 'ativos', component: AtivoCadastroComponent},
  {path: 'ativos/:id', component: AtivoCadastroComponent}
];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AtivosRoutingModule { }
