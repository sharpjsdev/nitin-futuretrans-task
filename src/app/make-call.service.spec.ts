import { TestBed } from '@angular/core/testing';

import { MakeCallService } from './make-call.service';

describe('MakeCallService', () => {
  let service: MakeCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
