/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalToasterService } from './GlobalToaster.service';

describe('Service: GlobalToaster', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalToasterService]
    });
  });

  it('should ...', inject([GlobalToasterService], (service: GlobalToasterService) => {
    expect(service).toBeTruthy();
  }));
});
