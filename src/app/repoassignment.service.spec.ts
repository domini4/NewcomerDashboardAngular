import { TestBed } from '@angular/core/testing';

import { RepoassignmentService } from './repoassignment.service';

describe('RepoassignmentService', () => {
  let service: RepoassignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoassignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
