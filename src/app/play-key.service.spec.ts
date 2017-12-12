import { TestBed, inject } from '@angular/core/testing';

import { PlayKeyService } from './play-key.service';

describe('PlayKeyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayKeyService]
    });
  });

  it('should be created', inject([PlayKeyService], (service: PlayKeyService) => {
    expect(service).toBeTruthy();
  }));
});
