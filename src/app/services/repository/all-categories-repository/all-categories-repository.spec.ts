import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { AllCategoriesRepository } from './all-categories-repository';

describe('AllCategoriesRepository', () => {
  let service: AllCategoriesRepository;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AllCategoriesRepository);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  describe('#get', () => {
    it('should get all categories', async () => {
      const get$ = service.get();
      const configPromise = firstValueFrom(get$);
      const req = httpTesting.expectOne('all-categories', 'Request to load all the categories');
      req.flush([]);
      expect(await configPromise).toEqual([]);
      httpTesting.verify();
    });
  });
});
