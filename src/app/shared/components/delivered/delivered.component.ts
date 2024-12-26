import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';


@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {
 buyId !: any
  constructor(private _prodService: ProductService, private _router : Router, private _route : ActivatedRoute) { }

  ngOnInit(): void {
            
        this._route.params.subscribe((param : Params)=>{
          console.log(param);
          
                    this.buyId = param['id']
        })
  }

}
