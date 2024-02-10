import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';
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
      <body className={dmSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
