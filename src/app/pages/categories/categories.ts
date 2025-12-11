import { Component } from '@angular/core';
import { CategoryComponent } from '../../components/category/category';
import { PillComponent } from '../../components/pill/pill';
import { ICategory } from '../../models/categories';

@Component({
  selector: 'cvw-categories',
  imports: [PillComponent, CategoryComponent],
  templateUrl: './categories.html',
})
export class Categories {
  public category: ICategory = {
    id: 47,
    group: {
      id: 5,
      name: 'Impôts & Rémunérations',
      color: 'm-red',
    },
    wording: 'Cotisations sociales facultatives et complémentaires',
    description:
      'Mutuelle complémentaire, cotisations retraites complémentaires, loi Madelin et autres cotisations retraite ou maladie facultatives.',
  };
}
