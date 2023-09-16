import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppApi {

    constructor(private http: HttpClient) { }

    async getTodo(id: number) {
      let todo: Todo = {id: 0, userId: 0, title: '', completed: false}
      await this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`).toPromise()
              .then((_todo) => {
                todo = _todo
              })
      return todo
    }
}

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}