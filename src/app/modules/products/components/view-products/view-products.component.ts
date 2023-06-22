import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit, OnDestroy {
  /** VARIABLES **/
  private unsubscribe$ = new Subject<boolean>();
  product = {} as Product;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.productService.getProductById(params['id'])
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(res => {
            this.product = res;
          });
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
