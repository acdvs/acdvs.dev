import projects from '@/data/projects';
import type { ProjectDate, Project as TProject } from '@/types';
import Section from '../Section';
import Tag from '../Tag';

const sortedProjects = projects.toSorted((a, b) => {
  const dateA = a.date as ProjectDate;
  const dateB = b.date as ProjectDate;

  const endA = typeof dateA === 'number' ? dateA : dateA.end || Infinity;
  const endB = typeof dateB === 'number' ? dateB : dateB.end || Infinity;

  return endB - endA;
});

function Projects() {
  return (
    <Section title="Projects">
      <ul className="md:grid md:gap-x-12 md:gap-y-8 md:auto-rows-auto md:grid-cols-2">
        {sortedProjects.map((x) => (
          <Project key={x.title} {...x} />
        ))}
      </ul>
    </Section>
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
  const dateEnd =
    typeof date === 'object' && 'end' in date ? date.end : 'Present';
  const parsedDate =
    typeof date === 'number' ? date : `${date.start} - ${dateEnd}`;

  return (
    <li className="mb-8 md:mb-0">
      <div className="flex justify-between items-center mb-3">
        <h3 className="mb-0">{title}</h3>
        <span className="text-zinc-100/50">{parsedDate}</span>
      </div>
      <p className="mb-3">{description}</p>
      <ul
        className="flex flex-wrap mb-3 gap-x-1 gap-y-2"
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
    <a href={url} target="_blank" className="font-bold uppercase">
      {text}
    </a>
  ) : (
    <p className="text-zinc-100/40 font-bold uppercase mr-6 mb-2">{text}</p>
  );
}

export default Projects;
