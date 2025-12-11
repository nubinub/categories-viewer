import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { baseUrlInterceptor } from './base-url-interceptor';

describe('baseUrlInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => baseUrlInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should prepend api base url', () => {
    const mockFn = vi.fn();

    interceptor(new HttpRequest('GET', 'test'), mockFn);

    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({
        url: 'http://localhost:3000/test',
      }),
    );
  });
});
