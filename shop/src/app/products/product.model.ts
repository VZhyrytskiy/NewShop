import { Category } from './category.enum';
import { IProductModel } from '../shared/interfaces/product.model';

export class ProductModel implements IProductModel  {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    constructor(
        name: string,
        description: string,
        price: number,
        category: Category,
        isAvailable: boolean,
        public code?: number
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.isAvailable = isAvailable;
        this.code = code || null;
    }
}
