import { ToastyService } from 'ng2-toasty';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { AporteService } from './../aporte.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AporteFiltro } from '../aporte.service';
import { Table } from 'primeng/table/table';

@Component({
  selector: 'app-aportes-grid',
  templateUrl: './aportes-grid.component.html',
  styleUrls: ['./aportes-grid.component.scss']
})
export class AportesGridComponent implements OnInit {

  loading: boolean;
  filtro = new AporteFiltro();
  totalRegistros = 0;
  aportes = [];
  colunas: any[];

  @ViewChild('tabela', {static: true}) grid: Table;

  constructor(
    private aporteService: AporteService,
    private confirmationService: ConfirmationService,
    private toastyService: ToastyService
  ) { }

  ngOnInit(): void {
    this.listar();

    this.colunas = [
      {field: 'dataCompra', header: 'Data'},
      {field: 'ativoFinanceiro.codigo', header: 'Ativo'},
      {field: 'ativoFinanceiro.categoriaAtivo.nome', header: 'Categoria'},
      {field: 'quantidade', header: 'Quantidade'},
      {field: 'custo', header: 'Preço de Compra'},
      {field: 'valorTotal', header: 'Valor Total'}
    ];
  }


  listar(pagina = 0) {
    this.loading = true;
    this.filtro.pagina = pagina;
    this.aporteService.listar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.aportes = resultado.aportes;
        this.loading = false;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    console.log(event);
    const pagina = event.first / event.rows;
    this.listar(pagina);
  }

  confirmarExclusao(aporte: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(aporte);
      }
    });
  }

  excluir(aporte: any) {
    this.aporteService.excluir(aporte.id)
      .then(() => {
        this.grid.reset();

        this.toastyService.success('Aporte excluído com sucesso.');
      });
  }

}
