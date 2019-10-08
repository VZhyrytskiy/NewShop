import { Category } from '../category.enum';

export interface IProductModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    count: number;
    code: number;
}
