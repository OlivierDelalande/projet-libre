import { ContributorsListInterface } from "./contributors-interface";
import { TodosListInterface } from "./todos-interface";

export interface DataInterface {
  contributorsList: ContributorsListInterface[],
  todosList: TodosListInterface[],
}
