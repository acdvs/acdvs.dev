export type Skill = {
  label: string;
  list: string[];
};

export type Project = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  links?: Links;
  fallback?: string;
};

type Links = {
  website?: string;
  source?: string;
  package?: string;
};
