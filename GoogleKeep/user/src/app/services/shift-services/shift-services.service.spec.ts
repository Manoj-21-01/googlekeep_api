import { TestBed } from '@angular/core/testing';

import { ShiftServicesService } from './shift-services.service';

describe('ShiftServicesService', () => {
  let service: ShiftServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShiftServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
