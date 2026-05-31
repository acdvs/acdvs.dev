import skills from '@/data/skills';
import { Accordion, AccordionItem } from '../inputs/accordion';
import { SectionHeader, SectionRoot } from '../section';
import Tag from '../tag';

function Skills() {
  return (
    <SectionRoot>
      <SectionHeader tag="h2">Skills</SectionHeader>
      <Accordion group="skills">
        {skills.map((x) => (
          <AccordionItem key={x.label} label={x.label}>
            <ul className="flex flex-1 flex-wrap gap-x-4">
              {x.list.map((x) => (
                <li key={x} className="text-sm">
                  <Tag>{x}</Tag>
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionRoot>
  );
}

export default Skills;
