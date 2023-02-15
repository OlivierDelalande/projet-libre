type Task = {
  [key: string]: string;
}
type Scenarios = {
  [key: string]: string;
}
type Acceptance = {
  [key: string]: string;
}

export interface TodosListInterface {
  number: number;
  title: string;
  context: string;
  structure_type: string;
  documentation: string;
  business_expectations: string;
  technical_description: string;
  actions: Task;
  bdd_testing: Scenarios[];
  acceptance_criteria: Acceptance;
  status: string;
};
