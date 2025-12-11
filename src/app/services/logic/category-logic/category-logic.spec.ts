import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { Mock } from 'vitest';
import { AllCategoriesRepository } from '../../repository/all-categories-repository/all-categories-repository';
import { VisibleCategoriesRepository } from '../../repository/visible-categories/visible-categories';
import { CategoryLogic } from './category-logic';

describe('CategoryLogic', () => {
  let service: CategoryLogic;
  let allCategoriesRepository: AllCategoriesRepository;
  let visibleCategoriesRepository: VisibleCategoriesRepository;
  let mockFn: Mock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryLogic);
    allCategoriesRepository = TestBed.inject(AllCategoriesRepository);
    visibleCategoriesRepository = TestBed.inject(VisibleCategoriesRepository);

    mockFn = vi.fn();
  });

  describe('#getVisibleList', () => {
    it('should return only the visible categories', () => {
      vi.spyOn(allCategoriesRepository, 'get').mockReturnValue(
        of([
          {
            id: 1,
            description: 'Test One',
            wording: 'T1',
          },
          {
            id: 2,
            description: 'Test Two',
            wording: 'T2',
          },
        ])
      );
      vi.spyOn(visibleCategoriesRepository, 'get').mockReturnValue(of([{ id: 2 }]));

      service.geVisibleList().subscribe(mockFn);

      expect(mockFn).toHaveBeenCalledWith([
        {
          id: 2,
          description: 'Test Two',
          wording: 'T2',
        },
      ]);
    });

    it('should return no category when no visible category', () => {
      vi.spyOn(allCategoriesRepository, 'get').mockReturnValue(
        of([
          {
            id: 1,
            description: 'Test One',
            wording: 'T1',
          },
          {
            id: 2,
            description: 'Test Two',
            wording: 'T2',
          },
        ])
      );
      vi.spyOn(visibleCategoriesRepository, 'get').mockReturnValue(of([]));

      service.geVisibleList().subscribe(mockFn);

      expect(mockFn).toHaveBeenCalledWith([]);
    });
  });

  describe('#filter', () => {
    it('should return category when wording matches query', () => {
      const results = service.filter(
        [
          {
            id: 1,
            description: 'Test One',
            wording: 'T1',
          },
          {
            id: 2,
            description: 'Test Two',
            wording: 'T2',
          },
        ],
        { query: 'T1', group: '' }
      );

      expect(results).toEqual([
        {
          id: 1,
          description: 'Test One',
          wording: 'T1',
        },
      ]);
    });

    it('should return category when description matches query', () => {
      const results = service.filter(
        [
          {
            id: 1,
            description: 'Test One',
            wording: 'T1',
          },
          {
            id: 2,
            description: 'Test Two',
            wording: 'T2',
          },
        ],
        { query: 'Test One', group: '' }
      );

      expect(results).toEqual([
        {
          id: 1,
          description: 'Test One',
          wording: 'T1',
        },
      ]);
    });

    it('should return category when query is substring of description', () => {
      const results = service.filter(
        [
          {
            id: 1,
            description: 'Test One',
            wording: 'T1',
          },
          {
            id: 2,
            description: 'Test Two',
            wording: 'T2',
          },
        ],
        { query: 'ne', group: '' }
      );

      expect(results).toEqual([
        {
          id: 1,
          description: 'Test One',
          wording: 'T1',
        },
      ]);
    });

    it('should return category when query is substring of wording', () => {
      const results = service.filter(
        [
          {
            id: 1,
            description: 'Test One',
            wording: 'T1',
          },
          {
            id: 2,
            description: 'Test Two',
            wording: 'T2',
          },
        ],
        { query: '1', group: '' }
      );

      expect(results).toEqual([
        {
          id: 1,
          description: 'Test One',
          wording: 'T1',
        },
      ]);
    });

    it('should return category when query is substring of description no matter the case', () => {
      const results = service.filter(
        [
          {
            id: 1,
            description: 'Test One',
            wording: 'T1',
          },
          {
            id: 2,
            description: 'TeSt Two',
            wording: 'T2',
          },
        ],
        { query: 'test', group: '' }
      );

      expect(results).toEqual([
        {
          id: 1,
          description: 'Test One',
          wording: 'T1',
        },
        {
          id: 2,
          description: 'TeSt Two',
          wording: 'T2',
        },
      ]);
    });

    it('should return no category when group is given and no category has group', () => {
      const results = service.filter(
        [
          {
            id: 1,
            description: 'Test One',
            wording: 'T1',
          },
          {
            id: 2,
            description: 'TeSt Two',
            wording: 'T2',
          },
        ],
        { query: '', group: '1' }
      );

      expect(results).toEqual([]);
    });
  });
});
