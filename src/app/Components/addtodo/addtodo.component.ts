import { Component, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {
  title:string;
  description:string;
@Output() addTodo: EventEmitter<Todo> = new EventEmitter();
constructor(){
  this.title="";
  this.description=""
}
onSubmit(){
  const todo={
  sno:6,
  title:this.title,
  description:this.description,
  active:true
}
  this.addTodo.emit(todo);
}
}
