import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import '@/styles/styles.css';

export const metadata: Metadata = {
  title: 'Adam Davies',
  description:
    'Adam Davies is a full stack software engineer and open source contributor with expertise in React, design systems, UI/UX design, and many other front and back-end technologies. He primarily builds powerful data-driven websites and performant APIs and microservices.',
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
    <html lang="en">
      <body className="bg-slate-950">{children}</body>
      <GoogleAnalytics gaId="G-1VFVVMH9QR" />
    </html>
  );
}
