export type SkillGroup = {
  label: string;
  list: string[];
};

export type DateRange = {
  start: number;
  end?: number;
};

export type Project = {
  title: string;
  date: number | DateRange;
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
