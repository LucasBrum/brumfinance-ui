import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AporteCadastroComponent } from './aporte-cadastro/aporte-cadastro.component';

const routes: Routes = [
  {path: 'aportes', component: AporteCadastroComponent}
];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AportesRoutingModule { }
