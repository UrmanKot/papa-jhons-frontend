import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/components/layout/layout.component';
import {LandingComponent} from './landing/components/landing/landing.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: '', component: LandingComponent},
  ]},
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
