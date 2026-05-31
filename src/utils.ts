import type { DateRange, Project } from './types';

export function dateIsRange(d: Project['date']): d is DateRange {
  return typeof d === 'object';
}
