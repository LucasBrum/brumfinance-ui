import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/api';
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

  filtro = new AporteFiltro();
  totalRegistros = 0;
  aportes = [];
  colunas: any[];

  @ViewChild('tabelaAporte', {static: true}) grid: Table;

  constructor(
    private aporteService: AporteService,
    private confirmationService: ConfirmationService,
    private toastyService: ToastyService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.aporteService.listar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.aportes = resultado.aportes;
      });
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
