import { Category } from '../shared/category.enum';

export class CartItemModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    code: number;
    count: number;
    constructor(
      // Используйте public для параметров
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
        this.code = code;
        this.count = count || 1;
    }
}
