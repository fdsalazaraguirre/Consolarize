import { TestBed } from '@angular/core/testing';

import { NgxConsolarizeService } from './ngx-consolarize.service';

describe('NgxConsolarizeService', () => {
  let service: NgxConsolarizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxConsolarizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
