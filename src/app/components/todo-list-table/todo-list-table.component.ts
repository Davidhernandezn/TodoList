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
  editItem: boolean = true;
  editingTodo: Todo = {
    id: 0, description: '', createdAt: '',
    status: 'not-started'
  };

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

  deleteTodo(todo: Todo) {
    this.todosService.removeTodo(todo.id);
  }

  /**Editar tarea */
  editTodo(todo: Todo) {
    this.editingTodo = { ...todo }; 
    this.editItem = true;
  }

  saveEdit() {
    this.todosService.updateTodo(Number(this.editingTodo.id), this.editingTodo);
    this.editing = false;
    this.editItem = false
  }

  cancelEdit() {
    this.editing = false;
    this.editItem = false
  }
}
