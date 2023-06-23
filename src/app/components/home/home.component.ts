import {Component, OnDestroy, OnInit} from '@angular/core';
import {Service} from "../../modules/services/interfaces/service";
import {Subject, takeUntil} from "rxjs";
import {ServiceService} from "../../modules/services/services/service.service";
import {Product} from "../../modules/products/interfaces/product";
import {ProductService} from "../../modules/products/services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../modules/contact/services/contact.service";
import {Contact} from "../../modules/contact/interfaces/contact";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  /** VARIABLES **/
  listServices: Service[] = [];
  listProducts: Product[] = [];
  newContactForm: FormGroup;
  messageAlert: string = '';
  private unsubscribe$ = new Subject<boolean>();

  constructor(
    private serviceService: ServiceService,
    private productService: ProductService,
    private contactService: ContactService,
    private fb: FormBuilder) {

    this.newContactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    /** GET SERVICES **/
    this.serviceService.getServices()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listServices = res;
      });
    /** GET PRODUCTS **/
    this.productService.getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listProducts = res;
      });
  }

  async onSubmit() {
    let newContact: Contact;
    if (this.newContactForm.valid) {
      newContact = this.newContactForm.value;
      newContact.createdAt = Timestamp.fromDate(new Date());
      try {
        await this.contactService.addContact(newContact);
        this.newContactForm.reset();
        this.messageAlert = 'Mensaje enviado!!!';
      } catch (e) {
        console.log(e);
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
