export type Contributors = {
  firstname: string;
  lastname: string;
  linkedin_profile: string;
  github_profile: string;
  presentation: string;
  tickets_contribution: string[];
  tickets_validation: string[];
  contribution_start_date: Date;
};

export interface ContributorsListInterface {
  contributorsList: Contributors[],
}
