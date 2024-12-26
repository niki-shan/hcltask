import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  singleData  : any[] = []

  constructor(private _prodService : ProductService, private _router : Router) {

    this._prodService.passDataSub$.subscribe((res) => {
      console.log('Received in CartComponent:', res);
      this.singleData = res // Update the cart data
    });
          
  
   }

  ngOnInit(): void {

  }

  buyProd(id : any){
        this._prodService.buyProd$.next(id)
        this._router.navigate(['/deliver'])

  }



}
