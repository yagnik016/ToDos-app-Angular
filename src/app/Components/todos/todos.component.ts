import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  localItem:string;
  constructor() {
    this.localItem = localStorage.getItem('todos')!;
    if (this.localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  
  deleteTodo(todo: Todo) {
    console.log(todo);
    this.todos = this.todos.filter((t) => t !== todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoAdd(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  todoChechkbox(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
