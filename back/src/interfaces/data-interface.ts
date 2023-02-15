import { AboutInterface } from "./about-interface";
import { ContributorsListInterface } from "./contributors-interface";
import { TodosListInterface } from "./todos-interface";

export interface DataInterface {
  about: AboutInterface,
  contributorsList: ContributorsListInterface[],
  todosList: TodosListInterface[],
}
