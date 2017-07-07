import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  constructor() { }

  login(username, password) {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
