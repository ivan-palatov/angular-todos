import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  deleteTodo = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  // Set dynamic classes
  setClasses(todo: Todo) {
    return {
      todo: true,
      'is-complete': this.todo.completed,
    };
  }

  onToggle(todo: Todo) {
    todo.completed = todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(res => {
      console.log(res);
    });
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
