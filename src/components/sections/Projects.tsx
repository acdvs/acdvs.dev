import Section from '../Section';
import Project from '../Project';

function Projects() {
  return (
    <Section title="Projects">
      <ul className="md:grid md:gap-x-12 md:gap-y-8 md:auto-rows-auto md:grid-cols-2">
        <Project
          title="Super Snake 2.0"
          date="2024"
          description="A recreation of the classic Snake arcade game with a wider range of difficulty modifiers."
          tags={['TypeScript', 'React', 'WebAssembly', 'Rust', 'WebGL']}
        />
        <Project
          title="Spotify Playlist Sync"
          date="2024"
          description="Sync Spotify playlists across accounts without publicly sharing or collaborating."
          tags={['TypeScript', 'React', 'Next.js', 'Tailwind', 'React Query', 'Zustand']}
          liveURL="/spotify-playlist-sync"
          sourceURL="https://github.com/acdvs/spotify-playlist-sync"
        />
        <Project
          title="TD-OBSWebSocket"
          date="2023"
          description="A TouchDesigner component that creates a two-way WebSocket connection with OBS."
          tags={['TouchDesigner', 'Python', 'WebSocket']}
          sourceURL="https://github.com/acdvs/TD-OBSWebSocket"
        />
        <Project
          title="TD-Packager"
          date="2023"
          description="A TouchDesigner component that properly packages other components for release."
          tags={['TouchDesigner', 'Python']}
          sourceURL="https://github.com/acdvs/TD-Packager"
        />
        <Project
          title="Go Spotify"
          date="2023"
          description="A fast Go wrapper for Spotify's Web API."
          tags={['Go']}
          sourceURL="https://github.com/omegastreamtv/Spotify"
        />
        <Project
          title="yeahbutdvds.com"
          date="2022-23"
          description="A livestream overlay generator that displays a random emote from the user's list in bouncing DVD logo style."
          tags={['TypeScript', 'React', 'Next.js', 'SCSS', 'Bootstrap']}
          liveURL="https://yeahbutdvds.com"
          sourceURL="https://github.com/omegastreamtv/YEAHBUTDVDs"
        />
        <Project
          title="dealbot.gg"
          date="2021"
          description="A Discord bot for quickly and easily looking up PC game deals via IsThereAnyDeal. Currently receives over 10,000 monthly interactions."
          tags={['TypeScript', 'discord.js', 'PostgreSQL', 'Prisma', 'DigitalOcean App']}
          liveURL="https://dealbot.gg"
          sourceURL="https://github.com/acdvs/isthereanydeal-lookup"
        />
        <Project
          title="eslint-plugin-suitescript"
          date="2020"
          description="An NPM package and ESLint plugin for coding with NetSuite's SuiteScript v1/2 API. 800+ weekly downloads."
          tags={['JavaScript', 'Node.js', 'ESLint', 'AST nodes']}
          sourceURL="https://github.com/acdvs/eslint-plugin-suitescript"
          packageURL="https://www.npmjs.com/package/eslint-plugin-suitescript"
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
          description="A recreation of the classic Snake arcade game with a wide range of difficulty modifiers."
          tags={['JavaScript', 'HTML5 canvas']}
          liveURL="https://supersnake.adam-davies.me"
          sourceURL="https://github.com/acdvs/super-snake"
        />
        <p className="text-darkTrans1 text-center col-span-2">
          (This website was built with TypeScript, React, Tailwind, and Next.js!)
        </p>
      </ul>
    </Section>
  );
}

export default Projects;
