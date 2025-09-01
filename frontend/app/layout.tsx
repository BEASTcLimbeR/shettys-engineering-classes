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
      { url: '/logo-sec-icon.svg', type: 'image/svg+xml' },
      { url: '/logo-sec-icon.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/logo-sec-icon.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/logo-sec-icon.svg', sizes: '48x48', type: 'image/svg+xml' },
      { url: '/logo-sec-icon.svg', sizes: '96x96', type: 'image/svg+xml' },
      { url: '/logo-sec-icon.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/logo-sec-icon.svg', sizes: '512x512', type: 'image/svg+xml' }
    ],
    shortcut: '/logo-sec-icon.svg',
    apple: [
      { url: '/logo-sec-icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
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
    google: 'your-google-verification-code', // Replace with your actual verification code from Google Search Console
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
        {/* Primary favicon with aggressive cache-busting */}
        <link rel="icon" type="image/svg+xml" href="/logo-sec-icon.svg?v=3" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/logo-sec-icon.svg?v=3" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/logo-sec-icon.svg?v=3" />
        <link rel="icon" type="image/svg+xml" sizes="48x48" href="/logo-sec-icon.svg?v=3" />
        <link rel="icon" type="image/svg+xml" sizes="96x96" href="/logo-sec-icon.svg?v=3" />
        <link rel="icon" type="image/svg+xml" sizes="192x192" href="/logo-sec-icon.svg?v=3" />
        <link rel="icon" type="image/svg+xml" sizes="512x512" href="/logo-sec-icon.svg?v=3" />
        
        {/* Shortcut and Apple touch icons */}
        <link rel="shortcut icon" type="image/svg+xml" href="/logo-sec-icon.svg?v=3" />
        <link rel="apple-touch-icon" type="image/svg+xml" href="/logo-sec-icon.svg?v=3" />
        <link rel="apple-touch-icon" type="image/svg+xml" sizes="180x180" href="/logo-sec-icon.svg?v=3" />
        
        {/* Microsoft tile icon */}
        <meta name="msapplication-TileImage" content="/logo-sec-icon.svg?v=3" />
        <meta name="msapplication-TileColor" content="#1976d2" />
        
        {/* Force favicon refresh */}
        <link rel="icon" href="/logo-sec-icon.svg?v=3" />
        
        {/* Additional formats for better compatibility */}
        <link rel="icon" type="image/png" href="/logo-sec-icon.svg?v=3" />
        
        {/* Preload favicon to ensure it loads first */}
        <link rel="preload" href="/logo-sec-icon.svg?v=3" as="image" type="image/svg+xml" />
        <link rel="canonical" href="https://shettysengineeringclasses.com" />
        <meta name="theme-color" content="#1976d2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SEC Pune" />
        <meta name="application-name" content="Shettys Engineering Classes" />
      </head>
      <body className={inter.className}>
        <ClientParallaxProvider>
          {children}
        </ClientParallaxProvider>
      </body>
    </html>
  );
}
