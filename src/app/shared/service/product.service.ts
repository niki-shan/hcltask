import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl$ = 'http://localhost:3000/products'
passDataSub$ = new BehaviorSubject<any[]>([]); // BehaviorSubject to store cart data
cartSub$ = new BehaviorSubject<number>(0);
buyProd$ = new Subject<any>() 
  constructor(private _http : HttpClient) {
  
   }

 
  getData(){
    return this._http.get(this.baseUrl$)
  }

  addToCart(item: any) {
    const currentData = this.passDataSub$.value;
    this.passDataSub$.next([...currentData, item]);
    this.cartSub$.next(currentData.length + 1); // Update the cart count
   
  }

  singleData(id : any){
    let single = `${this.baseUrl$}/${id}`
    return this._http.get(single)
  }

}
