import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TodosComponent } from './Components/todos/todos.component';
import { TodoItemsComponent } from './Components/todo-items/todo-items.component';
import { AddtodoComponent } from './Components/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    TodoItemsComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
