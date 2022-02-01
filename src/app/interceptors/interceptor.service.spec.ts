import { TestBed } from '@angular/core/testing';

import { interceptorService } from './interceptor.service';

describe('interceptorService', () => {
  let service: interceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(interceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
