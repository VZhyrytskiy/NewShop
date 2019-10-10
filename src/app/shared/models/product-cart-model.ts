import { IProductModel } from '../interfaces/product.model';

export class ProductCartModel {
    item: IProductModel;
    amount: number;

    constructor(item: IProductModel, amount: number ) {
        this.item = item;
        this.amount = amount;
    }
}
