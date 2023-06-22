import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {ServicesRoutingModule} from './services-routing.module';
import {ServicesComponent} from './components/services/services.component';
import {ServicesHeaderComponent} from './components/services-header/services-header.component';
import {ViewServiceComponent} from './components/view-service/view-service.component';
import {ServicesFooterComponent} from './components/services-footer/services-footer.component';

@NgModule({
  declarations: [
    ServicesComponent,
    ServicesHeaderComponent,
    ViewServiceComponent,
    ServicesFooterComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    NgOptimizedImage
  ]
})
export class ServicesModule {
}
