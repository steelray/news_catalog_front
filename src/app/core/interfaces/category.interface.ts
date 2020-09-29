import { TreeNode } from 'primeng/api';

export interface ICategory extends TreeNode {
  id: number;
  title: string;
  slug: string;
  parent_id?: number;
  children?: ICategory[];
}
