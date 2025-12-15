import { Component, computed, input } from '@angular/core';
import { ICategoriesByGroup, ICategory } from '../../models/categories';
import { CategoryLogic } from '../../services/logic/category-logic/category-logic';
import { CategoryListComponent } from '../category-list/category-list';
import { PillComponent } from '../pill/pill';

@Component({
  selector: 'cvw-category-group',
  imports: [PillComponent, CategoryListComponent],
  templateUrl: './category-group.html',
})
export class CategoryGroupComponent {
  public categories = input.required<ICategory[]>();

  public categoriesByGroups = computed<ICategoriesByGroup[]>(() => {
    return this.categoryLogic.groupByGroup(this.categories());
  });

  constructor(public categoryLogic: CategoryLogic) {}
}
