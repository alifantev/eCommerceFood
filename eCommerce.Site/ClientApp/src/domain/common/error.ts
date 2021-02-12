export class Error{
    message:string;
    key:string;

    constructor(key:string, message:string){
        this.key = key;
        this.message = message
    }
}