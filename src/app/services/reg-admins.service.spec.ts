import { TestBed } from '@angular/core/testing';

import { RegAdminsService } from './reg-admins.service';

describe('RegAdminsService', () => {
  let service: RegAdminsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegAdminsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
