import { Component, OnInit } from '@angular/core';
import { Todo, TodoStatus } from 'src/app/interfaces/todo.interface';
import { TodosService } from 'src/app/services/todos.service';
import { formOptions } from '../../config/option';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  public newTodoDescription : string = '';
  public newTodoStatus: {value: TodoStatus, name: string} = formOptions[0];
  public statusOptions = formOptions;
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
  }

  public addTodo(){
    const newTodo: Todo = {
    id: Math.random(),
    description: this.newTodoDescription,
    status: this.newTodoStatus.value,
    createdAt: new Date(),
  };

  this.todosService.addTodo(newTodo);

  this.newTodoDescription = '';
  this.newTodoStatus = formOptions[0];
  }
}