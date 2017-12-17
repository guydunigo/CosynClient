import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Keyboard } from './keyboard';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConfigKeyboardService {
  private kbsUrl = 'http://localhost:4300/api/config';

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

  updateKeyboard(keyboard: Keyboard): Observable<any> {
    const url = `${this.kbsUrl}/${keyboard.id}`;
    return this.http.put(url, keyboard, httpOptions).pipe(
      catchError(this.handleError<any>('updateKeyboard'))
    );
  }

  addKeyboard(keyboard: Keyboard): Observable<Keyboard> {
    return this.http.post<Keyboard>(this.kbsUrl, keyboard, httpOptions)
      .pipe(
      catchError(this.handleError<Keyboard>('addKeyboard'))
      );
  }

  deleteKeyboard(keyboard: Keyboard | string): Observable<Keyboard> {
    const id = typeof Keyboard === 'string' ? keyboard as string : (keyboard as Keyboard).id;

    const url = `${this.kbsUrl}/${id}`;

    return this.http.delete<Keyboard>(url, httpOptions).pipe(
      catchError(this.handleError<Keyboard>('deleteKeyboard'))
    );
  }
}
