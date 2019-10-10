import { Injectable } from '@angular/core';

import { ProductModel } from '../../products/product.model';
import { Category } from '../category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    productList: ProductModel[] = [
      new ProductModel('FirstName', 'FirstDescription', 1, Category.First, 1001, 3),
      new ProductModel('SecondName', 'SecondDescription', 2, Category.Second, 1002, null),
      new ProductModel('ThirdName', 'ThirdDescription', 3, Category.Third, 1003, 5),
      new ProductModel('FourthName', 'FourthDescription', 4, Category.Fourth, 1004)
    ];

  constructor() { }

  getProducts() {
    return this.productList;
  }

  getOne(product: ProductModel): boolean {
    const element = this.productList.find(x => x.code === product.code);
    if (!!element && element.count > 0) {
      element.count--;
      return true;
    }

    return false;
  }

  getSome(product: ProductModel, amount: number): boolean {
    const element = this.productList.find(x => x.code === product.code);
    if (!!element && element.count - amount >= 0) {
      element.count = element.count  - amount;
      return true;
    }

    return false;
  }

  returnOne(product: ProductModel): boolean {
    const element = this.productList.find(x => x.code === product.code);
    if (!!element) {
      element.count++;
      return true;
    }
    return false;
  }

  removeOne(product: ProductModel): boolean {
    const element = this.productList.find(x => x.code === product.code);
    if (!!element) {
      element.count += product.count;
      return true;
    }
    return false;
  }
}
