import { AtivoService } from './../ativo.service';
import { Component, OnInit } from '@angular/core';

import { Ativo, Categoria } from './../../core/model';
import { FormControl } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-ativo-cadastro',
  templateUrl: './ativo-cadastro.component.html',
  styleUrls: ['./ativo-cadastro.component.scss']
})
export class AtivoCadastroComponent implements OnInit {

  ativo = new Ativo();

  categorias = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private ativoService: AtivoService,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.carregarCategorias();
  }

  adicionar(form: FormControl) {
    this.ativoService.adicionar(this.ativo)
      .then(() => {
        this.toasty.success('Ativo adicionado com sucesso.');

        form.reset();
        this.ativo = new Ativo();
        this.ativoService.listar();

      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarCategorias() {
    return this.categoriaService.listar()
      .then(categorias => {
        this.categorias = categorias
          .map(c => ({ label: c.nome, value: c.id }));
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

}
