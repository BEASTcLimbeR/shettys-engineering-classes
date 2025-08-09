import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientParallaxProvider from './components/ClientParallaxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Shettys Engineering Classes",
  description: "Leading engineering coaching institute in Pune since 2010",
  keywords: [
    "engineering coaching",
    "engineering classes",
    "Pune engineering",
    "engineering tuition"
  ],
  authors: [{ name: "Shettys Engineering Classes" }],
  creator: "Shettys Engineering Classes",
  publisher: "Shettys Engineering Classes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shettysengineeringclasses.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Shettys Engineering Classes",
    description: "Leading engineering coaching institute in Pune since 2010",
    url: 'https://shettysengineeringclasses.com',
    siteName: 'Shettys Engineering Classes',
    images: [
      {
        url: '/logo-sec-icon.svg',
        width: 1200,
        height: 630,
        alt: "Shettys Engineering Classes Logo",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shettys Engineering Classes",
    description: "Leading engineering coaching institute in Pune since 2010",
    images: ['/logo-sec-icon.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-sec-icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/logo-sec-icon.svg',
    apple: '/logo-sec-icon.svg',
  },
  manifest: '/manifest.json',
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'education',
  classification: 'engineering coaching institute',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-sec-icon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://shettysengineeringclasses.com" />
        <meta name="theme-color" content="#1976d2" />
        <meta name="msapplication-TileColor" content="#1976d2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SEC Pune" />
        <meta name="application-name" content="Shettys Engineering Classes" />
        <meta name="msapplication-TileImage" content="/logo-sec-icon.svg" />
      </head>
      <body className={inter.className}>
        <ClientParallaxProvider>
          {children}
        </ClientParallaxProvider>
      </body>
    </html>
  );
}
