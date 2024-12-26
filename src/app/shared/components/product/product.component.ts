import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 prodData ! :any
 totalcount = 0
  constructor(private _prodService : ProductService, private _router : Router) { }

  ngOnInit(): void {
    this._prodService.getData().subscribe((res) => {
      this.prodData = res;
    });
  }

  addtocart(item: any) {
    this._prodService.addToCart(item); // Add item to the cart
    console.log('Product added to cart:', item);
    this._router.navigate(['/cart']); // Navigate to the CartComponent
    

  }
}


