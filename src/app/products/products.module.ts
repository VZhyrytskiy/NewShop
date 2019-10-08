import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './prosuct-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
