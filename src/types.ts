export interface Skill {
  label: string;
  list: string[];
}

export interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
  links?: Links;
  fallback?: string;
}

interface Links {
  website?: string;
  source?: string;
  package?: string;
}
