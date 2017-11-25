import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TodoService {

  private todos = [];
  public todoAdded = new EventEmitter();
  public todoRemoved = new EventEmitter();
  public todoToggled = new EventEmitter();
  public todoCleared = new EventEmitter();
  constructor() { }


  AddTodo(title){
    var todo = {
      id: this.todos.length + 1, title: title
    };
    this.todos.push(todo);
    this.todoAdded.emit(todo);
  }

  removeTodo(t){
    var index = this.todos.indexOf(t);
    var todo = this.todos.splice(index, 1); 
    this.todoRemoved.emit(todo);
  }

  toggleTodo(t){
    t.isCompleted = !t.isCompleted
    this.todoToggled.emit(t);
  }

  clearTodos(){
    this.todos = [];
    this.todoCleared.emit();    
  
  }

  getTodos(){
    return this.todos;
  }


}
