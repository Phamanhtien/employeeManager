import { TestBed } from '@angular/core/testing';

import { TeamListService } from './team.service';

describe('TeamService', () => {
  let service: TeamListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
