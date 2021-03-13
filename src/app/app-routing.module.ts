import { AporteCadastroComponent } from './pages/aportes/aporte-cadastro/aporte-cadastro.component';
import { AtivoCadastroComponent } from './pages/ativos/ativo-cadastro/ativo-cadastro.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'aportes', component: AporteCadastroComponent}
];

@NgModule({

  imports: [

    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
