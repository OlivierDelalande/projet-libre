export interface Contributor {
  firstname: string;
  lastname: string;
  linkedin_profile: string;
  github_profile: string;
  presentation: string;
  tickets_contribution: string[];
  tickets_validation: string[];
  contribution_start_date: Date;
}

export const ContributorsInitialiser: Contributor[] = [
  {
    firstname: '',
    lastname: '',
    linkedin_profile: '',
    github_profile: '',
    presentation: '',
    tickets_contribution: ['', ''],
    tickets_validation: ['', ''],
    contribution_start_date: new Date('01-01-1970'),
  },
  {
    firstname: '',
    lastname: '',
    linkedin_profile: '',
    github_profile: '',
    presentation: '',
    tickets_contribution: ['', ''],
    tickets_validation: ['', ''],
    contribution_start_date: new Date('01-01-1970'),
  }
];