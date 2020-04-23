import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/api';
import { AporteService } from './../aporte.service';
import { Component, OnInit } from '@angular/core';
import { AporteFiltro } from '../aporte.service';

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
    this.filtro.pagina = pagina;
    this.aporteService.listar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.aportes = resultado.aportes;

        console.log(this.aportes);

      });
  }


}
