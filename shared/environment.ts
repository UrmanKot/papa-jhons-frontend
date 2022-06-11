import { InjectionToken } from '@angular/core';

export class Environment {
  production: boolean;
  [prop: string]: any;
}

export const ENVIRONMENT = new InjectionToken<Environment>('Environment Token');
