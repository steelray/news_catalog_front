import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PostDTO } from 'src/app/core/dto/post.dto';
import { ICategory } from 'src/app/core/interfaces/category.interface';
import { IPost } from 'src/app/core/interfaces/post.interface';
import { CategoryService } from 'src/app/core/services/category.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  posts$: Observable<IPost[]>;
  category$: Observable<ICategory>;
  pageTitle = 'Все новости';
  constructor(
    private postService: PostService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line:variable-name
    this.posts$ = this.activatedRoute.queryParams.pipe(
      switchMap(params => {
        if (params.category) {
          return this.categoryService.fetchOne(params.category);
        }
        return of(null);
      }),
      switchMap(category => {
        const params: PostDTO = {};
        if (category) {
          this.pageTitle = `Новости рубрики: ${category.title}`;
          params.category_id = category.id;
        }
        return this.postService.fetchAll(params);
      })
    );
  }

  trackByFn(index: number, item: IPost): number {
    return item.id;
  }

}
