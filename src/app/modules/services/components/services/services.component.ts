import {Component, OnDestroy, OnInit} from '@angular/core';
import {Service} from "../../interfaces/service";
import {ServiceService} from "../../services/service.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit, OnDestroy {
  /** VARIABLES **/
  listServices: Service[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.serviceService.getServices()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listServices = res;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
