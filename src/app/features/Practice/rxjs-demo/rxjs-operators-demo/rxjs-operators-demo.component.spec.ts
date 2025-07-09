/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperatorsDemoComponent } from './rxjs-operators-demo.component';

describe('RxjsOperatorsDemoComponent', () => {
  let component: RxjsOperatorsDemoComponent;
  let fixture: ComponentFixture<RxjsOperatorsDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsOperatorsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOperatorsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
