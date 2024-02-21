import { Component, Input, OnInit } from '@angular/core';
import { formOptions } from 'src/app/config/option';
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
  editing: boolean = false;
  isChecked: boolean = false;
  public statusOptions = formOptions;
  completedCount: number = 0;
  inProgressCount: number = 0;


  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
  }

  public removeTodo(){
    if(!this.todo)return
    this.todosService.removeTodo(this.todo.id)
  }

  editTodo() {
    this.editing = true;
  }

  saveTodo() {
    this.editing = false;
    if(!this.todo) return;
    this.todosService.updateTodo(+this.todo.id, this.todo);
  }



  /**Cambiar estatus de la tarea */
  toggleFunction(event: any) {
    if (event.target.checked) {
      // Lógica a ejecutar cuando el checkbox está marcado
      this.isChecked = true;
    } else {
      // Lógica a ejecutar cuando el checkbox está desmarcado
      this.isChecked = false;
    }
  }


//  toggleFunction(event: any) {
//     this.isChecked = event.target.checked;
//   //  this.todo.status = this.isChecked ? 'finished' : 'in-progress';
//    // this.todosService.updateTodo(+this.todo.id, this.todo);

//     if (this.isChecked) {
//       this.completedCount++;
//       this.inProgressCount--;
//     } else {
//       this.completedCount--;
//       this.inProgressCount++;
//     }
//   }
}
