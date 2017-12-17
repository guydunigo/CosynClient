import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Keyboard } from './keyboard';
import { Key } from './key';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConfigKeyService {
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

  getKbUrl(kb_id: string): string {
    return this.kbsUrl + '/' + kb_id + '/keys';
  }

  getKeys(kb_id: string): Observable<Key[]> {
    return this.http.get<Key[]>(this.getKbUrl(kb_id))
      .pipe(
      catchError(this.handleError('getKeys', []))
      );
  }

  getKey(kb_id: string, id: string): Observable<Key> {
    const url = `${this.getKbUrl(kb_id)}/${id}`;
    return this.http.get<Key>(url).pipe(
      catchError(this.handleError<Key>(`getKey id=${id}`))
    );
  }

  updateKey(kb_id: string, keyboard: Key): Observable<any> {
    return this.http.put(this.getKbUrl(kb_id), keyboard, httpOptions).pipe(
      catchError(this.handleError<any>('updateKey'))
    );
  }

  addKey(kb_id: string, keyboard: Key): Observable<Key> {
    return this.http.post<Key>(this.getKbUrl(kb_id), keyboard, httpOptions)
      .pipe(
      catchError(this.handleError<Key>('addKey'))
      );
  }

  deleteKey(kb_id: string, keyboard: Key | string): Observable<Key> {
    const id = typeof Key === 'string' ? keyboard as string : (keyboard as Key).id;

    const url = `${this.getKbUrl(kb_id)}/${id}`;

    return this.http.delete<Key>(url, httpOptions).pipe(
      catchError(this.handleError<Key>('deleteKey'))
    );
  }
}
