import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ProductComponent } from './shared/product-list/product/product.component';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { CartComponent } from './carts/cart/cart.component';
import { ProductViewComponent } from './products/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
