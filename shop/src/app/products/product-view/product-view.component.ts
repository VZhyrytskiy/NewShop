import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass']
})
export class ProductViewComponent implements OnInit {

  productList: ProductModel[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productList = this.productsService.getProducts();
  }

}
