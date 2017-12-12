import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Keyboard } from './keyboard';
import { Key } from './key';

import { KBS } from './mock-kbs';

const kbs = KBS;

@Injectable()
export class KeyService {

  constructor(
    private http: HttpClient
  ) { }

  getKeys(kb_id: string): Observable<Key[]> {
    return of(kbs.find(kb => kb.id === kb_id).keys);
  }

  getKey(kb_id: string, key_id: string): Observable<Key> {
    return of(kbs.find(kb => kb.id === kb_id)
      .keys.find(key => key.id === key_id));
  }

  updateKey(kb_id: string, key: Key): Observable<any> {
    const kb = kbs.find(k => k.id === kb_id);
    kb.keys = kb.keys.map(k => k.id === key.id ? key : k);
    return of(kb.keys);
  }

  addKey(kb_id: string, key: Key): Observable<Key> {
    key.id = key.name;
    const kb = kbs.find(k => k.id === kb_id);
    kb.keys.push(key);
    return of(key);
  }

  deleteKey(kb_id: string, key: Key | string): Observable<Key> {
    const kb = kbs.find(k => k.id === kb_id);
    const id = typeof Key === 'string' ? key as string : (key as Key).id;

    const del = kb.keys.find(k => k.id === id);

    kb.keys = kb.keys.filter(k => k !== del);
    return of(del);
  }

}
