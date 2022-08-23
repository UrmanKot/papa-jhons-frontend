import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER} from '@taiga-ui/core';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {Apollo} from 'apollo-angular';
import {RouterModule} from '@angular/router';
import {ENVIRONMENT} from '#shared/environment';
import {environment} from '../environments/environment';
import {LayoutModule} from './layout/layout.module';
import {LandingModule} from './landing/landing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouting,
    CoreModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
    LayoutModule,
    LandingModule,
  ],
  providers: [
    {provide: ENVIRONMENT, useValue: environment},
    Apollo,
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
