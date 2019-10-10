import { Component, OnInit } from '@angular/core';

import { CartService } from '../../shared/services/cart.service';
import { IProductModel } from '../../shared/interfaces/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  get productList(): IProductModel[]  {
    return this.cartService.getCartProducts();
  }
}
