import { TestBed } from '@angular/core/testing';

import { GetcommentsService } from './getcomments.service';

describe('GetcommentsService', () => {
  let service: GetcommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
