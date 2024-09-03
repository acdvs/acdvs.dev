import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import '@/styles/styles.css';

export const metadata: Metadata = {
  title: 'Adam Davies - Portfolio',
  description:
    'Adam Davies is a full stack software engineer and open source contributor with expertise in UI and UX design. He primarily builds modern front-end experiences with the React ecosystem including Next.js, TypeScript, Tailwind, and more.',
  keywords: [
    'Adam Davies',
    'software engineer',
    'open source',
    'full stack',
    'front end',
    'React',
    'UI',
  ],
  alternates: {
    canonical: 'https://acdvs.dev',
  },
  metadataBase: new URL('https://acdvs.dev'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient">{children}</body>
      <GoogleAnalytics gaId="G-1VFVVMH9QR" />
    </html>
  );
}
