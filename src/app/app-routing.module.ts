import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './shared/components/cart/cart.component';
import { ProductComponent } from './shared/components/product/product.component';
import { DeliveredComponent } from './shared/components/delivered/delivered.component';

const routes: Routes = [

    { path: '', component: ProductComponent },
    { path: 'cart', component: CartComponent },
    {path : 'navbar', component : ProductComponent},
    {path : 'cart/deliver/:id', component : DeliveredComponent}
    
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
