import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navigation } from '@/components/shared/Navigation';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Glovo Platform - Prototipo',
  description: 'Plataforma integral de envíos, paquetería y compras por encargo tipo Glovo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-white">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
