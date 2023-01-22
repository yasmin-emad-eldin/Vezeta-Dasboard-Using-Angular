import { TestBed } from '@angular/core/testing';

import { TablefilterService } from './tablefilter.service';

describe('TablefilterService', () => {
  let service: TablefilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablefilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
