import {Injectable} from '@angular/core';
import {AuthGetUserGQL, AuthLogInGQL, LoginUserInput, Tokens} from '#shared/graphql';
import {
  BehaviorSubject, catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable, of, OperatorFunction, pipe, switchMap,
  take,
  tap,
  throwError
} from 'rxjs';
import {TokenService} from '#shared/services/token.service';
import {Router} from '@angular/router';
import {User} from '#shared/classes/user';
import {AuthState} from '#shared/auth/auth-state.enum';

export class AuthStateObject {
  state: AuthState;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  wantedUri: string;

  readonly #onAuth$ = new BehaviorSubject<AuthStateObject>({
    state: AuthState.PENDING,
    user: undefined,
  });

  public onAuth$ = this.#onAuth$.pipe(
    debounceTime(0),
    distinctUntilChanged(),
  );

  public user: User = undefined;
  public user$ = this.onAuth$.pipe(
    filter(state => state.state !== AuthState.PENDING),
    map(state => state.user),
  );

  public isLoggedIn = undefined;

  #watchUser = this.userGQL.watch();
  #fetchUser$: Observable<User>;

  constructor(
    private readonly router: Router,
    private readonly tokenService: TokenService,
    private readonly logInGQL: AuthLogInGQL,
    private readonly userGQL: AuthGetUserGQL,
  ) {
    this.fetchCurrentUser().subscribe();
  }

  public getActualState(): Observable<AuthState> {
    return this.onAuth$.pipe(
      filter(({state}) => state !== AuthState.PENDING),
      take(1),
      map(({state}) => state),
    );
  }

  public resolve(): Observable<AuthState> {
    return this.getActualState();
  }

  private fetchCurrentUser(): Observable<User> {
    let user$: Observable<User>;
    if (!this.tokenService.getAccessToken()) {
      user$ = throwError(new Error('Not Authenticated'));
    } else {
      if (!this.#fetchUser$) this.#fetchUser$ = this.#watchUser.valueChanges.pipe(map(response => response.data.user));
      else setTimeout(() => this.#watchUser.refetch());
      user$ = this.#fetchUser$;
    }

    return user$.pipe(
      debounceTime(0),
      catchError(() => of(null)),
      tap(user => this.setState(user)),
    );
  }

  public logIn(loginUserInput: LoginUserInput): Observable<{
    state: AuthState,
    user: User,
  }> {
    return this.logInGQL.mutate({loginUserInput}).pipe(
      map(res => {
        if (res.data.result.tokens) {
          return res.data.result.tokens;
        } else {
          return null;
        }
      }),
      this.handleToken(),
    );
  }

  private setState(user: User): User {
    this.user = user;
    this.isLoggedIn = Boolean(user);
    this.#onAuth$.next({
      state: this.user ? AuthState.LOGGED_IN : AuthState.LOGGED_OUT,
      user: this.user,
    });
    return user;
  }

  private handleToken(): OperatorFunction<Tokens, AuthStateObject> {
    return pipe(
      tap(tokens => tokens ? this.tokenService.setTokens(tokens) : this.tokenService.removeTokens()),
      switchMap(() => this.fetchCurrentUser()),
      switchMap(() => this.onAuth$),
      take(1),
    );
  }
}
