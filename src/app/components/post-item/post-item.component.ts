import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPost } from 'src/app/core/interfaces/post.interface';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent {
  @Input() post: IPost;

}
