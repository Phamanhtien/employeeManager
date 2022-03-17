import { TestBed } from '@angular/core/testing';

import { WorkingStaticService } from './working-static.service';

describe('WorkingStaticService', () => {
  let service: WorkingStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
