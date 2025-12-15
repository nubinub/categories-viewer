import { inject, Injectable } from '@angular/core';
import { uniqBy } from 'lodash-es';
import { combineLatest, map, Observable } from 'rxjs';
import { ICategoriesByGroup, ICategory, IGroup } from '../../../models/categories';
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

  /**
   * Filter the categories according to search data.
   * @param categories
   * @param search
   * @returns
   */
  public filter(categories: ICategory[] | undefined, search: ISearchData): ICategory[] {
    const needle = search.query?.toLowerCase();
    return (
      categories?.filter(
        (category) =>
          (!search.group || category.group?.id === +search.group) &&
          (!needle ||
            category.wording?.toLowerCase().includes(needle) ||
            category.description?.toLowerCase().includes(needle)),
      ) ?? []
    );
  }

  /**
   * Returns all the unique groups from given categories, sorted alphabetically according to name.
   * @param categories
   * @returns
   */
  public getGroups(categories?: ICategory[]): IGroup[] {
    const groups = categories?.map((category) => category.group).filter((group) => !!group) ?? [];
    return uniqBy(groups, (group) => group.id).sort((a, b) => a.name.localeCompare(b.name));
  }

  /**
   * Sort the category according to alphabetical order on category wording
   * @param categories Categories list
   * @returns
   */
  public sort(categories?: ICategory[]): ICategory[] {
    return categories ? [...categories].sort((a, b) => a.wording.localeCompare(b.wording)) : [];
  }

  /**
   * Map all the categories to their given group and create a list accordingly
   * @param categories List of categories
   * @returns A list of group and associated categories
   */
  public groupByGroup(categories: ICategory[]): ICategoriesByGroup[] {
    const groupsMap: Map<number, ICategoriesByGroup> = new Map();

    categories.forEach((category) => {
      const group = category.group;
      if (group) {
        if (!groupsMap.has(group.id)) {
          groupsMap.set(group.id, {
            group,
            categories: [],
          });
        }

        groupsMap.get(group.id)?.categories.push(category);
      }
    });

    return Array.from(groupsMap.values());
  }
}
