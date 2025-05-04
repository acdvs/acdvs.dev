import { AccordionItem } from '../Accordion';
import Section from '../Section';
import Tag from '../Tag';

import skills from '@/data/skills';

function Skills() {
  return (
    <Section title="Skills">
      {skills.map((x) => (
        <AccordionItem
          key={x.label}
          label={x.label}
          className="flex flex-1 flex-wrap gap-2"
        >
          {x.list.map((x) => (
            <Tag key={x} label={x} />
          ))}
        </AccordionItem>
      ))}
    </Section>
  );
}

export default Skills;
