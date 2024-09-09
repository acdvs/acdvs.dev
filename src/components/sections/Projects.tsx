import Section from '../Section';
import Project from '../Project';

import { projects } from '@/data';

function Projects() {
  return (
    <Section title="Projects">
      <div className="md:grid md:gap-x-12 md:gap-y-8 md:auto-rows-auto md:grid-cols-2">
        {projects.map((x) => (
          <Project key={x.title} {...x} />
        ))}
        <p className="text-darkTrans1 text-center col-span-2">
          (This website was built with TypeScript, React, Tailwind, and Next.js!)
        </p>
      </div>
    </Section>
  );
}

export default Projects;
