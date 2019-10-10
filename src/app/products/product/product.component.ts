import { Component, EventEmitter, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';

import { ProductModel } from '../product.model';
import { ProductCartModel } from '../../shared/models/product-cart-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;
  @Output()
  addToCard: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output()
  addsToCard: EventEmitter<ProductCartModel> = new EventEmitter<ProductCartModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddToCart(): void {
    this.addToCard.emit(this.product);
  }

  onAddsToCart(arg: { amount: number; }): void {
    this.addsToCard.emit(new ProductCartModel(this.product, arg.amount));
  }
}
