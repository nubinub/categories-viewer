import { inject, Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { ICategory } from '../../../models/categories';
import { ISearchData } from '../../../models/search';
import { AllCategoriesRepository } from '../../repository/all-categories-repository/all-categories-repository';
import { VisibleCategoriesRepository } from '../../repository/visible-categories/visible-categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryLogic {
  private allCategoriesRepository = inject(AllCategoriesRepository);
  private visibleCategoriesRepository = inject(VisibleCategoriesRepository);

  public geVisibleList(): Observable<ICategory[]> {
    return combineLatest([
      this.allCategoriesRepository.get(),
      this.visibleCategoriesRepository.get(),
    ]).pipe(
      map(([categories, visibles]) =>
        categories.filter((category) => visibles.some(({ id }) => category.id === id)),
      ),
    );
  }

  public filter(categories: ICategory[] | undefined, search: ISearchData): ICategory[] {
    const needle = search.query?.toLowerCase();
    return (
      categories?.filter(
        (category) =>
          category.wording?.toLowerCase().includes(needle) ||
          category.description?.toLowerCase().includes(needle),
      ) ?? []
    );
  }
}
