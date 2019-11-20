import { Injectable, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAuthenticatedEmitter: EventEmitter<boolean>;

  constructor() { }

  isUserAuthenticated() : boolean {
    const user = localStorage.getItem('user')

    if (user) {
      return true;
    }

    return false;
  }

  doLogin(user: User) {
    if (user.email !== '' && user.password !== '') {
      localStorage.setItem('user', JSON.stringify(user));
      this.userAuthenticatedEmitter.emit(true);

      return;
    }

    this.userAuthenticatedEmitter.emit(false);
  }
}
