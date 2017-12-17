import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigKeyService } from '../config-key.service';

import { Key } from '../key';

@Component({
  selector: 'app-keys-list',
  templateUrl: './keys-list.component.html',
  styleUrls: ['./keys-list.component.css']
})
export class KeysListComponent implements OnInit {
  keys: Key[];
  kb_id: string;

  constructor(
    private route: ActivatedRoute,
    private keyService: ConfigKeyService
  ) { }

  ngOnInit() {
    this.kb_id = this.route.snapshot.paramMap.get('kb_id');
    this.getKeys();
  }

  getKeys(): void {
    this.keyService.getKeys(this.kb_id)
      .subscribe(kbs => this.keys = kbs);
  }

  add(name: string, src: string): void {
    name = name.trim();
    src = src.trim();
    if (!name) { return; }
    this.keyService.addKey(this.kb_id, { name, src } as Key)
      .subscribe(kb => {
        this.keys.push(kb);
      });
  }

  delete(kb: Key): void {
    this.keys = this.keys.filter(k => k !== kb);
    this.keyService.deleteKey(this.kb_id, kb).subscribe();
  }
}
