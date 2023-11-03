import { TestBed } from '@angular/core/testing';

import { DeanComplainsService } from './dean-complains.service';

describe('DeanComplainsService', () => {
  let service: DeanComplainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeanComplainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
