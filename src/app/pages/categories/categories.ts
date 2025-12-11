import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Field, form } from '@angular/forms/signals';
import { CardComponent } from '../../components/card/card';
import { CategoryListComponent } from '../../components/category-list/category-list';
import { ISearchData } from '../../models/search';
import { CategoryLogic } from '../../services/logic/category-logic/category-logic';

@Component({
  selector: 'cvw-categories',
  imports: [CardComponent, CommonModule, CardComponent, CategoryListComponent, Field],
  templateUrl: './categories.html',
})
export class Categories {
  private categoryLogic = inject(CategoryLogic);

  private searchModel = signal<ISearchData>({
    query: '',
  });

  private categories = toSignal(this.categoryLogic.geVisibleList());

  public filteredCategories = computed(() =>
    this.categoryLogic.filter(this.categories(), this.searchModel()),
  );

  public searchForm = form(this.searchModel);
}
