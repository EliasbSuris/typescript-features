import { TestBed } from '@angular/core/testing';

import { PartialTypeService } from './partial-type.service';

describe('PartialTypeService', () => {
  let service: PartialTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartialTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
