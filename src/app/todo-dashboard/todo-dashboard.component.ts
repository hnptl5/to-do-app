import { TodoService } from 'app/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {

  todos: number; 
  lastUpdate;

  constructor(private todoService :TodoService) {
   
    this.todos = this.todoService.getTodos.length;

    this.todoService.todoAdded.subscribe(() => {
      this.todos++;
      this.lastUpdate = new Date();
    });

    this.todoService.todoRemoved.subscribe(() => {
      this.todos--;
      this.lastUpdate = new Date();
    });

    this.todoService.todoCleared.subscribe(() => {
      this.todos = 0;
      this.lastUpdate = new Date();
    });
 
  }
  clearTodos(){
    this.todoService.clearTodos();
  }

}
