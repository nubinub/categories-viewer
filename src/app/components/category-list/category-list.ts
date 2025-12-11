import { Component, input } from '@angular/core';
import { ICategory } from '../../models/categories';
import { CategoryComponent } from '../category/category';

@Component({
  selector: 'cvw-category-list',
  imports: [CategoryComponent],
  templateUrl: './category-list.html',
})
export class CategoryListComponent {
  public categories = input<ICategory[]>();
}
