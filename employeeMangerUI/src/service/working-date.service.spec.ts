import { TestBed } from '@angular/core/testing';

import { WorkingDateService } from './working-date.service';

describe('WorkingDateService', () => {
  let service: WorkingDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
