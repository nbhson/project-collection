import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoAPI {

  constructor(private _http: HttpClient) {}

  getTodos(): Observable<any[]> {
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
