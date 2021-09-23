import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): boolean {
    const authenticated = this.authService.isAuthenticate();

    if (authenticated) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
