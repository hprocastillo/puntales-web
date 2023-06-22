import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {ViewProductsComponent} from "./components/view-products/view-products.component";
import {Page404Component} from "../../components/page404/page404.component";

const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'view/:id', component: ViewProductsComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
