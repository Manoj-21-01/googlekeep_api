import { TestBed } from '@angular/core/testing';

import { ViewModeServicesService } from './view-mode-services.service';

describe('ViewModeServicesService', () => {
  let service: ViewModeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewModeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
