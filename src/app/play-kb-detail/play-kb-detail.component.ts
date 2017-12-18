import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { PlayKeyboardService } from '../play-keyboard.service';

import { Keyboard } from '../keyboard';
import { Key } from '../key';

@Component({
  selector: 'app-play-kb-detail',
  templateUrl: './play-kb-detail.component.html',
  styleUrls: ['./play-kb-detail.component.css']
})
export class PlayKbDetailComponent implements OnInit, OnDestroy {
  keyboard: Keyboard;
  continue_polling = true;

  constructor(
    private route: ActivatedRoute,
    private kbService: PlayKeyboardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getKeyboard();
  }

  ngOnDestroy() {
    this.continue_polling = false;
  }

  getKeyboard(): void {
    const kb_id = this.route.snapshot.paramMap.get('kb_id');

    this.kbService.getKeyboard(kb_id)
      .subscribe(kb => {
        this.keyboard = kb;
        this.pollKeys();
      });
  }

  goBack(): void {
    this.location.back();
  }

  press(key_id: string): void {
    const kb_id = this.route.snapshot.paramMap.get('kb_id');
    const key = this.keyboard.keys.find(k => k.id === key_id);
    this.kbService.pressKey(kb_id, key_id)
      .subscribe(ans => key.enabled = ans.enabled);
  }

  release(key_id: string): void {
    const kb_id = this.route.snapshot.paramMap.get('kb_id');
    const key = this.keyboard.keys.find(k => k.id === key_id);
    this.kbService.releaseKey(kb_id, key_id)
      .subscribe(ans => key.enabled = ans.enabled);
  }

  pollKeys(): void {
    this.kbService.pollKeys(this.keyboard.id)
      .subscribe(keys => {
        if (keys) {
          this.keyboard.keys = keys;
        }
        if (this.continue_polling) {
          this.pollKeys();
        }
      });
  }
}
