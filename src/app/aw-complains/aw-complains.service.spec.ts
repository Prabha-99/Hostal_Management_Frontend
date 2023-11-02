import { TestBed } from '@angular/core/testing';

import { AwComplainsService } from './aw-complains.service';

describe('AwComplainsService', () => {
  let service: AwComplainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwComplainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
