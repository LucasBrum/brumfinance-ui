import { AtivoService } from './../ativo.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Ativo, Categoria } from './../../core/model';
import { FormControl } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

type ativo = Ativo;

@Component({
  selector: 'app-ativo-cadastro',
  templateUrl: './ativo-cadastro.component.html',
  styleUrls: ['./ativo-cadastro.component.scss']
})
export class AtivoCadastroComponent implements OnInit {

  @Output() cadastroEfetuado = new EventEmitter<Ativo>();

  ativo = new Ativo();
  categorias = new Categoria();
  displayModal = false;

  constructor(
    private categoriaService: CategoriaService,
    private ativoService: AtivoService,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    this.carregarCategorias();
  }

  adicionar(form: FormControl) {
    this.ativoService.adicionar(this.ativo)
      .then((response) => {
        this.toasty.success('Ativo adicionado com sucesso.');

        form.reset();
        this.ativo = new Ativo();
        this.displayModal = false;
        this.cadastroEfetuado.emit(response);

      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarCategorias() {
    return this.categoriaService.listar()
      .then(categorias => {
        this.categorias = categorias.map(c => ({ label: c.nome, value: c.id }));
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  showModalDialog() {
    this.displayModal = true;
  }

  cancelar($event) {
    $event.preventDefault();
    this.displayModal = false;
  }

}
