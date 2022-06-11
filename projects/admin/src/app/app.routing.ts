import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggedInGuard} from '#shared/auth/logged-in.guard';
import {LayoutComponent} from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoggedInGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
