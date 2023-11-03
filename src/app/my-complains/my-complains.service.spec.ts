import { TestBed } from '@angular/core/testing';

import { MyComplainsService } from './my-complains.service';

describe('MyComplainsService', () => {
  let service: MyComplainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyComplainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
