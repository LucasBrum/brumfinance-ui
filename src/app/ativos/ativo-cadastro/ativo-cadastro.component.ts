import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ativo-cadastro',
  templateUrl: './ativo-cadastro.component.html',
  styleUrls: ['./ativo-cadastro.component.scss']
})
export class AtivoCadastroComponent implements OnInit {

  ativo = {};

  categorias: any[];

  constructor() { }

  ngOnInit(): void {
  }


}
