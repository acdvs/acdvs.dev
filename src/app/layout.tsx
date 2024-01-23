import '@/styles/styles.css';

export const metadata = {
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient">{children}</body>
    </html>
  );
}
