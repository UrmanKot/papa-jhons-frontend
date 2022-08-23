import { Component, OnInit } from '@angular/core';
import {ProductCategory} from '../../product';

@Component({
  selector: 'ppj-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  productCategories: ProductCategory[] = [
    {title: 'Пицца', icon: 'assets/svg/pizza.svg', type: 'pizza'},
    {title: 'Закуски', icon: 'assets/svg/snacks.svg', type: 'snacks'},
    {title: 'Напитки', icon: 'assets/svg/drinks.svg', type: 'drinks'},
    {title: 'Соусы', icon: 'assets/svg/sauces.svg', type: 'sauces'},
    {title: 'Десерты', icon: 'assets/svg/dessert.svg', type: 'dessert'},
    {title: 'Горячее', icon: 'assets/svg/hot.svg', type: 'hot'},
    {title: 'Комбо', icon: 'assets/svg/combobox.svg', type: 'combobox'},
    {title: 'Веган', icon: 'assets/svg/vegan.svg', type: 'vegan'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
