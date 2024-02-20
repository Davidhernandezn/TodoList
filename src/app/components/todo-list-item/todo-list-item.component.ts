import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';

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
  constructor() { }

  ngOnInit(): void {
  }

}
