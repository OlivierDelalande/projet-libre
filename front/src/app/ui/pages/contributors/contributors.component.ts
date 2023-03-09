import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContributorsService } from '../../../services';
import { ContributorsListInterface, Contributors } from '../../../interfaces';
import { ContributorsInitialiser } from '../../../initializers';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent {
  private data$: Observable<ContributorsListInterface> = this.service.getContributors();
  
  contributorsList: Contributors[] = ContributorsInitialiser;

  constructor(private service: ContributorsService) {
    this.data$.subscribe(({ contributorsList }) => {
      this.contributorsList = contributorsList;
    });
  }
}
