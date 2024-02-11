import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import Canvas from './components/Canvas';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pham Tinh • Developer',
  description:
    'Helping brands thrive in the digital world. Located in Viet Nam. Building interactive websites from scratch. © Code by Pham Tinh.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={`${dmSans.className} h-screen overflow-hidden`}>
        <Header />
        <Canvas />
        {children}
        <Footer />
      </body>
    </html>
  );
}
