import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TodosComponent } from './Components/todos/todos.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AddtodoComponent } from './Components/addtodo/addtodo.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
