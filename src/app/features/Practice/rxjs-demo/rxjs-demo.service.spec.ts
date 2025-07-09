/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RxjsDemoService } from './rxjs-demo.service';

describe('Service: RxjsDemo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsDemoService]
    });
  });

  it('should ...', inject([RxjsDemoService], (service: RxjsDemoService) => {
    expect(service).toBeTruthy();
  }));
});
