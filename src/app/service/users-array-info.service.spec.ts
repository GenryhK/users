import { TestBed, inject } from '@angular/core/testing';

import { UsersArrayInfoService } from './users-array-info.service';

describe('UsersArrayInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersArrayInfoService]
    });
  });

  it('should be created', inject([UsersArrayInfoService], (service: UsersArrayInfoService) => {
    expect(service).toBeTruthy();
  }));
});
