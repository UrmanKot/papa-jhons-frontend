import { Injectable } from '@angular/core';
import {ProductCategoryType} from '#shared/graphql';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductCategory(productCategoryType: ProductCategoryType): string {
    switch (productCategoryType) {
      case ProductCategoryType.Pizza:
        return 'Пицца'
      case ProductCategoryType.Snacks:
        return 'Закуски'
      default:
        return ''
    }
  }
}
