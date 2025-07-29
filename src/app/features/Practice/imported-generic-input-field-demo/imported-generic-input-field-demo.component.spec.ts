/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImportedGenericInputFieldDemoComponent } from './imported-generic-input-field-demo.component';

describe('ImportedGenericInputFieldDemoComponent', () => {
  let component: ImportedGenericInputFieldDemoComponent;
  let fixture: ComponentFixture<ImportedGenericInputFieldDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportedGenericInputFieldDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedGenericInputFieldDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
