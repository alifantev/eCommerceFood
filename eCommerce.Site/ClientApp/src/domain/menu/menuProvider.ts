import {ProductMenu} from "./productMenu";
import {HTTPProvider} from "../common/httpProvider";
import {EntityMapper} from "../common/entityMapper";

export class MenuProvider{
    
    static async GetMenu() : Promise<ProductMenu>{
        
        let response = await HTTPProvider.getJson("api/v1/productMenu");
        
        return new Promise((resolve, reject) => {
            if (response.IsSuccess){
                let menu: ProductMenu = EntityMapper.mapToProductMenu(response.Data);
                
                resolve(menu);
            }
            else{
                reject(EntityMapper.mapToErrors(response.Errors))
            }
        });
    }
}