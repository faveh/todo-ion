import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {

  private todos = [];
  private archivedTodos = [];
  
  constructor(public http: Http) {
    console.log('Hello TodoServiceProvider Provider');
  }



  archiveTodo(todoIndex){
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);
  }

  todoToBeEdit(todoIndex){
    return this.todos[todoIndex];
  }

  editTodo(todoIndex, todoText){
    this.todos[todoIndex] = todoText;
  }

  getTodos(){
    return this.todos;
  }

  getArchivedTodos(){
    return this.archivedTodos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }
}
