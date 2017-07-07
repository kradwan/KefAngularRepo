import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
  private _authors: any[] = [ "author1", "author2", "author3" ];
  
  constructor() { }

  getAll() { return this._authors };
}
