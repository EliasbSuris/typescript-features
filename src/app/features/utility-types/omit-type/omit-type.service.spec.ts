import { TestBed } from '@angular/core/testing';

import { OmitTypeService } from './omit-type.service';

describe('OmitTypeService', () => {
  let service: OmitTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmitTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
