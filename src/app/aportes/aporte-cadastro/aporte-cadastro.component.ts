import { Component, OnInit } from '@angular/core';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Ativo } from 'src/app/core/model';

@Component({
  selector: 'app-aporte-cadastro',
  templateUrl: './aporte-cadastro.component.html',
  styleUrls: ['./aporte-cadastro.component.scss']
})
export class AporteCadastroComponent implements OnInit {

  ativos = new Ativo();

  constructor() { }

  displayModal = false;

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }


}
