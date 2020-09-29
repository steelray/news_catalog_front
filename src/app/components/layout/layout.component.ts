import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  @Input() pageTitle: string;
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Новости', icon: 'pi pi-fw pi-align-justify', routerLink: '/posts', },
      { label: 'Категорий', icon: 'pi pi-fw pi-list', routerLink: '/categories' }
    ];
  }

}
