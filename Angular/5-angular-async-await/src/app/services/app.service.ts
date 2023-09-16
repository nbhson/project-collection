import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppApi, Todo } from 'src/apis/app.api';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _appApi: AppApi
  ) { }

  getTodo(id: number) {
    return this._appApi.getTodo(id)
  }

}
