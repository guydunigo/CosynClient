import { TestBed, inject } from '@angular/core/testing';

import { ConfigKeyService } from './config-key.service';

describe('ConfigKeyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigKeyService]
    });
  });

  it('should be created', inject([ConfigKeyService], (service: ConfigKeyService) => {
    expect(service).toBeTruthy();
  }));
});
