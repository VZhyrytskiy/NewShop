import { Component, EventEmitter, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';

import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;
  @Output()
  addToCard: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddToCart(): void {
    this.addToCard.emit(this.product);
  }
}
