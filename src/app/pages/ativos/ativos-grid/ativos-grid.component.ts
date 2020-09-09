import { AtivoCadastroComponent } from './../ativo-cadastro/ativo-cadastro.component';
import { IndiceBovespa, Ativo } from './../../../core/model';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { AtivoService, AtivoFiltro } from './../ativo.service';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-ativos-grid',
  templateUrl: './ativos-grid.component.html',
  styleUrls: ['./ativos-grid.component.scss'],
  preserveWhitespaces: true,
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
  indiceBovespa = new IndiceBovespa();

  loading: boolean;
  totalRegistros = 0;
  ativos = [];
  colunas: any[];
  totalInvestido = 0;
  displayModal = false;
  quantidadeDeAtivos = 0;

  @Output() editar: EventEmitter<number> = new EventEmitter();

  constructor(
    private ativoService: AtivoService,
    private ativoCadastroComponent: AtivoCadastroComponent,
    private confirmationService: ConfirmationService,
    private toastyService: ToastyService
  ) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.listar();
    }, 1000);

    this.colunas = [

      { field: 'codigo', header: 'Código'},
      { field: 'quantidade', header: 'Quantidade'},
      { field: 'precoAtual', header: 'Preço Atual'},
      { field: 'totalDinheiro', header: 'Tenho (R$)'},
      { field: 'totalPorcentagem', header: 'Ganho/Perda'},
      { field: 'dataAtualizacao', header: 'Últ. atualização'}
    ];
    this.buscarCotacaoIbovespa(this.indiceBovespa);
  }

  listar() {
    this.ativoService.listar()
      .then(resultado => {
        this.ativos = resultado.ativos;

        this.totalInvestido = 0;
        this.quantidadeDeAtivos = 0;

        this.ativos.forEach(ativo => {
          this.totalInvestido = this.totalInvestido + ativo.totalDinheiro;
          this.quantidadeDeAtivos = this.quantidadeDeAtivos + ativo.quantidade;
        });
        this.loading = false;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
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
      this.ativos = this.ativos.filter(a => a.id != ativo.id);

      this.toastyService.success('Ativo Financeiro excluído com sucesso.');
    });
   }

  buscarCotacaoIbovespa(indiceIbovespa: IndiceBovespa) {
    this.ativoService.buscaCotacaoIbovespa()
      .then(indiceIbovespa => {
        this.indiceBovespa = indiceIbovespa;
      });
  }

}
