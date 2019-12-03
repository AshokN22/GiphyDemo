import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class GIFImageService{
    constructor(private http:Http){
        
    }   
    
    getProducts(keyword:string){
        return this.http.get("http://api.giphy.com/v1/gifs/search?api_key=tMViY0sG2vK7xnPZ8cOYbaMZdbHVsTSp&q="+keyword)
    }
}
