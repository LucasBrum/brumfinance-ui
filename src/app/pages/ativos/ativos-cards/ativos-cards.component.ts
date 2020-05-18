import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ativos-cards',
  templateUrl: './ativos-cards.component.html',
  styleUrls: ['./ativos-cards.component.scss']
})
export class AtivosCardsComponent implements OnInit {

  @Input() icon: string;
  @Input() label: string;
  @Input() value: string;
  @Input() colour: string;

  constructor() { }

  ngOnInit(): void {
  }

}
