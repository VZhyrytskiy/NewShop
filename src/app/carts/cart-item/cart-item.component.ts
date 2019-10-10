import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { CartItemModel } from '../cart-item-model';
import { CartService } from '../../shared/services/cart.service';
import { IProductModel } from 'src/app/shared/interfaces/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input()
  cartItem: CartItemModel;

  @Output() remove: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  incrCount() {
    this.cartService.getOneMore(this.cartItem as IProductModel);
  }

  decrCount() {
    this.cartService.returnOne(this.cartItem as IProductModel);
  }

  onRemoveItem(): void {
    this.remove.emit(this.cartItem);
  }
}
