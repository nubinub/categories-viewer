import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../../models/categories';
import { AllCategoriesRepository } from '../../repository/all-categories-repository/all-categories-repository';

@Injectable({
  providedIn: 'root',
})
export class CategoryLogic {
  private repository = inject(AllCategoriesRepository);

  public geVisibleList(): Observable<ICategory[]> {
    return this.repository.get();
  }
}
