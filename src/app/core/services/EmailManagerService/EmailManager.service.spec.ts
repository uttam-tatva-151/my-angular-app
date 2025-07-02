/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { EmailManagerService } from './EmailManager.service';

describe('Service: EmailManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailManagerService]
    });
  });

  it('should ...', inject([EmailManagerService], (service: EmailManagerService) => {
    expect(service).toBeTruthy();
  }));
});
