import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { VisibleCategoriesRepository } from './visible-categories';

describe('VisibleCategoriesRepository', () => {
  let service: VisibleCategoriesRepository;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(VisibleCategoriesRepository);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  describe('#get', () => {
    it('should get all categories', async () => {
      const get$ = service.get();
      const configPromise = firstValueFrom(get$);
      const req = httpTesting.expectOne(
        'visible-categories',
        'Request to load all the visible categories',
      );
      req.flush([]);
      expect(await configPromise).toEqual([]);
      httpTesting.verify();
    });
  });
});
