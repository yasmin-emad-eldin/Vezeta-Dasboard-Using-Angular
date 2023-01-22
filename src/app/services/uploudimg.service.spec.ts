import { TestBed } from '@angular/core/testing';

import { UploudimgService } from './uploudimg.service';

describe('UploudimgService', () => {
  let service: UploudimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploudimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
