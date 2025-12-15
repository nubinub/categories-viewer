import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Field, form } from '@angular/forms/signals';
import { CardComponent } from '../../components/card/card';
import { CategoryListComponent } from '../../components/category-list/category-list';
import { HeaderComponent } from '../../components/header/header';
import { TabComponent } from '../../components/tab/tab';
import { ISearchData } from '../../models/search';
import { CategoryLogic } from '../../services/logic/category-logic/category-logic';

@Component({
  selector: 'cvw-categories',
  imports: [
    CardComponent,
    CommonModule,
    CardComponent,
    CategoryListComponent,
    Field,
    HeaderComponent,
    TabComponent,
  ],
  templateUrl: './categories.html',
})
export class Categories {
  private categoryLogic = inject(CategoryLogic);

  private searchModel = signal<ISearchData>({
    query: '',
    group: '',
  });

  private categories = toSignal(this.categoryLogic.geVisibleList());

  private sortedCategories = computed(() => this.categoryLogic.sort(this.categories()));

  public mode = signal<'alphabetical' | 'group'>('alphabetical');

  public filteredCategories = computed(() =>
    this.categoryLogic.filter(this.sortedCategories(), this.searchModel())
  );

  public groups = computed(() => this.categoryLogic.getGroups(this.categories()));

  public searchForm = form(this.searchModel);
}
