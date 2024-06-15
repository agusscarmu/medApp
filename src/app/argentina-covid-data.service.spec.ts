import { TestBed } from '@angular/core/testing';

import { ArgentinaCovidDataService } from './argentina-covid-data.service';

describe('ArgentinaCovidDataService', () => {
  let service: ArgentinaCovidDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArgentinaCovidDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
