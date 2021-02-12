import {ProductCategory} from "./productCategory";

export class Product{
    
    public id: number;
    public name: string;
    public description: string;
    public category: ProductCategory;
    public price: number;
    public imgUrl: string;
    
    constructor(
        
        id: number, 
        name: string,
        description: string,
        category: ProductCategory,
        price: number,
        imageUrl: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.imgUrl = imageUrl;
    }
    
    
    
}