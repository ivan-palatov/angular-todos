import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>(`${this.todosUrl}?_limit=10`);
  }
}
