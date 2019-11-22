import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    if (this.checkAccess()) {
      if (state.url === '/register' || state.url === '/login') {
        this.router.navigate(['/home']);
      }

      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

  private checkAccess() {
    if (this.authService.isUserAuthenticated()) {
      return true;
    }

    return false;
  }

  canLoad (route: Route) {
    return this.checkAccess();
  }
}
