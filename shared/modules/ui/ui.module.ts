import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '#shared/modules/icon/icons.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconsModule.forRoot(),
  ],
  exports: [
    IconsModule,
  ]
})
export class UIModule {
}
