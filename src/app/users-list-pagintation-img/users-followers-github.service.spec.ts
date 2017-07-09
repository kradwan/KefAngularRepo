import { TestBed, inject } from '@angular/core/testing';

import { UsersFollowersGithubService } from './users-followers-github.service';

describe('UsersFollowersGithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersFollowersGithubService]
    });
  });

  it('should be created', inject([UsersFollowersGithubService], (service: UsersFollowersGithubService) => {
    expect(service).toBeTruthy();
  }));
});
