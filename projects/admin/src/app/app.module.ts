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
import {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';
import {TuiAlertModule, TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {ProductsModule} from './products/products.module';
import {of} from 'rxjs';
import {CONFIRM_PROVIDER} from '#shared/services/confirm.service';
import {PROMPT_PROVIDER} from '#shared/services/prompt.service';

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
    LayoutModule,
    ProductsModule,
  ],
  providers: [
    {provide: ENVIRONMENT, useValue: environment},
    {provide: TUI_LANGUAGE, useValue: of(TUI_RUSSIAN_LANGUAGE)},
    CONFIRM_PROVIDER,
    PROMPT_PROVIDER,
    Apollo
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
