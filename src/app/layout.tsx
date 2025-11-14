import CustomProvider from '@/components/custom-provider';
import Footer from '@/components/footer/footer';
import HeaderLoading from '@/components/header/header-loading';
import { Toaster } from '@/components/ui/sonner';
import { SessionProvider } from 'next-auth/react';
import { Geist, Geist_Mono, Lato, Plus_Jakarta_Sans, Roboto } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: ' Bangladesh',
    template: '%s | ',
  },
  description:
    'SOHI provides premium airport services in Bangladesh, including Meet & Assist, Lounge booking, and Luggage Wrapping at Dhaka Airport.',
  keywords: [
    'Dhaka airport services',
    'meet and greet Dhaka',
    'airport lounge Dhaka',
    'luggage wrapping Dhaka',
  ],
  openGraph: {
    title: ' Bangladesh',
    description:
      'Premium airport services in Dhaka: Meet & Assist, Lounge booking, and Luggage Wrapping.',
    url: 'https://sohi.com.bd',
    siteName: '',
    images: [
      {
        url: 'https://sohi.com.bd/logoair.png',
        width: 1200,
        height: 630,
        alt: ' Bangladesh',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${lato.variable} ${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${plus_jakarta_sans.variable} antialiased`}
      >
        <NextTopLoader />
        <SessionProvider>
          <CustomProvider>
            <Suspense fallback={<HeaderLoading />}>{/* <Header /> */}</Suspense>
            <Suspense fallback={''}>{/* <Popup /> */}</Suspense>
            <div className='min-h-screen'>{children}</div>
            <Toaster />
            <Footer />
          </CustomProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
