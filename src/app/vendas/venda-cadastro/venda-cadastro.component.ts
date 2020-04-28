import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.scss']
})
export class VendaCadastroComponent implements OnInit {

  displayModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }
}
