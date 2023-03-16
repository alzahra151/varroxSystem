import { TestBed } from '@angular/core/testing';

import { UpdatelanguagService } from './updatelanguag.service';

describe('UpdatelanguagService', () => {
  let service: UpdatelanguagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatelanguagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
