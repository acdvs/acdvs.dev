import skills from '@/data/skills';
import { Accordion, AccordionItem } from '../inputs/Accordion';
import { SectionHeader, SectionRoot } from '../Section';
import Tag from '../Tag';

function Skills() {
  return (
    <SectionRoot>
      <SectionHeader tag="h2" label="Skills" />
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
    </SectionRoot>
  );
}

export default Skills;
