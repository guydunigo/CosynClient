import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { Keyboard } from './keyboard';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlayKeyboardService {
  private kbsUrl = environment.serverAddr + 'api/play';

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error); // log to console instead

      return of(result as T);
    };
  }

  getKeyboards(): Observable<Keyboard[]> {
    return this.http.get<Keyboard[]>(this.kbsUrl)
      .pipe(
      catchError(this.handleError('getKeyboards', []))
      );
  }

  getKeyboard(id: string): Observable<Keyboard> {
    const url = `${this.kbsUrl}/${id}`;
    return this.http.get<Keyboard>(url).pipe(
      catchError(this.handleError<Keyboard>(`getKeyboard id=${id}`))
    );
  }

  deleteKeyboard(keyboard: Keyboard | string): Observable<Keyboard> {
    const id = typeof Keyboard === 'string' ? keyboard as string : (keyboard as Keyboard).id;

    const url = `${this.kbsUrl}/${id}`;

    return this.http.delete<Keyboard>(url, httpOptions).pipe(
      catchError(this.handleError<Keyboard>('deleteKeyboard'))
    );
  }

  pressKey(keyboard_id: string, key_id: string): Observable<any> {
    const url = `${this.kbsUrl}/${keyboard_id}/keys/${key_id}/press`;
    return this.http.put(url, {}, httpOptions).pipe(
      catchError(this.handleError<any>('pressKey'))
    );
  }

  releaseKey(keyboard_id: string, key_id: string): Observable<any> {
    const url = `${this.kbsUrl}/${keyboard_id}/keys/${key_id}/release`;
    return this.http.put(url, {}, httpOptions).pipe(
      catchError(this.handleError<any>('releaseKey'))
    );
  }

  setKeyVolume(keyboard_id: string, key_id: string, volume: number): Observable<any> {
    const url = `${this.kbsUrl}/${keyboard_id}/keys/${key_id}/volume`;
    return this.http.put(url, { volume }, httpOptions).pipe(
      catchError(this.handleError<any>('setKeyVolume'))
    );
  }

  resetPlay(): Observable<any> {
    const url = `${this.kbsUrl}/reset`;
    return this.http.get(url, httpOptions).pipe(
      catchError(this.handleError<any>('resetConfig'))
    );
  }

  pollKeys(keyboard_id: string): Observable<any> {
    const url = `${this.kbsUrl}/${keyboard_id}/keys_poll`;
    return this.http.get(url, httpOptions).pipe(
      catchError(this.handleError<any>('pollKeys'))
    );
  }
}
