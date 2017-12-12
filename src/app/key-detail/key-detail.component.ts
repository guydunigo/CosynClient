import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConfigKeyService } from '../config-key.service';

import { Key } from '../key';

@Component({
  selector: 'app-key-detail',
  templateUrl: './key-detail.component.html',
  styleUrls: ['./key-detail.component.css']
})
export class KeyDetailComponent implements OnInit {
  @Input() key: Key;
  kb_id: string;

  constructor(
    private route: ActivatedRoute,
    private keyService: ConfigKeyService,
    private location: Location
  ) { }

  ngOnInit() {
    this.kb_id = this.route.snapshot.paramMap.get('kb_id');
    this.getKey();
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

  play(): void {
    throw Error('Not implemented !');
  }
}
