import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

const tareas: Todo[] = [
  {
    id:1,
    description:'Tarea 1',
    createdAt: new Date(),
    status:'empty'
  },
  {
    id:2,
    description:'Tarea 2',
    createdAt: new Date(),
    status:'empty'
  },
  {
    id:3,
    description:'Tarea 3',
    createdAt: new Date(),
    status:'empty'
  }
];


@Injectable({
  providedIn: 'root'
})


export class TodosService {
  private todos:Todo[]=tareas;
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
  *Eliminar tarea */
  public removeTodo(todoId: Todo["id"]){
    this.todos = this.todos.filter((todo) => todo.id != todoId);
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

  }