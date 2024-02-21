import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  
  /**
   * Solo recibe una tarea 
   * */
  @Input() todo? : Todo;
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
  }

  public removeTodo(){
    if(!this.todo)return
    this.todosService.removeTodo(this.todo.id)
  }

}
