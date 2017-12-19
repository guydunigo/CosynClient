import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Howl } from 'howler';

import { ConfigKeyService } from '../config-key.service';

import { environment } from '../../environments/environment';

import { Key } from '../key';

@Component({
  selector: 'app-key-detail',
  templateUrl: './key-detail.component.html',
  styleUrls: ['./key-detail.component.css']
})
export class KeyDetailComponent implements OnInit, OnDestroy {
  @Input() key: Key;
  kb_id: string;
  sound: Howl;
  testSoundSucessful = -1;

  constructor(
    private route: ActivatedRoute,
    private keyService: ConfigKeyService,
    private location: Location
  ) { }

  ngOnInit() {
    this.kb_id = this.route.snapshot.paramMap.get('kb_id');
    this.getKey();
  }

  ngOnDestroy() {
    if (this.sound) {
      this.sound.stop();
    }
  }

  getKey(): void {
    const id = this.route.snapshot.paramMap.get('key_id');

    this.keyService.getKey(this.kb_id, id)
      .subscribe(kb => this.key = kb);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.keyService.updateKey(this.kb_id, this.key)
      .subscribe(() => this.goBack());
  }

  testSound(): void {
    if (this.sound) {
      this.sound.stop();
    }

    const me = this;

    this.sound = new Howl({
      src: environment.serverAddr + this.key.src,
      volume: 1,
      onloaderror() { me.testSoundSucessful = 0; },
      onload() { me.testSoundSucessful = 1; }
    });
    this.sound.play();
  }
}
