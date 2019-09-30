import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../../products/product.model';
import { IProductModel } from '../../interfaces/product.model';
import { CartService } from '../../../carts/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;
  @Input()
  isFullModel: boolean;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  onBuy(product: ProductModel) {
    this.cartService.buyProduct(this.product as IProductModel);
    console.log('Товар  ' + this.product.name + ' с кодом: ' +  this.product.code  + '  добавлен корзину.');
  }
}
