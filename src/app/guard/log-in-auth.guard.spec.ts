import { TestBed } from '@angular/core/testing';

import { LogInAuthGuard } from './log-in-auth.guard';

describe('LogInAuthGuard', () => {
  let guard: LogInAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogInAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
