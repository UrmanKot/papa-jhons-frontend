import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IsBrowserService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
