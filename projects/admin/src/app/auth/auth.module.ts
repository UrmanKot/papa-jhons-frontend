import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRouting} from './auth.routing';
import {SignInComponent} from '#shared/components/sign-in/sign-in.component';
import {SignUpComponent} from '#shared/components/sign-up/sign-up.component';
import {RestorePasswordComponent} from '#shared/components/restore-password/restore-password.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    RestorePasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRouting,
    SharedModule
  ]
})
export class AuthModule {
}
