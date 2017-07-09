import { Http } from '@angular/http';
import { ServiceBase } from './../../services/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersFollowersGithubService extends ServiceBase {

  constructor(http: Http) {
    super('https://api.github.com/users/mosh-hamedani/followers', http)
  }

}
