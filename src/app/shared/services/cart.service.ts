import { Injectable } from '@angular/core';
import { Subject, Observable, from  } from 'rxjs';

import { IProductModel } from '../interfaces/product.model';
import { ProductsService } from './products.service';
import { ProductModel } from 'src/app/products/product.model';

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
      let isSuccessTryGetMore = this.getOneMore(product);
      if(!isSuccessTryGetMore) {
        this.productList.push(new ProductModel(product.name, product.description, product.price, product.category, product.code, 1));
        this.countSubject.next(this.productList.length);
        this.totalPriceSubject.next(this.getTotalPrice());
      }
  }

  getOneMore(product: IProductModel):Boolean {
    let isSuccessTry = this.productsService.getOne(product as ProductModel);

    if (isSuccessTry) {
      let element = this.productList.find(p => p.code == product.code);
      if (!!element) {
        element.count++;
        this.totalPriceSubject.next(this.getTotalPrice());
        return true;
      }
    }

    return false;
  }

  returnOne(product: IProductModel) {
    let element = this.productList.find(x => x.code === product.code);
    if (!!element && element.count > 1) {
      let isSuccessReturn = this.productsService.returnOne(product as ProductModel);
      if (isSuccessReturn) {
        element.count--;
        this.totalPriceSubject.next(this.getTotalPrice());
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
    this.totalPriceSubject.next(this.getTotalPrice());
  }

  getCartProducts() {
    return this.productList;
  }

  getCount() {
    this.countSubject.next();
  }

  getTotalPrice(): number {
    return this.productList.map(p => p.count * p.price)
                                      .reduce((sum, current) => sum + current);
  }
}
