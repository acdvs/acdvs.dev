import Section from '../Section';
import { skills } from '@/data';

function Skills() {
  return (
    <Section title="Skills">
      {skills.map((x) => (
        <Group key={x.label} label={x.label} list={x.list} />
      ))}
    </Section>
  );
}

const Group = ({ label, list }: { label: string; list: string[] }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
    <h3>{label}</h3>
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
