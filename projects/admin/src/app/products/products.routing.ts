import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: ':id', component: ProductEditComponent},
  {path: '', pathMatch: 'full', component: ProductsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRouting { }
