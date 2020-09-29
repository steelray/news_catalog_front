import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PostItemComponent } from './post-item/post-item.component';
import { PanelModule } from 'primeng/panel';
import { SafePipe } from '../core/pipes/safe.pipe';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  LayoutComponent,
  PostItemComponent,
  SafePipe
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenuModule,
    ButtonModule,
    PanelModule,
    RouterModule
  ],
  exports: COMPONENTS
})
export class ComponentsModule { }
