import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
@Input() todo: Todo;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
constructor() {
  this.todo = {
    sno: 1,
    title: "This is title one",
    description: "This is description 1",
    active: true
  };
}
onclick(todo: Todo) {
this.todoDelete.emit(todo);}
}
