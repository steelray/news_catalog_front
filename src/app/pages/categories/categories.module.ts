import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TreeModule } from 'primeng/tree';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ComponentsModule,
    TreeModule
  ]
})
export class CategoriesModule { }
