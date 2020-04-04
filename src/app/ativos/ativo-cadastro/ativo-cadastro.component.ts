import { Component, OnInit } from '@angular/core';

import { Ativo, Categoria } from './../../core/model';
import { FormControl } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-ativo-cadastro',
  templateUrl: './ativo-cadastro.component.html',
  styleUrls: ['./ativo-cadastro.component.scss']
})
export class AtivoCadastroComponent implements OnInit {

  ativo = new Ativo();

  categorias = new Categoria();

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.carregarCategorias();
  }

  salvar(form: FormControl) {
    console.log(this.ativo);
  }

  carregarCategorias() {
    return this.categoriaService.listar()
      .then(categorias => {
        this.categorias = categorias
          .map(c => ({ label: c.nome, value: c.id }));
      });
  }

}
