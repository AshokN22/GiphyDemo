import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { GIFImageService } from './GIFImages.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  
  title = 'GiphyDemo';
  count:number;
  images:{title:string,location:string}[]=[];
  srch : string[];
  totalPage:number;
  pageNum:number;
  constructor(private gserv:GIFImageService){
    
  }

  ngOnInit(): void {
    
  }
  

  Search(tgr){
    this.images = [];
    for(var i = 0;i<tgr.children[0].children.length-1;i++){
      console.log(tgr.children[0].children[i].innerText);
      this.gserv.getProducts(tgr.children[0].children[i].innerText).subscribe(
        (response)=>{
            console.log(response.json().data);
            var imgData = response.json().data;
            for(var img of imgData){
              this.images.push({title:img.title,location:img.images.downsized.url});
            }
            this.totalPage = Math.ceil(this.images.length/9.0);
            this.pageNum = 1;
        },
        (err)=>{
          console.log(err);
        }
      );
    }
  }
}
