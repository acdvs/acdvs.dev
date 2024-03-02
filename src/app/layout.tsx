import { Metadata } from 'next';
import '@/styles/styles.css';

export const metadata: Metadata = {
  title: 'Adam Davies',
  description:
    'Adam Davies is a full stack software engineer and open source contributor with expertise in UI and UX design.',
  keywords: [
    'Adam Davies',
    'software engineer',
    'open source',
    'full stack',
    'front end',
    'React',
    'UI design',
  ],
  alternates: {
    canonical: 'https://adam-davies.me',
  },
  metadataBase: new URL('https://adam-davies.me'),
  openGraph: {
    images: [
      {
        url: '/og-image.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient">{children}</body>
    </html>
  );
}
