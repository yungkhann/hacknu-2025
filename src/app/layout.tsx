import type { Metadata } from 'next';
import { Azeret_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const azeretMono = Azeret_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HackNU/25',
  description:
    '8th Annual 24-hour student hackathon organized by NU ACM Student Chapter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-main-background text-white overflow-x-hidden h-screen',
          azeretMono.className
        )}>
        {children}
      </body>
    </html>
  );
}
