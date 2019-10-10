import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';
import { CartItemStyleDirective } from './directives/cart-item-style.directive';

// в shared module не должно быть сервисов, только компоненты
// директивы, пайпы.
// это связано с тем, что если вы подключите такой модуль к лейзи модулю,
// перестанут быть синглетонами
@NgModule({
  imports: [CommonModule],
  // providers: [CartService, ProductsService], // эти  сервисы уже зарегистированы через свои декораторы
  declarations: [CartItemStyleDirective],
  exports: [CartItemStyleDirective]
})
export class SharedModule {}
