import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';
import { ContactFooterComponent } from './components/contact-footer/contact-footer.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactHeaderComponent,
    ContactFooterComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NgOptimizedImage
  ]
})
export class ContactModule { }
