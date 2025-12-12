import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVisibleCategory } from '../../../models/categories';

@Injectable({
  providedIn: 'root',
})
export class VisibleCategoriesRepository {
  private httpClient = inject(HttpClient);

  private static readonly path = 'visible-categories';

  public get(): Observable<IVisibleCategory[]> {
    return this.httpClient.get<IVisibleCategory[]>(VisibleCategoriesRepository.path);
  }
}
