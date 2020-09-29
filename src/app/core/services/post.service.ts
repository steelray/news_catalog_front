import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDTO } from '../dto/post.dto';
import { IPost } from '../interfaces/post.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ApiService {
  private readonly action = 'posts';
  fetchAll(params: PostDTO = {}): Observable<IPost[]> {
    return this.get<IPost[]>(this.action, { params });
  }
  fetchOne(slug: string): Observable<IPost> {
    return this.get<IPost>(`${this.action}/${slug}`);
  }
}
