import Section from '../Section';
import Project from '../Project';

function Projects() {
  return (
    <Section title="Projects">
      <ul className="md:grid md:gap-x-12 md:gap-y-8 md:auto-rows-auto md:grid-cols-2">
        <Project
          title="yeahbutdvds.com"
          date="2022-23"
          description="A livestream overlay generator that displays a random emote from the user's list in bouncing DVD logo style."
          tags={['TypeScript', 'React', 'Next.js', 'SCSS', 'AWS']}
          demoURL="https://yeahbutdvds.com/"
          githubURL="https://github.com/omegastreamtv/YEAHBUTDVDs"
        />
        <Project
          title="dealbot.gg"
          date="2021"
          description="A Discord bot for quickly and easily looking up PC game deals via IsThereAnyDeal. Currently receives over 10,000 monthly interactions."
          tags={['TypeScript', 'discord.js', 'Node.js', 'PostgreSQL', 'DigitalOcean App']}
          demoURL="https://dealbot.gg"
          githubURL="https://github.com/acdvs/isthereanydeal-lookup"
        />
        <Project
          title="eslint-plugin-suitescript"
          date="2020"
          description="An NPM package and ESLint plugin for coding with NetSuite's SuiteScript v1/2 API. 500+ weekly downloads."
          tags={['JavaScript', 'Node.js', 'ESLint', 'AST nodes']}
          githubURL="https://github.com/acdvs/eslint-plugin-suitescript"
          npmURL="https://www.npmjs.com/package/eslint-plugin-suitescript"
        />
        <Project
          title="GroupMe Analyzer"
          date="2018"
          description="A tool for finding your group's top favorited messages with context in the past month."
          tags={['JavaScript', 'React', 'Node.js']}
        />
        <Project
          title="Super Snake"
          date="2014"
          description="A classic recreation of Snake. Change gameplay difficulty with options for speed, boundaries, obstacles, and board size."
          tags={['JavaScript', 'HTML5 canvas']}
          demoURL="https://supersnake.adam-davies.me"
          githubURL="https://github.com/acdvs/super-snake"
        />
        <p className="text-darkTrans text-center col-span-2">
          (This website was built with TypeScript, React, Tailwind, and Next.js!)
        </p>
      </ul>
    </Section>
  );
}

export default Projects;
