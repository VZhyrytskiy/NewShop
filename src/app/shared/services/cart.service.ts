import { Injectable } from '@angular/core';
import { Subject, Observable, from  } from 'rxjs';

import { IProductModel } from '../interfaces/product.model';
import { ProductsService } from './products.service';
import { ProductModel } from '../../products/product.model';
import { ProductCartModel } from '../models/product-cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: IProductModel[] = [];
  count$: Observable<any>;
  totalPrice$: Observable<any>;
  private countSubject: Subject<number> = new Subject();
  private totalPriceSubject: Subject<number> = new Subject();

  constructor(private productsService: ProductsService) {
    this.count$ = this.countSubject.asObservable();
    this.totalPrice$ = this.totalPriceSubject.asObservable();
  }

  buyProduct(product: IProductModel) {
      const isSuccessTryGetMore = this.getOneMore(product);
      if (!isSuccessTryGetMore) {
        this.productList.push(new ProductModel(product.name, product.description, product.price, product.category, product.code, 1));
        this.countSubject.next(this.productList.length);
        this.totalPriceSubject.next(this.totalPrice);
      }
  }

  getOneMore(product: IProductModel): boolean {
    const isSuccessTry = this.productsService.getOne(product as ProductModel);

    if (isSuccessTry) {
      const element = this.productList.find(p => p.code === product.code);
      if (!!element) {
        element.count++;
        this.totalPriceSubject.next(this.totalPrice);
        return true;
      }
    }

    return false;
  }

  getSomeMore(product: ProductCartModel): boolean {
    const isSuccessTry = this.productsService.getSome(product.item as ProductModel, product.amount);

    if (isSuccessTry) {
      const element = this.productList.find(p => p.code === product.item.code);
      if (!!element) {
        element.count = element.count * 1  + product.amount * 1;
      } else {
        this.productList.push(new ProductModel(
          product.item.name,
          product.item.description,
          product.item.price,
          product.item.category,
          product.item.code,
          product.amount));
        this.countSubject.next(this.productList.length);
        this.totalPriceSubject.next(this.totalPrice);
        this.countSubject.next(this.productList.length);
      }
      this.totalPriceSubject.next(this.totalPrice);
      return true;
    }

    return false;
  }

  returnOne(product: IProductModel) {
    const element = this.productList.find(x => x.code === product.code);
    if (!!element && element.count > 1) {
      const isSuccessReturn = this.productsService.returnOne(product as ProductModel);
      if (isSuccessReturn) {
        element.count--;
        this.totalPriceSubject.next(this.totalPrice);
        return true;
      }
    }

    return false;
  }

  removeOne(product: IProductModel) {
    this.productsService.removeOne(product as ProductModel);
    const pos = this.productList.indexOf(product);
    this.productList.splice(pos, 1);
    this.countSubject.next(this.productList.length);
    this.totalPriceSubject.next(this.totalPrice);
  }

  getCartProducts() {
    return this.productList;
  }

  get totalPrice(): number {
    return this.productList.map(p => p.count * p.price)
                           .reduce((sum, current) => sum + current);
  }

  get count(): number {
    return this.productList.length;
  }
}
