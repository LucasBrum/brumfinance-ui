import { ToastyService } from 'ng2-toasty';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { AtivoService, AtivoFiltro } from './../ativo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Table } from 'primeng/table/table';

@Component({
  selector: 'app-ativos-grid',
  templateUrl: './ativos-grid.component.html',
  styleUrls: ['./ativos-grid.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class AtivosGridComponent implements OnInit {

  filtro = new AtivoFiltro();
  totalRegistros = 0;
  ativos = [];
  colunas: any[];

  @ViewChild('tabela', {static: true}) grid: Table;

  constructor(
    private ativoService: AtivoService,
    private confirmationService: ConfirmationService,
    private toastyService: ToastyService
  ) {}

  ngOnInit() {
    this.listar();

    this.colunas = [

      { field: 'codigo', header: 'Código'},
      { field: 'quantidade', header: 'Quantidade'},
      { field: 'precoAtual', header: 'Preço Atual'},
      { field: 'totalDinheiro', header: 'Tenho (R$)'},
      { field: 'totalPorcentagem', header: 'Ganho/Perda'},
      { field: 'dataAtualizacao', header: 'Últ. atualização'}
    ];
  }

  listar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.ativoService.listar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.ativos = resultado.ativos;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    console.log(event);
    const pagina = event.first / event.rows;
    this.listar(pagina);
  }

  confirmarExclusao(ativo: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(ativo);
      }
    });
  }

  excluir(ativo: any) {
    this.ativoService.excluir(ativo.id)
    .then(() => {
      this.grid.reset();

      this.toastyService.success('Ativo Financeiro excluído com sucesso.');
    });
   }
}
