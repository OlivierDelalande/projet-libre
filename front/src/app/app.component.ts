import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services';
import { DataInterface, Contributors, Todos } from './interfaces';
import { ContributorsInitialiser, TodosInializer } from './initializers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private data$: Observable<DataInterface> = this.service.getData();
  
  contributorsList: Contributors[] = ContributorsInitialiser;
  todosList: Todos[] = TodosInializer;

  constructor(private service: DataService) {
    this.data$.subscribe(({ contributorsList, todosList }) => {
      this.contributorsList = contributorsList;
      this.todosList = todosList;
    });
  }
}