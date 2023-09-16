import { Injectable } from '@angular/core';
import { TodoAPI } from 'src/api/todo.api';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private userAPI: TodoAPI) {}

  getAllTodo() {
    return this.userAPI.getTodos();
  }
}
