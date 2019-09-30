import { Injectable } from '@angular/core';

import { ProductModel } from '../product.model';
import { Category } from '../category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    productList: ProductModel[] = [
      new ProductModel('FirstName', 'FirstDescription', 1, Category.First, true, 1001),
      new ProductModel('SecondName', 'SecondDescription', 2, Category.Second, true, 1002),
      new ProductModel('ThirdName', 'ThirdDescription', 3, Category.Third, false, 1003),
      new ProductModel('FourthName', 'FourthDescription', 4, Category.Fourth, false)
    ];

  constructor() { }

  getProducts() {
    return this.productList;
  }
}
