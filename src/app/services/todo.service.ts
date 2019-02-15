import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({ providedIn: 'root' })
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>(`${this.todosUrl}?_limit=10`);
  }

  toggleCompleted(todo: Todo) {
    return this.http.put<any>(`${this.todosUrl}/${todo.id}`, todo, httpOptions);
  }

  deleteTodo(todo: Todo) {
    return this.http.delete<any>(`${this.todosUrl}/${todo.id}`);
  }
}
