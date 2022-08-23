import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProductCategoryType} from '#shared/graphql';
import {FormControl} from '@angular/forms';

class ProductCategory {
  label: string;
  value: ProductCategoryType;
}

@Component({
  selector: 'admin-product-category-picker',
  templateUrl: './product-category-picker.component.html',
  styleUrls: ['./product-category-picker.component.scss']
})
export class ProductCategoryPickerComponent implements OnInit, OnChanges {
  @Input() currentCategoryType: ProductCategoryType;
  @Output() choiceCategory: EventEmitter<ProductCategoryType> = new EventEmitter<ProductCategoryType>();

  productCategoryType = ProductCategoryType;

  defaultValue: ProductCategory = {label: 'Не выбрано', value: null};

  productCategories: ProductCategory[] = [
    this.defaultValue,
    {label: 'Пицца', value: this.productCategoryType.Pizza},
    {label: 'Закуски', value: this.productCategoryType.Snacks},
    {label: 'Напитки', value: this.productCategoryType.Drinks},
    {label: 'Соусы', value: this.productCategoryType.Sauces},
    {label: 'Десерты', value: this.productCategoryType.Dessert},
    {label: 'Горячее', value: this.productCategoryType.Hot},
    {label: 'Комбо', value: this.productCategoryType.Combobox},
    {label: 'Веган', value: this.productCategoryType.Vegan},
  ];

  category = new FormControl(this.defaultValue);

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('currentCategoryType' in changes) this.setCategory();
  }

  setCategory() {
    this.category.patchValue(this.productCategories.find(cat => cat.value === this.currentCategoryType));
  }

  onChangeCategory() {
    this.choiceCategory.emit(this.category.value.value);
  }
}
