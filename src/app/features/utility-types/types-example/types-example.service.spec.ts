import { TestBed } from '@angular/core/testing';

import { TypesExampleService } from './types-example.service';

describe('TypesExampleService', () => {
  let service: TypesExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
