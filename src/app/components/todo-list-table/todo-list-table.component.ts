import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list-table',
  templateUrl: './todo-list-table.component.html',
  styleUrls: ['./todo-list-table.component.css']
})
export class TodoListTableComponent implements OnInit {
  @Input() todoList: Todo[] = [];
  editing: boolean = false;
  isChecked: boolean = false;
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((todos) => {
      this.todoList = todos;
    });
  }

    /**Cambiar estatus de la tarea */
    toggleFunction(todo: Todo, event: any) {
      if (event.target.checked) {
        // Lógica a ejecutar cuando el checkbox está marcado
        todo.isChecked = true;
      } else {
        // Lógica a ejecutar cuando el checkbox está desmarcado
        todo.isChecked = false;
      }
    }
    
  

}
