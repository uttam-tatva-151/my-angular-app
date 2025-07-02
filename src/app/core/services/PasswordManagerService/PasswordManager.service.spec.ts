/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PasswordManagerService } from './PasswordManager.service';

describe('Service: PasswordManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordManagerService]
    });
  });

  it('should ...', inject([PasswordManagerService], (service: PasswordManagerService) => {
    expect(service).toBeTruthy();
  }));
});
