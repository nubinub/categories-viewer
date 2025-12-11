import { Component, input } from '@angular/core';
import { ICategory } from '../../models/categories';

@Component({
  selector: 'cvw-category',
  imports: [],
  templateUrl: './category.html',
})
export class CategoryComponent {
  public category = input.required<ICategory>();

  public selected = input(false);
}
