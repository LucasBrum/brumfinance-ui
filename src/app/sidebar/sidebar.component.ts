import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit{
    visibleSidebar1;

    items: MenuItem[];

    ngOnInit() {
      this.items = [
          {label: 'Ativos', icon: 'pi pi-money-bill'},
          {label: 'Aportes', icon: 'pi pi-chart-line'},
          {label: 'Minhas Finanças', icon: 'pi pi-home'},
          {label: 'Dívidas', icon: 'pi pi-fw pi-minus-circle'}
      ];
  }

}
