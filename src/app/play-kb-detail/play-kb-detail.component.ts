import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { PlayKeyboardService } from '../play-keyboard.service';

import { environment } from '../../environments/environment';

import { Keyboard } from '../keyboard';
import { Key } from '../key';

import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-play-kb-detail',
  templateUrl: './play-kb-detail.component.html',
  styleUrls: ['./play-kb-detail.component.css']
})
export class PlayKbDetailComponent implements OnInit, OnDestroy {
  keyboard: Keyboard;
  continue_polling = true;
  sounds = new Map<string, Howl>();
  ismute = false;

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
    this.sounds.forEach(s => s.stop());
  }

  getKeyboard(): void {
    const kb_id = this.route.snapshot.paramMap.get('kb_id');

    this.kbService.getKeyboard(kb_id)
      .subscribe(kb => {
        this.keyboard = kb;

        this.updateKeysSounds();

        this.pollKeys();
      });
  }

  updateKeysSounds(): void {
    this.keyboard.keys.forEach(
      key => {
        if (!(this.sounds[key.id])) {
          this.sounds[key.id] = new Howl({
            src: environment.serverAddr + key.src,
            loop: true,
            volume: key.volume,
            autoplay: false
          });
        }

        if (key.enabled && !this.sounds[key.id].playing()) {
          this.sounds[key.id].play();
        }
        else if (!key.enabled && this.sounds[key.id].playing()) {
          this.sounds[key.id].pause();
        }
      });
  }

  mute(): void {
    this.ismute = !this.ismute;
    Howler.mute(this.ismute);
  }

  press(key_id: string): void {
    const kb_id = this.route.snapshot.paramMap.get('kb_id');
    const key = this.keyboard.keys.find(k => k.id === key_id);

    let method;
    if (key.enabled === true) {
      method = 'releaseKey';
    }
    else {
      method = 'pressKey';
    }
    this.kbService[method](kb_id, key_id)
      .subscribe(ans => key.enabled = ans.enabled);
  }

  /*release(key_id: string): void {
    const kb_id = this.route.snapshot.paramMap.get('kb_id');
    const key = this.keyboard.keys.find(k => k.id === key_id);
    this.kbService.releaseKey(kb_id, key_id)
      .subscribe(ans => key.enabled = ans.enabled);
  }*/

  pollKeys(): void {
    this.kbService.pollKeys(this.keyboard.id)
      .subscribe(keys => {
        if (keys) {
          this.keyboard.keys = keys;
          this.updateKeysSounds();
        }
        if (this.continue_polling) {
          this.pollKeys();
        }
      });
  }
}
