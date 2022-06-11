import { Injectable } from '@angular/core';
import { LocalstorageService } from '#shared/services/local-storage.service';
import {Tokens} from '#shared/graphql';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private localStorage: LocalstorageService,
  ) {
  }

  setTokens(tokens: Tokens) {
    this.localStorage.setItem('accessToken', tokens.accessToken);
    this.localStorage.setItem('refreshToken', tokens.refreshToken);
  }

  getAccessToken() {
    if (window?.location) {
      const params = new URLSearchParams(window.location.search);
      if (params.has('accessToken')) return params.get('accessToken');
    }
    return localStorage.getItem('accessToken');
  }

  removeTokens() {
    this.localStorage.removeItem('accessToken');
    this.localStorage.removeItem('refreshToken');
  }

  refreshTokens() {

  }
}
