import { TestBed } from '@angular/core/testing';

import { WorkingAdvanceService } from './working-advance.service';

describe('WorkingAdvanceService', () => {
  let service: WorkingAdvanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingAdvanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
