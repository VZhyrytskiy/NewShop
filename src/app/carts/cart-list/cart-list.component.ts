import { Component, OnInit, ɵCodegenComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { CartService } from '../../shared/services/cart.service';
import { CartItemModel } from '../cart-item-model';
import { IProductModel } from 'src/app/shared/interfaces/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})

export class CartListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private priceObservable: Subscription = new Subscription();
  count: number;
  totalPrice: number;

  constructor(
    private cartService: CartService) {
     }

  ngOnInit() {
    this.count = 0;
    this.totalPrice = 0;
    this.subscriptions.add(this.cartService.count$.subscribe(item => {
      this.count = item;
    }));
    this.priceObservable.add(this.cartService.totalPrice$.subscribe(item => {
      this.totalPrice = item;
    }));
  }

  onRemove(item: CartItemModel): void {
    this.cartService.removeOne(item as IProductModel);
  }

  get cartList(): CartItemModel[]  {
    const result  =  [];
    const cartProductList = this.cartService.getCartProducts();
    for (const element of cartProductList) {
      result.push(new CartItemModel(element.name,
        element.description,
        element.price,
        element.category,
        element.code,
        element.count));
    }
    return result;
  }

  ngOnDestroy() {
    this.priceObservable.unsubscribe();
    this.subscriptions.unsubscribe();
  }
}
