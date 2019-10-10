import { Component, OnInit } from '@angular/core';

import { IProductModel } from '../../shared/interfaces/product.model';
import { ProductModel } from '../product.model';
import { CartService } from '../../shared/services/cart.service';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) {
  }

  ngOnInit() {
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.buyProduct(product as IProductModel);
  }

  get productList(): ProductModel[]  {
    let result  =  [];
    let productList = this.productsService.getProducts();
    for (let index = 0; index < productList.length; index++) {
      const element = productList[index];
      result.push(new ProductModel(element.name,
        element.description,
        element.price,
        element.category,
        element.code,
        element.count));
    }
    return result;
  }
}
