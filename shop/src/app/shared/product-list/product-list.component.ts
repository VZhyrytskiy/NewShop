import { Component, OnInit, Input } from '@angular/core';

import { IProductModel } from '../interfaces/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  @Input()
  productList: IProductModel[];
  @Input()
  isFullModel: boolean;

  constructor() { }

  ngOnInit() {
  }

}
