import { TestBed } from '@angular/core/testing';

import { CategoryLogic } from './category-logic';

describe('CategoryLogic', () => {
  let service: CategoryLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
