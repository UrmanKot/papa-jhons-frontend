import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRouting } from './products.routing';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardSmallComponent } from './components/product-card-small/product-card-small.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCardSmallComponent,
    ProductsListComponent,
    ProductCategoryComponent,
    ProductCategoriesComponent
  ],
  exports: [
    ProductCategoriesComponent
  ],
  imports: [
    CommonModule,
    ProductsRouting
  ]
})
export class ProductsModule { }
