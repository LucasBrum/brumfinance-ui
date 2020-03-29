import { AtivoService } from './../ativo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ativos-grid',
  templateUrl: './ativos-grid.component.html',
  styleUrls: ['./ativos-grid.component.scss']
})
export class AtivosGridComponent implements OnInit {

  ativos = [];

  constructor(private ativoService: AtivoService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.ativoService.listar()
      .then(() => null);
  }

}
