import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyService } from '../key.service';

import { Key } from '../key';

@Component({
  selector: 'app-keys-list',
  templateUrl: './keys-list.component.html',
  styleUrls: ['./keys-list.component.css']
})
export class KeysListComponent implements OnInit {
  keys: Key[];

  constructor(
    private route: ActivatedRoute,
    private keyService: KeyService
  ) { }

  ngOnInit() {
    this.getKeys();
  }

  getKeys(): void {
    this.keyService.getKeys(this.route.snapshot.paramMap.get('kb_id'))
      .subscribe(kbs => this.keys = kbs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.keyService.addKey(this.route.snapshot.paramMap.get('kb_id'), { name } as Key)
      .subscribe(kb => {
        this.keys.push(kb);
      });
  }

  delete(kb: Key): void {
    this.keys = this.keys.filter(k => k !== kb);
    this.keyService.deleteKey(this.route.snapshot.paramMap.get('kb_id'), kb).subscribe();
  }
}
