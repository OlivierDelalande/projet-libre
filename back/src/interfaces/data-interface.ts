import { Contributors } from "./contributors-interface";
import { Todos } from "./todos-interface";

export interface DataInterface {
  contributorsList: Contributors[],
  todosList: Todos[],
}
