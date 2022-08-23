import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRouting} from './landing.routing';
import {LandingComponent} from './components/landing/landing.component';
import {ProductsModule} from '../product/products.module';

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    LandingRouting,
    ProductsModule
  ]
})
export class LandingModule {
}
