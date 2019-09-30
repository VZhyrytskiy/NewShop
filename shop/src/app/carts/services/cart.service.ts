import { Injectable } from '@angular/core';

import { IProductModel } from '../../shared/interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: IProductModel[] = [];
  constructor() { }

  buyProduct(product: IProductModel) {
    this.productList.push(product);
  }

  getCartProducts() {
    return this.productList;
  }
}
