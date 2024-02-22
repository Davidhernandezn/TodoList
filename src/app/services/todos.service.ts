import { Injectable } from '@angular/core';
import { Todo, TodoStatus } from '../interfaces/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TodosService {
  private todos:Todo[]=[];
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);

  constructor() { 
    this.loadFromLocalStorage();
    this.update();

  }

/**
 * Agregar nueva tarea
 */
  public addTodo(newTodo: Todo){
  this.todos.push(newTodo);
  this.update();
  }

  /**
   * Eliminar tarea
   */
   public removeTodo(todoId: Todo["id"]) {
    this.todos = this.todos.filter((t) => t.id !== todoId);
    this.update();
  }

  /**
   *Consultar tareas
   **/
  public getTodos():   Observable<Todo[]>{
    return this.todosSubject.asObservable();
  } 

  private loadFromLocalStorage(){
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos){
      this.todos = JSON.parse(storedTodos);
    }
  }

  private update(){
    this.todosSubject.next(this.todos);
    this.updateLocalStorage();
  }

  private updateLocalStorage(){
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  /**
   * Actualizar tarea
   */
   updateTodo(id: number, updatedTodo: Todo): void {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          ...updatedTodo
        };
      }
      return todo;
    });
    this.update();
  }


  /**
   * Cambiar estatus de la tarea
   * */
  public changeTodoStatus(todoId: Todo['id'], newStatus: TodoStatus){
  const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
  
    if(todoIndex === -1) return;
    this.todos[todoIndex].status = newStatus;
    this.update();
  }
  
  }