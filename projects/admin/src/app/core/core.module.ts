import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {GraphQLModule} from '#shared/modules/graphql/graphql.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GraphQLModule.forRoot(),
  ],
  providers: [],
})
export class CoreModule {
}
