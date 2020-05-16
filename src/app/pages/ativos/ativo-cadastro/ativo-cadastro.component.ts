import { AtivosGridComponent } from './../ativos-grid/ativos-grid.component';
import { AtivoService } from './../ativo.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { Ativo, Categoria } from './../../../core/model';
import { FormControl } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute } from '@angular/router';

type ativo = Ativo;

@Component({
  selector: 'app-ativo-cadastro',
  templateUrl: './ativo-cadastro.component.html',
  styleUrls: ['./ativo-cadastro.component.scss']
})
export class AtivoCadastroComponent implements OnInit {

  @ViewChild('ativosGrid') ativosGrid: AtivosGridComponent;

  ativo = new Ativo();
  categorias = new Categoria();
  displayModal = false;

  constructor(
    private categoriaService: CategoriaService,
    private ativoService: AtivoService,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idAtivo = this.route.snapshot.params['id'];

    if(idAtivo) {
      this.carregarAtivo(idAtivo);
    }
    this.carregarCategorias();
  }

  get editando() {
    return Boolean(this.ativo.id);
  }

  carregarAtivo(id: number) {
    this.ativoService.buscarPorCodigo(id)
      .then(ativo => {
        this.ativo = ativo;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  salvar(form: FormControl) {
    if(this.editando) {
      this.atualizarAtivo(form);
    } else {
      this.adicionarAtivo(form);
    }
  }

  adicionarAtivo(form: FormControl) {
    this.ativoService.adicionar(this.ativo)
      .then((response) => {
        this.toasty.success('Ativo adicionado com sucesso.');

        form.reset();
        this.ativo = new Ativo();
        this.displayModal = false;
        this.ativosGrid.listar();

      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizarAtivo(form: FormControl) {
    this.ativoService.atualizar(this.ativo)
      .then(ativo => {
        this.ativo = ativo;

        this.toasty.success('Ativo atualizado com sucesso.');
      });
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
