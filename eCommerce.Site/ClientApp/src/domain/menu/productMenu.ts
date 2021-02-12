import {Product} from "../product/product";

export class ProductMenu{
    public items: Product[]
    
    constructor(items: Product[]) {
        this.items = items;
    }
}