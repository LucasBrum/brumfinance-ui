import { AtivoService } from './../ativo.service';
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

  ativos = [];
  colunas: any[];
  @ViewChild('tabela', {static: true}) grid: Table;

  constructor(private ativoService: AtivoService) {}

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

  listar() {
    this.ativoService.listar()
      .then(ativos => this.ativos = ativos);
  }

  excluir(ativo: any) {
    this.ativoService.excluir(ativo.id)
    .then(() => {
      this.grid.reset();
    });
   }
}
