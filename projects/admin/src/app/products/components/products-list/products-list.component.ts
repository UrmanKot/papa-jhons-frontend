import {Component, OnInit} from '@angular/core';
import {ProductRemoveGQL, ProductsListLoadGQL, ProductsListProductFragment, Test2GQL, TestGQL} from '#shared/graphql';
import {map, switchMap, tap} from 'rxjs';
import {environment} from '../../../../../../public/src/environments/environment';
import {ProductService} from '../../services/product.service';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {ConfirmService} from '#shared/services/confirm.service';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [TuiDestroyService]
})
export class ProductsListComponent implements OnInit {
  API_URL: string = environment.API_URL;
  products: ProductsListProductFragment[] = [];
  isLoading = true;

  deleteSelection: Set<string> = new Set<string>();

  constructor(
    public readonly productService: ProductService,
    private readonly loadGQL: ProductsListLoadGQL,
    private readonly removeGQL: ProductRemoveGQL,
    private readonly destroy$: TuiDestroyService,
    private readonly confirm: ConfirmService,
    private readonly alertService: TuiAlertService,
    private readonly testSub: TestGQL,
    private readonly test2: Test2GQL,
  ) {
  }

  ngOnInit(): void {
    this.loadProducts();
    this.testSub.subscribe({}).pipe(
      map(response => response.data.product)
    ).subscribe(product => {
      this.products.unshift(product);
    });

    this.test2.fetch({where: {name: 'fds'}}).subscribe(res => {
      console.log(res);
    })
  }

  loadProducts() {
    this.loadGQL.watch().valueChanges.pipe(
      map(response => response.data.products),
      map(product => JSON.parse(JSON.stringify(product)))
      // takeUntil(this.destroy$),
    ).subscribe(products => {
      setTimeout(() => {
        this.products = products;
        this.isLoading = false;
      }, 1000);
    });
  }

  onRemoveProduct(product: ProductsListProductFragment) {
    this.confirm.open(`Вы действительно хотите продукт "${product.name}"?`).pipe(
      tap(() => this.deleteSelection.add(product.id)),
      switchMap(() => this.removeGQL.mutate({id: product.id})),
    ).subscribe({
        next: () => {
          setTimeout(() => {
            const index = this.products.findIndex(p => p.id === product.id);
            this.products.splice(index, 1);
            this.deleteSelection.delete(product.id);
            this.alertService.open(
              'Продукт успешно удален!',
              {label: 'Удаление продукта', status: TuiNotification.Success})
              .subscribe();
          }, 1000);
        },
        error: () => {
          this.alertService.open(
            'При удалении произошла ошибка!',
            {label: 'Удаление продукта', status: TuiNotification.Error})
            .subscribe();
        }
      }
    );
  }
}
