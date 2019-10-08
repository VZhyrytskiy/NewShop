import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
