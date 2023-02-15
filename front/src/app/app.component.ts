import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data-service/data.service';
import { DataInterface, AboutInterface, ContributorsListInterface, TodosListInterface } from './interfaces';
import { AboutInitialiser, ContributorsInitialiser, TodosInializer } from './initializers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private data$: Observable<DataInterface> = this.service.getData();
  about: AboutInterface = AboutInitialiser;
  
  contributorsList: ContributorsListInterface[] = ContributorsInitialiser;
  todosList: TodosListInterface[] = TodosInializer;
  
  aim: string = '';
  entrepreneurs: string = '';
  itProfessionals: string = '';
  how: string = '';
  what: string = '';
  toExpect: string = '';
  features: string = '';
  why: string = '';
  creation: string = '';
  helpEntrepreunership: string = '';
  
  why_join: string = '';
  come: string = '';
  events: string = '';
  work: string = '';
  act: string = '';
  
  development_rules: string = '';
  review: string = '';
  peer: string = '';
  estimate: string = '';
  commit: string = '';
  passedDueDate: string = '';
  coverage: string = '';
  oneFeature: string = '';
  collaborate: string = '';
  skills: string = '';
  
  project_rules: string = '';
  journey: string = '';
  meetings: string = '';
  knowledgeTransfer: string = '';
  stack: string = '';
  projects: string = '';
  faq: string = '';

  constructor(private service: DataService) {
    this.data$.subscribe(({ about, contributorsList, todosList }) => {
      this.about = about;
      this.contributorsList = contributorsList;
      this.todosList = todosList;
      
      const { aim, why_join, development_rules, project_rules } = this.about;

      const { entrepreneurs, itProfessionals, how, what, why } = aim;
      const { toExpect, features } = what;
      const { creation, helpEntrepreunership } = why;

      const { come, events, work, act } = why_join;

      const { review, peer, estimate, commit, passedDueDate, coverage, oneFeature, collaborate, skills } = development_rules;

      const { journey, meetings, knowledgeTransfer, stack, projects, faq } = project_rules;
      
      this.entrepreneurs = entrepreneurs;
      this.itProfessionals = itProfessionals;
      this.how = how;
      this.toExpect = toExpect;
      this.features = features;
      this.creation = creation;
      this.helpEntrepreunership = helpEntrepreunership;
      
      this.come = come;
      this.events = events;
      this.work = work;
      this.act = act;
      
      this.review = review;
      this.peer = peer;
      this.estimate = estimate;
      this.commit = commit;
      this.passedDueDate = passedDueDate;
      this.coverage = coverage;
      this.oneFeature = oneFeature;
      this.collaborate = collaborate;
      this.skills = skills;

      this.journey = journey;
      this.meetings = meetings;
      this.knowledgeTransfer = knowledgeTransfer;
      this.stack = stack;
      this.projects = projects;
      this.faq = faq;
    });
  }
}