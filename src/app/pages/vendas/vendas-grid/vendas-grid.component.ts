import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { VendaFiltro, VendaService } from '../venda.service';
import { ToastyService } from 'ng2-toasty';
import { Table } from 'primeng/table/table';

@Component({
  selector: 'app-vendas-grid',
  templateUrl: './vendas-grid.component.html',
  styleUrls: ['./vendas-grid.component.scss']
})
export class VendasGridComponent implements OnInit {

  filtro = new VendaFiltro();
  totalRegistros = 0;
  colunas: any[];
  vendas = [];

  @ViewChild('tabela', {static: true}) grid: Table;

  constructor(
    private vendaService: VendaService,
    private confirmationService: ConfirmationService,
    private toastyService: ToastyService
  ) { }

  ngOnInit(): void {
    this.listar();

    this.colunas = [
      { field: 'dataVenda', header: 'Data da Venda'},
      { field: 'ativo', header: 'Ativo'},
      { field: 'quantidade', header: 'Quantidade'},
      { field: 'precoCompra', header: 'Preço de Compra'},
      { field: 'precoVenda', header: 'Preço de Venda'},
      { field: 'porcentagem', header: 'Ganhos (%)'},
      { field: 'lucro', header: 'Lucro (R$)'}
    ];
  }

  listar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.vendaService.listar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.vendas = resultado.vendas;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.listar(pagina);
  }
}
