import { TestBed, inject } from '@angular/core/testing';

import { ConfigKeyboardService } from './config-keyboard.service';

describe('ConfigKeyboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigKeyboardService]
    });
  });

  it('should be created', inject([ConfigKeyboardService], (service: ConfigKeyboardService) => {
    expect(service).toBeTruthy();
  }));
});
