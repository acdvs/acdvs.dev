import type { Project } from '@/types';

export default [
  {
    title: 'eslint-plugin-amd',
    date: 2026,
    description:
      "An ESLint plugin for linting AMD module syntax.",
    tags: ['TypeScript', 'Node.js', 'ESLint', 'AST'],
    links: {
      source: 'https://github.com/acdvs/eslint-plugin-amd',
      package: 'https://npmjs.com/package/@acdvs/eslint-plugin-amd',
    },
  },
  {
    title: 'win-ctx',
    date: 2025,
    description: 'A Rust library for managing Windows context menu entries.',
    tags: ['Rust', 'Windows API'],
    links: {
      source: 'https://github.com/acdvs/winctx-rs',
      package: 'https://crates.io/crates/win-ctx',
    },
  },
  {
    title: 'Super Snake 2.0',
    date: 2024,
    description:
      'A recreation of the classic Snake arcade game with a wider range of difficulty modifiers.',
    tags: ['TypeScript', 'React', 'WebAssembly', 'Rust', 'WebGPU'],
  },
  {
    title: 'Spotify Playlist Sync',
    date: 2024,
    description:
      'Sync Spotify playlists across accounts without publicly sharing or collaborating.',
    tags: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind',
      'React Query',
      'Zustand',
      'Vercel',
    ],
    links: {
      website: 'https://spotify-playlist-sync.acdvs.dev',
      source: 'https://github.com/acdvs/spotify-playlist-sync',
    },
  },
  {
    title: 'TD-OBSWebSocket',
    date: {
      start: 2023
    },
    description:
      'A TouchDesigner component that creates a two-way WebSocket connection with OBS.',
    tags: ['TouchDesigner', 'Python', 'WebSocket'],
    links: {
      source: 'https://github.com/acdvs/TD-OBSWebSocket',
    },
  },
  {
    title: 'TD-Packager',
    date: 2023,
    description:
      'A TouchDesigner component that properly packages other components for release.',
    tags: ['TouchDesigner', 'Python'],
    links: {
      source: 'https://github.com/acdvs/TD-Packager',
    },
  },
  {
    title: 'acdvs.dev',
    date: 2023,
    description: 'This website.',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Vercel'],
    links: {
      source: 'https://github.com/acdvs/acdvs.dev',
    },
  },
  {
    title: 'Emote Screensaver',
    date: 2022,
    description:
      'A livestream overlay generator that displays a random emote from a channel in bouncing DVD screensaver style.',
    tags: ['TypeScript', 'React', 'Next.js', 'SCSS', 'Bootstrap', 'Vercel'],
    links: {
      website: 'https://emote-screensaver.omegastream.tv',
      source: 'https://github.com/omegastreamtv/emote-screensaver',
    },
  },
  {
    title: 'Dealbot',
    date: {
      start: 2021,
    },
    description:
      'A Discord bot for easy lookup of PC game deals via IsThereAnyDeal. Currently receives over 10,000 monthly interactions.',
    tags: [
      'TypeScript',
      'React',
      'Next.js',
      'PostgreSQL',
      'Supabase',
      'Vercel',
      'Railway',
    ],
    links: {
      website: 'https://dealbot.acdvs.dev',
      source: 'https://github.com/acdvs/dealbot',
    },
  },
  {
    title: 'eslint-plugin-suitescript',
    date: {
      start: 2020
    },
    description:
      "An ESLint plugin for linting SuiteScript v1/2 API code. 1200+ weekly downloads.",
    tags: ['JavaScript', 'Node.js', 'ESLint', 'AST'],
    links: {
      source: 'https://github.com/acdvs/eslint-plugin-suitescript',
      package: 'https://npmjs.com/package/eslint-plugin-suitescript',
    },
  },
  {
    title: 'GroupMe Analyzer',
    date: 2018,
    description:
      "A tool for finding your group's top favorited messages with context in the past month.",
    tags: ['JavaScript', 'React', 'Node.js'],
    fallback: 'Update in progress',
  },
  {
    title: 'Super Snake',
    date: 2014,
    description:
      'A recreation of the classic Snake arcade game with a wide range of difficulty modifiers.',
    tags: ['JavaScript', 'HTML5 Canvas'],
    links: {
      website: 'https://super-snake.acdvs.dev',
      source: 'https://github.com/acdvs/super-snake',
    },
  },
] satisfies Project[];
