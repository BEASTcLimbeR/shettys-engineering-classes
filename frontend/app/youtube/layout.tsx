import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube Videos - Shetty\'s Engineering Classes',
  description: 'Watch educational videos from Shetty\'s Engineering Classes on YouTube. Learn engineering concepts, programming, mathematics, electronics, and more with our comprehensive video tutorials.',
  keywords: 'engineering videos, programming tutorials, mathematics, electronics, SEC Pune YouTube, Shetty Sir videos, engineering education, online learning',
  openGraph: {
    title: 'YouTube Videos - Shetty\'s Engineering Classes',
    description: 'Watch educational videos from Shetty\'s Engineering Classes on YouTube. Learn engineering concepts, programming, and more.',
    url: 'https://shettys-engineering-classes.vercel.app/youtube',
    siteName: 'Shetty\'s Engineering Classes',
    images: [
      {
        url: '/logo-sec.jpg',
        width: 1200,
        height: 630,
        alt: 'SEC Pune YouTube Channel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Videos - Shetty\'s Engineering Classes',
    description: 'Watch educational videos from Shetty\'s Engineering Classes on YouTube. Learn engineering concepts, programming, and more.',
    images: ['/logo-sec.jpg'],
  },
  alternates: {
    canonical: 'https://shettys-engineering-classes.vercel.app/youtube',
  },
};

export default function YouTubeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 