import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'European Crypto Atlas',
  description:
    'Discover and explore European crypto and blockchain companies and services across different categories.',
  metadataBase: new URL('https://cryptoatlas.eu'),
    openGraph: {
      title: 'European Crypto Atlas',
      description:
        'Discover and explore European crypto and blockchain companies and services across different categories.',
      url: '/',
      siteName: 'European Crypto Atlas',
      images: [
        {
          url: 'OG.jpg',
          width: 1200,
          height: 630,
          alt: 'European Crypto Atlas - Discover European Crypto Companies',
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    icons: {
      icon: [
        {
          url: '/europe-logo.svg',
          href: '/europe-logo.svg',
        },
      ],
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Script
          data-goatcounter="https://cryptoatlas.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </body>
    </html>
  );
}
