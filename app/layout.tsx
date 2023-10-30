import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';
import Sidebar from './components/sidebar';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('http://leminhhin.github.io/'),
  title: {
    default: 'Minh-Hien Le',
    template: '%s | Minh-Hien Le',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Minh-Hien Le',
    description: 'Developer, writer, and creator.',
    url: 'http://leminhhin.github.io/',
    siteName: 'Minh-Hien Le',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Minh-Hien Le',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {/* <Sidebar /> */}
          {children}
          {/* <Analytics /> */}
        </main>
      </body>
    </html>
  );
}
