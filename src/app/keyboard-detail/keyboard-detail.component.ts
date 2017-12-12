import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { KeyboardService } from '../keyboard.service';

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
    private kbService: KeyboardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getKeyboard();
  }

  getKeyboard(): void {
    const id = +this.route.snapshot.paramMap.get('id');

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
}
