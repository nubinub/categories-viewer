import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../../models/categories';
import { CategoryRepository } from '../../repository/category-repository/category-repository';

@Injectable({
  providedIn: 'root',
})
export class CategoryLogic {
  private repository = inject(CategoryRepository);

  public geVisibleList(): Observable<ICategory[]> {
    return this.repository.get();
  }
}
