import { Accordion, AccordionItem } from '../Accordion';
import Section from '../Section';
import Tag from '../Tag';

import skills from '@/data/skills';

function Skills() {
  return (
    <Section title="Skills">
      <Accordion group="skills">
        {skills.map((x) => (
          <AccordionItem key={x.label} label={x.label}>
            <ul className="flex flex-1 flex-wrap gap-2">
              {x.list.map((x) => (
                <li key={x}>
                  <Tag label={x} />
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

export default Skills;
