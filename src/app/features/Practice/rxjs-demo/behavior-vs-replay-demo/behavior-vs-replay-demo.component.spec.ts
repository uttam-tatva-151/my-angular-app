/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BehaviorVsReplayDemoComponent } from './behavior-vs-replay-demo.component';

describe('BehaviorVsReplayDemoComponent', () => {
  let component: BehaviorVsReplayDemoComponent;
  let fixture: ComponentFixture<BehaviorVsReplayDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorVsReplayDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorVsReplayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
