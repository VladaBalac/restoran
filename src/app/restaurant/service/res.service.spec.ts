import { TestBed, inject } from '@angular/core/testing';

import { ResService } from './res.service';

describe('ResService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResService]
    });
  });

  it('should be created', inject([ResService], (service: ResService) => {
    expect(service).toBeTruthy();
  }));
});
