import { inject, Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { ICategory } from '../../../models/categories';
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
}
