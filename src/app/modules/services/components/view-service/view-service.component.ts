import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Service} from "../../interfaces/service";
import {ServiceService} from "../../services/service.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.scss']
})
export class ViewServiceComponent implements OnInit, OnDestroy {
  /** VARIABLES **/
  private unsubscribe$ = new Subject<boolean>();
  service = {} as Service;

  constructor(private activeRoute: ActivatedRoute, private serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.serviceService.getServiceById(params['id'])
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(res => {
            this.service = res;
          });
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
