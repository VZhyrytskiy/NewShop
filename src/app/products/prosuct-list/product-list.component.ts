import { Component, OnInit } from '@angular/core';

import { IProductModel } from '../../shared/interfaces/product.model';
import { ProductModel } from '../product.model';
import { CartService } from '../../shared/services/cart.service';
import { ProductsService } from '../../shared/services/products.service';
import { ProductCartModel } from '../../shared/models/product-cart-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {}

  // В чем смысл использовать разные типы и дополнительно приводить с одного типа в другой
  onAddToCart(product: ProductModel): void {
    this.cartService.buyProduct(product as IProductModel);
  }

  onAddsToCart(product: ProductCartModel): void {
    this.cartService.getSomeMore(product);
  }

  get productList(): ProductModel[] {
    const result = [];
    // Такую обработку желательно не писать в компоненте, а выносить в сервисы.
    const productList = this.productsService.getProducts();
    for (const element of productList) {
      result.push(
        new ProductModel(
          element.name,
          element.description,
          element.price,
          element.category,
          element.code,
          element.count
        )
      );
    }
    return result;
  }
}
