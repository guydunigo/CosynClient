import { Component, OnInit } from '@angular/core';

import { KeyboardService } from '../keyboard.service';

import { Keyboard } from '../keyboard';

@Component({
  selector: 'app-keyboards-list',
  templateUrl: './keyboards-list.component.html',
  styleUrls: ['./keyboards-list.component.css']
})
export class KeyboardsListComponent implements OnInit {
  keyboards: Keyboard[];

  constructor(private kbService: KeyboardService) { }

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
