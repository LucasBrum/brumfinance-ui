import { FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { VendaService } from '../venda.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Venda } from 'src/app/core/model';
import { VendasGridComponent } from '../vendas-grid/vendas-grid.component';

type venda = Venda;

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.scss']
})
export class VendaCadastroComponent implements OnInit {

  //@Output() cadastroEfetuado = new EventEmitter<Venda>();
  @ViewChild('vendasGrid') vendasGrid: VendasGridComponent;

  venda = new Venda();
  displayModal = false;

  constructor(
    private vendaService: VendaService,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  adicionar(form: FormControl) {
    this.vendaService.adicionar(this.venda)
      .then((response) => {
        this.toasty.success('Venda de Ativo regristrado com sucesso.');

        form.reset();
        this.venda = new Venda();
        this.displayModal = false;
        this.vendasGrid.listar();
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
