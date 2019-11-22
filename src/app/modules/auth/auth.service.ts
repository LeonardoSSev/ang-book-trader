import { Injectable, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAuthenticatedEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  isUserAuthenticated() : boolean {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.userAuthenticatedEmitter.emit(true);

      return true;
    }

    this.userAuthenticatedEmitter.emit(false);

    return false;
  }

  doRegister(user: User) {
    if (user.email !== '' && user.email !== '' && user.password !== '') {
      let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
      registeredUsers.push(user);

      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

      this.userAuthenticatedEmitter.emit(true);

      this.router.navigate(['profile']);

      return;
    }

    this.userAuthenticatedEmitter.emit(false);
  }

  doLogin(user: User) {
    if (user.email !== '' && user.password !== '') {
      localStorage.setItem('user', JSON.stringify(user));

      this.userAuthenticatedEmitter.emit(true);

      this.router.navigate(['profile']);

      return;
    }

    this.userAuthenticatedEmitter.emit(false);
  }

  doLogout() {
    localStorage.removeItem('user');

    this.userAuthenticatedEmitter.emit(false);
    this.router.navigate(['login']);
  }
}
