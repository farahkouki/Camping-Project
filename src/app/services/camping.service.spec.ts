import { TestBed } from '@angular/core/testing';

import { CampingService } from './camping.service';

describe('CampingService', () => {
  let service: CampingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
