import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion';
import Section from '../Section';
import Tag from '../Tag';

import { skills } from '@/data';

function Skills() {
  return (
    <Section title="Skills">
      {skills.map((x) => (
        <Accordion type="multiple" key={x.label}>
          <AccordionItem
            value={x.label}
            className="border-b-2 border-b-zinc-100/40 hover:border-b-zinc-100/70 transition-colors"
          >
            <AccordionTrigger>{x.label}</AccordionTrigger>
            <AccordionContent className="flex flex-1 flex-wrap gap-2">
              {x.list.map((x) => (
                <Tag key={x} label={x} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </Section>
  );
}

export default Skills;
