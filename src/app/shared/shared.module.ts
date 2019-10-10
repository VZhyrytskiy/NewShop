import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';
import { CartItemStyleDirective } from './cart-item-style.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CartService, ProductsService],
  declarations: [
    CartItemStyleDirective
  ],
  exports: [
    CartItemStyleDirective
  ]
})

export class SharedModule { }
