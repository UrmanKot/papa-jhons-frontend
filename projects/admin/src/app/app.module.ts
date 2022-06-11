import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared/shared.module';
import {Apollo} from 'apollo-angular';
import {CoreModule} from './core/core.module';
import {ENVIRONMENT} from '#shared/environment';
import {environment} from '../../../public/src/environments/environment';
import {TuiAlertModule, TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRouting,
    CoreModule,
    SharedModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
  ],
  providers: [
    {provide: ENVIRONMENT, useValue: environment},
    Apollo
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
