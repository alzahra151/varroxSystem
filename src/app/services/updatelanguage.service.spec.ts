import { TestBed } from '@angular/core/testing';

import { UpdatelanguageService } from './updatelanguage.service';

describe('UpdatelanguageService', () => {
  let service: UpdatelanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatelanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
