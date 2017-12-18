import { Component, OnInit } from '@angular/core';

import { PlayKeyboardService } from '../play-keyboard.service';

import { Keyboard } from '../keyboard';

@Component({
  selector: 'app-play-kb-list',
  templateUrl: './play-kb-list.component.html',
  styleUrls: ['./play-kb-list.component.css']
})
export class PlayKbListComponent implements OnInit {
  keyboards: Keyboard[];

  constructor(private kbService: PlayKeyboardService) { }

  ngOnInit() {
    this.getKeyboards();
  }

  getKeyboards(): void {
    this.kbService.getKeyboards()
      .subscribe(kbs => this.keyboards = kbs);
  }

  delete(kb: Keyboard): void {
    this.keyboards = this.keyboards.filter(k => k !== kb);
    this.kbService.deleteKeyboard(kb).subscribe();
  }
}
