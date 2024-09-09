import Section from '../Section';
import { skills } from '@/data';

function Skills() {
  return (
    <Section title="Skills">
      {skills.map((x) => (
        <Group key={x.label} {...x} />
      ))}
    </Section>
  );
}

const Group = ({ label, list }: (typeof skills)[number]) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-3 sm:mb-6">
    <h3 className="sm:w-[90px]">{label}</h3>
    <div className="flex flex-1 flex-wrap gap-2">
      {list.map((x) => (
        <span key={x} className="tag">
          {x}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;
