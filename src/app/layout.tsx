import '@/styles/styles.css';

export const metadata = {
  title: 'Adam Davies',
  description:
    'Portfolio of Adam Davies, a full stack software engineer and open-source contributor from Houston, Texas.',
  keywords: [
    'Adam Davies',
    'developer',
    'web development',
    'full stack',
    'software engineer',
    'open source',
    'React',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient">{children}</body>
    </html>
  );
}
