import { TestBed } from '@angular/core/testing';

import { RestPathService } from './rest-path.service';

describe('RestPathService', () => {
  let service: RestPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
