import { TestBed } from '@angular/core/testing';

import { SwComplainsService } from './sw-complains.service';

describe('SwComplainsService', () => {
  let service: SwComplainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwComplainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
