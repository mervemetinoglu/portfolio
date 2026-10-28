import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Merve Sofuoğlu',
  description: 'Portfolio of Merve Sofuoğlu, Frontend Engineer',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-night100">{children}</body>
    </html>
  );
}
