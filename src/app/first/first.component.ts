import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  suppliers: string[];
  metadata: any;

  constructor() { }

  ngOnInit() {
    this.name = 'ProductName';
    this.description = 'Product description';
    this.price = 6;
    this.category = Category.Third;
    this.isAvailable = true;
    this.suppliers = [ 'First Supplier', 'Second Supplier'] ;
    this.metadata = [ Category.Fourth, 2];
  }

}
