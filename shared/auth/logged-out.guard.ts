import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState } from './auth-state.enum';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.auth.getActualState().pipe(
      map(state => {
        return state === AuthState.LOGGED_OUT ? true : this.router.createUrlTree(this.auth.wantedUri?.split('/') ?? ['/']);
      }),
    );
  }

}
