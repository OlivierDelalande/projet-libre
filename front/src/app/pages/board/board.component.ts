import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data-service/data.service';
import { DataInterface, TodosListInterface } from '../../interfaces';
import { TodosInializer } from '../../initializers';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  private data$: Observable<DataInterface> = this.service.getData();
  
  todosList: TodosListInterface[] = TodosInializer;

  constructor(private service: DataService) {
    this.data$.subscribe(({ todosList }) => {
      this.todosList = todosList;
    });
  }
}
