import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFooterComponent } from './services-footer.component';

describe('ServicesFooterComponent', () => {
  let component: ServicesFooterComponent;
  let fixture: ComponentFixture<ServicesFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesFooterComponent]
    });
    fixture = TestBed.createComponent(ServicesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
