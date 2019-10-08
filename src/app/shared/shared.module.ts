import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CartService, ProductsService]
})

export class SharedModule { }
