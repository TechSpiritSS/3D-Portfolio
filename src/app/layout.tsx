import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sidharth Sethi | Portfolio',
  description:
    'Sidharth Sethi is a software engineer based in India. He is a full-stack developer, and loves to build things for the web.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-slate-300/20 h-full'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

