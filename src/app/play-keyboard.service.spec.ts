import { TestBed, inject } from '@angular/core/testing';

import { PlayKeyboardService } from './play-keyboard.service';

describe('PlayKeyboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayKeyboardService]
    });
  });

  it('should be created', inject([PlayKeyboardService], (service: PlayKeyboardService) => {
    expect(service).toBeTruthy();
  }));
});
