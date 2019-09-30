import { Category } from '../../products/category.enum';
import { Input } from '@angular/core';
import { Subject } from 'rxjs';

export interface IProductModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
}
