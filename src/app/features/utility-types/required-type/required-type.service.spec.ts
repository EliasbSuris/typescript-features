import { TestBed } from '@angular/core/testing';

import { RequiredTypeService } from './required-type.service';

describe('RequiredTypeService', () => {
  let service: RequiredTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequiredTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
