import { LucideExternalLink } from 'lucide-react';
import projects from '@/data/projects';
import type { Project as TProject } from '@/types';
import { dateIsRange } from '@/utils';
import { SectionHeader, SectionRoot } from '../section';
import Tag from '../tag';

const sortedProjects = projects.toSorted((a: TProject, b: TProject) => {
  const endA = typeof a.date === 'number' ? a.date : a.date.end || Infinity;
  const endB = typeof b.date === 'number' ? b.date : b.date.end || Infinity;
  return endB - endA;
});

function Projects() {
  return (
    <SectionRoot>
      <SectionHeader tag="h2">Projects</SectionHeader>
      <ul className="md:grid md:gap-x-12 md:gap-y-8 md:auto-rows-auto md:grid-cols-2">
        {sortedProjects.map((x) => (
          <Project key={x.title} {...x} />
        ))}
      </ul>
    </SectionRoot>
  );
}

function Project({
  title,
  date,
  description,
  tags,
  links,
  fallback,
}: TProject) {
  const dateEnd = (dateIsRange(date) && date.end) ?? 'Present';
  const parsedDate = dateIsRange(date) ? `${date.start} - ${dateEnd}` : date;

  return (
    <li className="mb-8 md:mb-0">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-foreground mb-0">{title}</h3>
        <span className="text-sm">{parsedDate}</span>
      </div>
      <p className="mb-3">{description}</p>
      <ul
        className="flex flex-wrap mb-5 gap-x-4 gap-y-1"
        aria-label="Built with"
      >
        {tags?.map((tag) => (
          <li key={tag}>
            <Tag label={tag} />
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4">
        {links?.website && <ProjectLink url={links?.website} text="Website" />}
        {links?.source && <ProjectLink url={links?.source} text="Source" />}
        {links?.package && <ProjectLink url={links?.package} text="Package" />}
        {!links && <ProjectLink text={fallback || 'Under construction'} />}
      </div>
    </li>
  );
}

function ProjectLink({ url, text }: { url?: string; text: string }) {
  return url ? (
    <a
      href={url}
      target="_blank"
      className="flex gap-1 items-center text-sm font-bold uppercase text-primary decoration-0 hover:text-primary-light transition-colors"
      rel="noopener"
    >
      {text} <LucideExternalLink size={15} className="-mt-px" />
    </a>
  ) : (
    <p className="text-sm text-foreground-accent font-bold uppercase">{text}</p>
  );
}

export default Projects;
