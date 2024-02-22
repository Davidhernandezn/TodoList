import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list-table',
  templateUrl: './todo-list-table.component.html',
  styleUrls: ['./todo-list-table.component.css'],
})

export class TodoListTableComponent implements OnInit {
  @Input() todoList: Todo[] = [];
  editing: boolean = false;
  isChecked: boolean = false;
  editItem: boolean = true;
  editBtn: boolean = true;
  searchText: string = '';
  editingTodo: Todo = {
    id: 0,
    description: '',
    createdAt: '',
    status: 'not-started',
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
      todo.isChecked = true;
    } else {
      todo.isChecked = false;
    }
  }

  /**Borrar Tarea */
  deleteTodo(todo: Todo) {
    this.todosService.removeTodo(todo.id);
  }

  /**Habilitat Editar tarea */
  editTodo(todo: Todo) {
    this.editingTodo = { ...todo };
    this.editItem = true;
    this.editBtn = false;
  }
  
  /**Guardar edicion de tarea */
  saveEdit() {
    this.todosService.updateTodo(Number(this.editingTodo.id), this.editingTodo);
    this.editing = false;
    this.editItem = false;
    this.editBtn = true;
  }

  /**Metodos para guardar o cancelar mientras se esta editando tarea*/
  cancelEdit() {
    this.editing = false;
    this.editItem = false;
    this.editBtn = true;
  }

  search() {
    if (!this.searchText) {
      return this.todoList;
    }
    return this.todoList.filter((todo) =>
      todo.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
