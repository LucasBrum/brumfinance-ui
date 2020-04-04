import { Component, OnInit } from '@angular/core';

import { Ativo } from './../../core/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ativo-cadastro',
  templateUrl: './ativo-cadastro.component.html',
  styleUrls: ['./ativo-cadastro.component.scss']
})
export class AtivoCadastroComponent implements OnInit {

  ativo = new Ativo();

  categorias: any[];

  constructor() { }

  ngOnInit(): void {
  }

  salvar(form: FormControl) {
    console.log(this.ativo);
  }

}
