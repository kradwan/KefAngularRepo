import { ServiceBase } from './base.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService extends ServiceBase {
  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http)
  }
}
