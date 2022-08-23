import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from '../../product';

@Component({
  selector: 'ppj-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  @Input() productCategory: ProductCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
