import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRouting} from './products.routing';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRouting,
    SharedModule,
  ]
})
export class ProductsModule { }
