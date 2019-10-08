import { Category } from '../shared/category.enum';
import { IProductModel } from '../shared/interfaces/product.model';

export class ProductModel implements IProductModel  {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    count: number;
    code: number;
    constructor(
        name: string,
        description: string,
        price: number,
        category: Category,
        code: number,
        count?: number,
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.code = code || null;
        this.count = count || 0;
    }
}
