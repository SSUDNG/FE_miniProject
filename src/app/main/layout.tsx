import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fast Reservation',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="mx-max border-b-[1px] rounded-lg">
          <div className={`${inter.className} mx-auto w-innerWidth h-20 `} />
        </nav>
        {children}
      </body>
    </html>
  );
}
