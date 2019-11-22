import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    if (this.authService.isUserAuthenticated()) {
      if (state.url === '/register' || state.url === '/login') {
        this.router.navigate(['/home']);
      }

      return true;
    }

    this.router.navigate(['/login']);
  }
}
