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
        {label: 'Dashboard', icon: 'pi pi-th-large',  routerLink: ['/']},
        {label: 'Ativos', icon: 'pi pi-money-bill',  routerLink: ['/ativos']},
        {label: 'Aportes', icon: 'pi pi-chart-line', routerLink: ['/aportes']},
        {label: 'Metas', icon: 'pi pi-ticket', routerLink: ['/metas']}
      ];
  }

}
