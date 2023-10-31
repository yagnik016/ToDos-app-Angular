import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "Todo 1",
        description: "This is description 1",
        active: true
      },
      {
        sno: 2,
        title: "Todo 2",
        description: "This is description 2",
        active: false
      },
      {
        sno: 3,
        title: "Todo 3",
        description: "This is description 3",
        active: true
      },
      {
        sno: 4,
        title: "Todo 4",
        description: "This is description 4",
        active: false
      }
    ]
  }
deleteTodo(todo:Todo){
  console.log(todo);
  this.todos=this.todos.filter((t)=>t!==todo);
}

}
