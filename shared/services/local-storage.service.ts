import {Injectable} from '@angular/core';
import {IsBrowserService} from '#shared/services/is-browser.service';

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number;
  clear(): void {}
  getItem(key: string): string | null {return undefined};
  key(index: number): string | null {return undefined};
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService implements Storage {
  private storage: Storage;

  length: number;

  [name: string]: any;

  constructor(
    private isBrowserService: IsBrowserService
  ) {
    this.storage = new LocalStorage();
    if (isBrowserService.isBrowser()) {
      this.storage = localStorage;
    }
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }
}
