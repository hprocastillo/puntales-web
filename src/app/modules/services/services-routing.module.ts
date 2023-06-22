import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from "./components/services/services.component";
import {Page404Component} from "../../components/page404/page404.component";
import {ViewServiceComponent} from "./components/view-service/view-service.component";

const routes: Routes = [
  {
    path: '', component: ServicesComponent
  },
  {
    path: 'view/:id', component: ViewServiceComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {
}
