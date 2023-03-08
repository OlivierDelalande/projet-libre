import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data-service/data.service';
import { DataInterface, ContributorsListInterface } from '../../interfaces';
import { ContributorsInitialiser } from '../../initializers';


@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent {
  private data$: Observable<DataInterface> = this.service.getData();
  
  contributorsList: ContributorsListInterface[] = ContributorsInitialiser;

  constructor(private service: DataService) {
    this.data$.subscribe(({ contributorsList }) => {
      this.contributorsList = contributorsList;
    });
  }
}
