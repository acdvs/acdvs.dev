import clsx from 'clsx';

import Section from '../Section';
import Tag from '../Tag';
import projects from '@/data/projects';
import { Project as TProject } from '@/types';

function Projects() {
  return (
    <Section title="Projects">
      <div className="md:grid md:gap-x-12 md:gap-y-8 md:auto-rows-auto md:grid-cols-2">
        {projects.map((x) => (
          <Project key={x.title} {...x} />
        ))}
      </div>
    </Section>
  );
}

function Project({ title, date, description, tags, links, fallback }: TProject) {
  return (
    <div className="mb-8 md:mb-0">
      <div className="flex justify-between items-center mb-3">
        <h3 className="mb-0">{title}</h3>
        <span className="text-zinc-100/50">{date}</span>
      </div>
      <p className="mb-3">{description}</p>
      <div className="flex flex-wrap mb-3 gap-x-1 gap-y-2">
        {tags?.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {links?.website && <ProjectLink url={links?.website} text="Website" />}
        {links?.source && <ProjectLink url={links?.source} text="Source" />}
        {links?.package && <ProjectLink url={links?.package} text="Package" />}
        {!links && <ProjectLink text={fallback || 'Under construction'} />}
      </div>
    </div>
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
