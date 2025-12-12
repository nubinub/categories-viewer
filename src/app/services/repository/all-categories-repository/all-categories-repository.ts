import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../../models/categories';

@Injectable({
  providedIn: 'root',
})
export class AllCategoriesRepository {
  private httpClient = inject(HttpClient);

  private static readonly path = 'all-categories';

  public get(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(AllCategoriesRepository.path);
  }
}
