export type AimWhat = {
  toExpect: string;
  features: string;
};

export type AimWhy = {
  creation: string;
  helpEntrepreunership: string;
};

export type Aim = {
  entrepreneurs: string;
  itProfessionals: string;
  how: string;
  what: AimWhat;
  why: AimWhy;
}

export type WhyJoin = {
  come: string;
  events: string;
  work: string;
  act: string;
};

export type DevelopmentRules = {
  review: string;
  peer: string;
  estimate: string;
  commit: string;
  passedDueDate: string;
  coverage: string;
  oneFeature: string;
  collaborate: string;
  skills: string;
};

export type ProjectRules = {
  journey: string;
  meetings: string;
  knowledgeTransfer: string;
  stack: string;
  projects: string;
  faq: string;
};

export interface AboutInterface {
  aim: Aim
  why_join: WhyJoin,
  development_rules: DevelopmentRules,
  project_rules: ProjectRules,
}
