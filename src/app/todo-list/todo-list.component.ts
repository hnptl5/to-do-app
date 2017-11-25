import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(input){
    if(!input.value)
     return;

    this.todoService.AddTodo(input.value);
    input.value = '';
  }

  removeTodo(t){
    this.todoService.removeTodo(t);
  }

  toggleTodo(t){
    this.todoService.toggleTodo(t);
  }


}
