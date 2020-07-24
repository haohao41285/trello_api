import { TestBed } from '@angular/core/testing';

import { TrellosService } from './trellos.service';

describe('TrellosService', () => {
  let service: TrellosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrellosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
