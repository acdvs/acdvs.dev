export type SkillGroup = {
  label: string;
  list: string[];
};

export type Project = {
  title: string;
  date:
    | number
    | {
        start: number;
        end?: number;
      };
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
