import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserAuthenticated() : boolean {
    const user = localStorage.getItem('user')

    if (user) {
      return true;
    }

    return false;
  }
}
