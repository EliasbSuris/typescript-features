import { TestBed } from '@angular/core/testing';

import { ReadonlyTypeService } from './readonly-type.service';

describe('ReadonlyTypeService', () => {
  let service: ReadonlyTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadonlyTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
