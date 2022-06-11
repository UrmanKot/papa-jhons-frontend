import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from '#shared/auth/auth.service';
import {AuthState} from '#shared/auth/auth-state.enum';

@Injectable({providedIn: 'root'})
export class LoggedInGuard implements CanActivate {
  private loginPageUri = ['/auth/sign-in'];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean | UrlTree> {
    this.auth.wantedUri = routerState.url;
    return this.auth.getActualState().pipe(
      map(state => {
        return state === AuthState.LOGGED_IN ? true : this.router.createUrlTree(this.loginPageUri);
      }),
    );
  }

}
