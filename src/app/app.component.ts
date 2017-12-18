import { Component } from '@angular/core';

import { ConfigKeyboardService } from './config-keyboard.service';
import { PlayKeyboardService } from './play-keyboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cosyn';

  constructor(
    private confKbService: ConfigKeyboardService,
    private playKbService: PlayKeyboardService,
  ) { }

  resetConfDb(): void {
    this.confKbService.resetConfig().subscribe();
  }

  resetPlayDb(): void {
    this.playKbService.resetPlay().subscribe();
  }
}
