import { Todos } from '../interfaces';

export const TodosInializer: Todos[] = [
  {
    number: 1,
    title: 'Task 1',
    context: 'Context for task 1',
    structure_type: 'Type 1',
    documentation: 'Documentation for task 1',
    business_expectations: 'Business expectations for task 1',
    technical_description: 'Technical description for task 1',
    actions: {
      action1: 'Action 1',
      action2: 'Action 2'
    },
    bdd_testing: [
      {
        scenario1: 'Scenario 1',
        scenario2: 'Scenario 2'
      },
      {
        scenario3: 'Scenario 3',
        scenario4: 'Scenario 4'
      }
    ],
    acceptance_criteria: {
      criteria1: 'Acceptance criteria 1',
      criteria2: 'Acceptance criteria 2'
    },
    status: 'In progress'
  },
  {
    number: 2,
    title: 'Task 2',
    context: 'Context for task 2',
    structure_type: 'Type 2',
    documentation: 'Documentation for task 2',
    business_expectations: 'Business expectations for task 2',
    technical_description: 'Technical description for task 2',
    actions: {
      action1: 'Action 1',
      action2: 'Action 2'
    },
    bdd_testing: [
      {
        scenario1: 'Scenario 1',
        scenario2: 'Scenario 2'
      },
      {
        scenario3: 'Scenario 3',
        scenario4: 'Scenario 4'
      }
    ],
    acceptance_criteria: {
      criteria1: 'Acceptance criteria 1',
      criteria2: 'Acceptance criteria 2'
    },
    status: 'In progress'
  }
];
