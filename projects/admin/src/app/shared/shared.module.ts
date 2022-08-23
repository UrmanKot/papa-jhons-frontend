import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  TuiButtonModule,
  TuiLoaderModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';
import {
  TuiAccordionModule, TuiAvatarModule, TuiCheckboxLabeledModule, TuiDataListWrapperModule, TuiInputCountModule,
  TuiInputFileModule,
  TuiInputModule, TuiInputNumberModule, TuiIslandModule,
  TuiSelectModule,
  TuiTextAreaModule
} from '@taiga-ui/kit';
import { ProductCategoryPickerComponent } from './components/product-category-picker/product-category-picker.component';
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';
import {UIModule} from '#shared/modules/ui/ui.module';
import {TuiTablePaginationModule} from '@taiga-ui/addon-table';
import {PromptComponent} from '#shared/components/prompt/prompt.component';
import {ConfirmComponent} from '#shared/components/confirm/confirm.component';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@NgModule({
  declarations: [
    ProductCategoryPickerComponent,
    ConfirmComponent,
    PromptComponent
  ],
  imports: [
    CommonModule,
    UIModule,
    ReactiveFormsModule,
    TuiScrollbarModule,
    TuiAccordionModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextAreaModule,
    TuiInputFileModule,
    TuiTextfieldControllerModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiInputCountModule,
    TuiCheckboxLabeledModule,
    TuiInputNumberModule,
    TuiCurrencyPipeModule,
    TuiAvatarModule,
    TuiSvgModule,
    TuiIslandModule,
    TuiTablePaginationModule,
    TuiLoaderModule,
    PolymorpheusModule,
    FormsModule,
  ],
  exports: [
    UIModule,
    ReactiveFormsModule,
    TuiScrollbarModule,
    TuiAccordionModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextAreaModule,
    TuiInputFileModule,
    TuiTextfieldControllerModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    ProductCategoryPickerComponent,
    TuiInputCountModule,
    TuiCheckboxLabeledModule,
    TuiInputNumberModule,
    TuiCurrencyPipeModule,
    TuiAvatarModule,
    TuiSvgModule,
    TuiIslandModule,
    TuiTablePaginationModule,
    TuiLoaderModule,
  ]
})
export class SharedModule { }
