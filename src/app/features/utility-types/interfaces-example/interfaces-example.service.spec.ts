import { TestBed } from '@angular/core/testing';

import { InterfacesExampleService } from './interfaces-example.service';

describe('InterfacesExampleService', () => {
  let service: InterfacesExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfacesExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
