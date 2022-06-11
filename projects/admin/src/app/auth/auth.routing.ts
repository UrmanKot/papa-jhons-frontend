import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from '#shared/components/sign-in/sign-in.component';
import {LoggedOutGuard} from '#shared/auth/logged-out.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [LoggedOutGuard],
    children: [
      {path: 'sign-in', component: SignInComponent},
      {path: '**', redirectTo: 'sign-in'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouting { }
