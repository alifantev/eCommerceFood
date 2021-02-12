import {ProductMenu} from "../menu/productMenu";
import {Product} from "../product/product";
import {Error} from "../common/error";

export class EntityMapper{

    static mapToProductMenu(data: any) : ProductMenu {
        let items = (data.Items as Array<any>).map(item => EntityMapper.mapToProduct(item));
        
        return new ProductMenu(items);
    }
    
    static mapToProduct(data: any) : Product {
        return new Product(data.Id, data.Name, data.Description, data.Category, data.Price, data.ImageUrl);
    }

    static mapToErrors(errors: Array<any>): Error[] {
        return errors.map(error => new Error(error.Key, error.Message));
    }
}