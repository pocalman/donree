import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppendComponent } from './test-append.component';

describe('TestAppendComponent', () => {
  let component: TestAppendComponent;
  let fixture: ComponentFixture<TestAppendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAppendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
