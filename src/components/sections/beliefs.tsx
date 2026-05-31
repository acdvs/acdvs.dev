import { SectionHeader, SectionRoot } from '../section';

const beliefs = [
  'Desktop-first design is more logical than mobile-first design.',
  'Plain CSS detached from page structure is a footgun in most cases.',
  'Every developer should be an expert with regular expressions.',
];

function BeliefsSection() {
  return (
    <SectionRoot>
      <SectionHeader tag="h2">Beliefs</SectionHeader>
      <p>
        A small list of things I vehemently believe in and love to argue about.
      </p>
      <ul className="list-disc list-inside">
        {beliefs.map((x) => (
          <li key={x}>
            <Belief>{x}</Belief>
          </li>
        ))}
      </ul>
    </SectionRoot>
  );
}

function Belief({ children }: { children: string }) {
  return <em className="text-sm">{children}</em>;
}

export default BeliefsSection;
