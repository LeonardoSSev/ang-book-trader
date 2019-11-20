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
      return true;
    }

    return false;
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
}
