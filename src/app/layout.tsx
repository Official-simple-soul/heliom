import type { Metadata } from 'next';
import './globals.css';
import { ContextProvider } from '@/store/context';
import ClientProvider from './ClientProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <ClientProvider>
          <ContextProvider>{children}</ContextProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
