import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data-service/data.service';
import { DataInterface, ContributorsListInterface, TodosListInterface } from './interfaces';
import { ContributorsInitialiser, TodosInializer } from './initializers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private data$: Observable<DataInterface> = this.service.getData();
  
  contributorsList: ContributorsListInterface[] = ContributorsInitialiser;
  todosList: TodosListInterface[] = TodosInializer;

  constructor(private service: DataService) {
    this.data$.subscribe(({ contributorsList, todosList }) => {
      this.contributorsList = contributorsList;
      this.todosList = todosList;
    });
  }
}