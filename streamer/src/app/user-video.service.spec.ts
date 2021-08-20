import { TestBed } from '@angular/core/testing';

import { UserVideoService } from './user-video.service';

describe('UserVideoService', () => {
  let service: UserVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
