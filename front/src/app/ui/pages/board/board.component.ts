import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardService } from '../../../services';
import { Todos, TodosListInterface } from '../../../interfaces';
import { TodosInializer } from '../../../initializers';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  private data$: Observable<TodosListInterface> = this.service.getTodos();
  
  todosList: Todos[] = TodosInializer;

  constructor(private service: BoardService) {
    this.data$.subscribe(({ todosList }) => {
      this.todosList = todosList;
      console.log('todos from todos', todosList)
    });
  }
}
