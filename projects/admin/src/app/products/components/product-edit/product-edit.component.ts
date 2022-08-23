import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, tap} from 'rxjs';
import {
  CreateProductInput,
  ProductCategoryType,
  ProductsEditGetProductGQL,
  ProductsEditSaveProductGQL
} from '#shared/graphql';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../../../public/src/environments/environment';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';

@Component({
  selector: 'admin-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id: string;
  API_URL: string = environment.API_URL;

  isLoading = false;
  isSaving = false;
  imageUrl: string = '';

  form: FormGroup = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    category: [null, Validators.required],
    price: [0, Validators.required],
    count: [1, Validators.required],
    isAddNutritionalValue: [false],
    proteins: [0],
    greases: [0],
    carbs: [0],
    energyValue: [0],
    weight: [0],
    file: [null]
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly saveProductGQL: ProductsEditSaveProductGQL,
    private readonly getProductGQL: ProductsEditGetProductGQL,
    private readonly alertService: TuiAlertService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.id = id),
    ).subscribe();

    if (this.id !== 'new') {
      this.loadProduct();
    }
  }

  loadProduct() {
    this.isLoading = true;
    this.getProductGQL.watch({id: this.id}).valueChanges.pipe(
      map(response => response.data.object),
    ).subscribe(product => {
      this.imageUrl = product.image;
      this.form.patchValue(product);
      this.isLoading = false;
      console.log(this.form.value);
    });
  }

  choiceCategory(category: ProductCategoryType) {
    this.form.get('category').patchValue(category);
  }

  save() {
    if (this.form.valid) {
      this.isSaving = true;

      const createProductInput: CreateProductInput = {
        name: this.form.get('name').value,
        description: this.form.get('description').value,
        category: this.form.get('category').value,
        price: this.form.get('price').value,
        isAddNutritionalValue: this.form.get('isAddNutritionalValue').value,
        count: this.form.get('count').value
      };

      this.saveProductGQL.mutate({
        file: this.form.get('file').value,
        createProductInput: createProductInput,
      }).pipe(
        map(response => response.data.object.greases)
      ).subscribe({
        next: () => {
          setTimeout(() => {
            this.isSaving = false;
            this.router.navigate(['..'], {relativeTo: this.route});
            this.alertService.open(
              'Продукт успешно добавлен!',
              {label: 'Добавление продукта', status: TuiNotification.Success})
              .subscribe();
          }, 1000);
        },
        error: () => {
          this.alertService.open(
            'При добавлении продукта произошла ошибка!',
            {label: 'Добавление продукта', status: TuiNotification.Error},)
            .subscribe();
        }
      });
    }
  }
}
