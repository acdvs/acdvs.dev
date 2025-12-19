export type SkillGroup = {
  label: string;
  list: string[];
};

export type ProjectDate =
  | number
  | {
      start: number;
      end?: number;
    };

export type Project = {
  title: string;
  date: ProjectDate;
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
