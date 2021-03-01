import {Currency} from "./Currency";

export class ProductPrice{
    public value: number;
    public currency: Currency;
    
    constructor(value: number, currency: Currency) {
        this.value = value;
        this.currency = currency;
    }
}