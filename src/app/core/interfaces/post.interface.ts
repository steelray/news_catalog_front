import { ICategory } from './category.interface';

export interface IPost {
  slug: string;
  title: string;
  content: string;
  id?: number;
  categories?: ICategory[];
}
