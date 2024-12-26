import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalcount = 0
  title = 'hcltask';


  constructor(private _prodService : ProductService){
    this._prodService.cartSub$.asObservable().subscribe(res=>{
       this.totalcount = res
       console.log(res);
       
    })



  

  }



  

}
