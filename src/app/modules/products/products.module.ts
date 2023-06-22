import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFooterComponent } from './components/products-footer/products-footer.component';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFooterComponent,
    ProductsHeaderComponent,
    ViewProductsComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        NgOptimizedImage
    ]
})
export class ProductsModule { }
