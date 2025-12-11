import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from '../../components/card/card';
import { CategoryComponent } from '../../components/category/category';
import { CategoryLogic } from '../../services/logic/category-logic/category-logic';

@Component({
  selector: 'cvw-categories',
  imports: [CardComponent, CategoryComponent, CommonModule, CardComponent],
  templateUrl: './categories.html',
})
export class Categories {
  private categoryLogic = inject(CategoryLogic);

  public categories = toSignal(this.categoryLogic.geVisibleList());
}
