import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory } from 'src/app/core/interfaces/category.interface';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<ICategory[]>;
  selectedCategory: ICategory;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getTree().pipe(
      map(cats => this.prepareTree(cats))
    );
  }

  trackByFn(index: number, item: ICategory): number {
    return item.id;
  }

  nodeSelect(e: any): void {
    this.router.navigate(['/posts'], { queryParams: { category: e.node.slug } });
  }

  private prepareTree(categories: ICategory[]): ICategory[] {

    categories.map(cat => {
      cat.label = cat.title;
      if (cat.children) {
        cat.children = this.prepareTree(cat.children);
      }
      return cat;
    });
    return categories;
  }

}
