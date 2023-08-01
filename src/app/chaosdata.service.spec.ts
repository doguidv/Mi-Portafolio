import { TestBed } from '@angular/core/testing';

import { ChaosdataService } from './chaosdata.service';

describe('ChaosdataService', () => {
  let service: ChaosdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaosdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
