import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Keyboard } from './keyboard';

import { KBS } from './mock-kbs';

let kbs = KBS;

@Injectable()
export class PlayKeyboardService {
  constructor(
    private http: HttpClient
  ) { }

  getKeyboards(): Observable<Keyboard[]> {
    return of(kbs);
  }

  getKeyboard(id: string): Observable<Keyboard> {
    return of(kbs.find(kb => kb.id === id));
  }

  updateKeyboard(keyboard: Keyboard): Observable<any> {
    kbs = kbs.map(kb => kb.id === keyboard.id ? keyboard : kb);
    return of(kbs);
  }

  addKeyboard(keyboard: Keyboard): Observable<Keyboard> {
    keyboard.id = keyboard.name;
    kbs.push(keyboard);
    return of(keyboard);
  }

  deleteKeyboard(keyboard: Keyboard | string): Observable<Keyboard> {
    const id = typeof Keyboard === 'string' ? keyboard as string : (keyboard as Keyboard).id;

    const del = kbs.find(kb => kb.id === id);

    kbs = kbs.filter(kb => kb !== del);
    return of(del);
  }
}
