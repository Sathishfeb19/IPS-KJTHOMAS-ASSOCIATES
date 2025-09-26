import { TestBed } from '@angular/core/testing';

import { IpromiseService } from './ipromise.service';

describe('IpromiseService', () => {
  let service: IpromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
