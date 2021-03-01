import {Product} from "../product/product";
import {ProductPrice} from "../product/productPrice";

export class MenuItem {
    public product: Product;
    public price: ProductPrice;
    
    constructor(product: Product, price: ProductPrice) {
        this.product = product;
        this.price = price;
    }
}