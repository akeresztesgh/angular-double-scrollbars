import { TestBed } from '@angular/core/testing';

import { AngularDoubleScrollbarsService } from './angular-double-scrollbars.service';

describe('AngularDoubleScrollbarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDoubleScrollbarsService = TestBed.get(AngularDoubleScrollbarsService);
    expect(service).toBeTruthy();
  });
});
