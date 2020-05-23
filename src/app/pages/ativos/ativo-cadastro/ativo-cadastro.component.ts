import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { AtivoService } from './../ativo.service';
import { CategoriaService } from '../categoria.service';
import { Ativo, Categoria } from './../../../core/model';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AtivosGridComponent } from './../ativos-grid/ativos-grid.component';

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
      this.atualizarAtivo(this.ativo);
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

  atualizarAtivo(ativo: Ativo) {
    this.ativoService.atualizar(this.ativo)
      .then(ativo => {
        this.ativo = ativo;
        this.displayModal = false;

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

  editar(id: number) {
    this.carregarAtivo(id);
    this.showModalDialog();
  }

}
