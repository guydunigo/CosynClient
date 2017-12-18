import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConfigKeyboardService } from '../config-keyboard.service';

import { Keyboard } from '../keyboard';

@Component({
  selector: 'app-keyboard-detail',
  templateUrl: './keyboard-detail.component.html',
  styleUrls: ['./keyboard-detail.component.css']
})
export class KeyboardDetailComponent implements OnInit {
  @Input() keyboard: Keyboard;

  constructor(
    private route: ActivatedRoute,
    private kbService: ConfigKeyboardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getKeyboard();
  }

  getKeyboard(): void {
    const id = this.route.snapshot.paramMap.get('kb_id');

    this.kbService.getKeyboard(id)
      .subscribe(kb => this.keyboard = kb);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.kbService.updateKeyboard(this.keyboard)
      .subscribe(() => this.goBack());
  }

  lock(): void {
    this.kbService.lockKeyboard(this.keyboard.id)
      .subscribe(() => this.goBack());
  }
}
