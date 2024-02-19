import { TestBed } from '@angular/core/testing';

import { PickTypeService } from './pick-type.service';

describe('PickTypeService', () => {
  let service: PickTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
