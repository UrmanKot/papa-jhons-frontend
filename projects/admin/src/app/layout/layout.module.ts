import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {LogoComponent} from './components/logo/logo.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {SharedModule} from '../shared/shared.module';
import {TuiAccordionModule} from '@taiga-ui/kit';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
