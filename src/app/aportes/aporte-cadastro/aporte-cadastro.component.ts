import { AporteService } from './../aporte.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ativo, Aporte } from 'src/app/core/model';
import { CategoriaService } from 'src/app/ativos/categoria.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { FormControl } from '@angular/forms';
import { AtivoService } from 'src/app/ativos/ativo.service';

type aporte = Aporte;

@Component({
  selector: 'app-aporte-cadastro',
  templateUrl: './aporte-cadastro.component.html',
  styleUrls: ['./aporte-cadastro.component.scss']
})
export class AporteCadastroComponent implements OnInit {

  @Output() cadastroEfetuado = new EventEmitter<Aporte>();

  aporte = new Aporte();
  ativos = new Ativo();
  displayModal = false;

  constructor(
    private aporteService: AporteService,
    private ativoService: AtivoService,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService,
  ) { }


  ngOnInit(): void {
    this.carregarAtivos();
  }

  adicionar(form: FormControl) {
    this.aporteService.adicionar(this.aporte)
      .then((response) => {
        this.toasty.success('Aporte adicionado com sucesso.');

        form.reset();
        this.aporte = new Aporte();
        this.displayModal = false;
        this.cadastroEfetuado.emit(response);

      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarAtivos() {
    return this.ativoService.listarAtivosSelect()
      .then(ativos => {
        this.ativos = ativos.map(a => ({ label: a.codigo, value: a.id }));
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
