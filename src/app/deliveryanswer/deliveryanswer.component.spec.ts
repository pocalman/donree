import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryanswerComponent } from './deliveryanswer.component';

describe('DeliveryanswerComponent', () => {
  let component: DeliveryanswerComponent;
  let fixture: ComponentFixture<DeliveryanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryanswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
