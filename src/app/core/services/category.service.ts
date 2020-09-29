import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDTO } from '../dto/post.dto';
import { ICategory } from '../interfaces/category.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService {
  private readonly action = 'categories';
  fetchAll(params: PostDTO = {}): Observable<ICategory[]> {
    return this.get<ICategory[]>(this.action, { params });
  }
  fetchOne(id: number): Observable<ICategory> {
    return this.get<ICategory>(`${this.action}/${id}`);
  }
  getTree(): Observable<ICategory[]> {
    return this.get<ICategory[]>('get-tree');
  }
}
