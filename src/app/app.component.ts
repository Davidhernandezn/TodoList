import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'Todo List';
  public todos?: Todo[] = [];
  private todosSubscription: Subscription = new Subscription();

  constructor(private todosService: TodosService) {
    this.todosSubscription = this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }
}
