import { Component, input } from '@angular/core';
import { ICategory } from '../../models/categories';
import { PillComponent } from '../pill/pill';

@Component({
  selector: 'cvw-category',
  imports: [PillComponent],
  templateUrl: './category.html',
  host: {
    class: 'cvw-category',
    '[class.cvw-category--selected]': 'selected()',
  },
})
export class CategoryComponent {
  public category = input.required<ICategory>();

  public selected = input(false);
}
