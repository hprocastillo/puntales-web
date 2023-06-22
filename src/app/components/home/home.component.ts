import {Component, OnDestroy, OnInit} from '@angular/core';
import {Service} from "../../modules/services/interfaces/service";
import {Subject, takeUntil} from "rxjs";
import {ServiceService} from "../../modules/services/services/service.service";
import {Product} from "../../modules/products/interfaces/product";
import {ProductService} from "../../modules/products/services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  /** VARIABLES **/
  listServices: Service[] = [];
  listProducts: Product[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private serviceService: ServiceService, private productService: ProductService) {
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

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
