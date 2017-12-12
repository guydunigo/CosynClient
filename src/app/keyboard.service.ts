import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Keyboard } from './keyboard';

import { KBS } from './mock-kbs';

let kbs = KBS;

@Injectable()
export class KeyboardService {

  constructor(
    private http: HttpClient
  ) { }

  getKeyboards(): Observable<Keyboard[]> {
    return of(kbs);
  }

  getKeyboard(id: number): Observable<Keyboard> {
    return of(kbs.find(kb => kb.id === id));
  }

  updateKeyboard(keyboard: Keyboard): Observable<any> {
    return of(kbs.map(kb => kb.id === keyboard.id ? keyboard : kb));
  }

  addKeyboard(keyboard: Keyboard): Observable<Keyboard> {
    KBS.push(keyboard);
    return of(keyboard);
  }

  deleteKeyboard(keyboard: Keyboard | number): Observable<Keyboard> {
    const id = typeof Keyboard === 'number' ? keyboard as number : (keyboard as Keyboard).id;

    const del = KBS.find(kb => kb.id === id);

    kbs = KBS.filter(kb => kb !== del);
    return of(del);
  }
}
