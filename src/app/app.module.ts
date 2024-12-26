import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './shared/components/product/product.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { DeliveredComponent } from './shared/components/delivered/delivered.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    DeliveredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
