import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import ClientLayout from '../components/ClientLayout';
import CoreWebVitals from '../components/CoreWebVitals';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Best Engineering Classes in Pune - Shetty's Engineering Classes Since 2010",
    template: "%s | Shetty's Engineering Classes"
  },
  description: "Best First Year Engineering Class in Pune. Leading engineering coaching institute in Pune offering personalized coaching for all engineering branches including E&TC, Computer, Electrical, AI&DS, Mechanical, Civil. Expert guidance, small batches, and proven results since 2010. Book your free demo today!",
  keywords: [
    "engineering coaching",
    "Pune engineering classes",
    "SEC Pune",
    "Shetty's Engineering Classes",
    "engineering coaching institute",
    "engineering tuition",
    "engineering classes Pune",
    "E&TC coaching",
    "Computer engineering classes",
    "Electrical engineering coaching",
    "AI&DS coaching",
    "Mechanical engineering classes",
    "Civil engineering coaching",
    "engineering exam preparation",
    "engineering study material",
    "engineering faculty Pune",
    "engineering batches",
    "one-to-one engineering tuition",
    "engineering demo class",
    "engineering counseling",
    "Best First Year Engineering Class in Pune",
    "Engineering classes near me",
    "Engineering classes in Pune",
    "Best Engineering classes in Pune",
    "Best Engineering classes in Shivajinagar",
    "engineering coaching Shivajinagar",
    "engineering classes FC Road",
    "engineering coaching Ghole Road",
    "engineering classes Pune Maharashtra",
    "best engineering coaching institute Pune",
    "top engineering classes Pune",
    "engineering coaching for first year",
    "engineering classes for beginners",
    "engineering coaching near FC Road",
    "engineering classes near Ghole Road"
  ].join(", "),
  authors: [{ name: "Shetty's Engineering Classes", url: "https://shettysengineeringclasses.com" }],
  creator: "Shetty's Engineering Classes",
  publisher: "Shetty's Engineering Classes",
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
    title: "Best Engineering Classes in Pune - Shetty's Engineering Classes Since 2010",
    description: "Best First Year Engineering Class in Pune. Leading engineering coaching institute in Pune offering personalized coaching for all engineering branches. Expert guidance, small batches, and proven results since 2010.",
    url: 'https://shettysengineeringclasses.com',
    siteName: "Shetty's Engineering Classes",
    images: [
      {
        url: '/logo-sec-icon.svg',
        width: 1200,
        height: 630,
        alt: "Shetty's Engineering Classes Logo",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Engineering Classes in Pune - Shetty's Engineering Classes",
    description: "Best First Year Engineering Class in Pune. Leading engineering coaching institute in Pune offering personalized coaching for all engineering branches since 2010.",
    images: ['/logo-sec-icon.svg'],
    creator: '@SEC_Pune',
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'education',
  classification: 'engineering coaching institute',
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.5204;73.8567',
    'ICBM': '18.5204, 73.8567',
    'DC.title': "Shetty's Engineering Classes",
    'DC.creator': "Shetty's Engineering Classes",
    'DC.subject': 'Engineering Coaching',
    'DC.description': 'Best Engineering Classes in Pune - Leading engineering coaching institute',
    'DC.publisher': "Shetty's Engineering Classes",
    'DC.contributor': "Shetty's Engineering Classes",
    'DC.date': '2010-01-01',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://shettysengineeringclasses.com',
    'DC.language': 'en',
    'DC.coverage': 'Pune, Maharashtra, India',
    'DC.rights': 'Copyright 2024 Shetty\'s Engineering Classes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Core Web Vitals - Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo-sec-icon.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        
        {/* Favicon and Icons */}
        <link rel="icon" type="image/svg+xml" href="/logo-sec-icon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://shettysengineeringclasses.com" />
        
        {/* Theme and App Meta */}
        <meta name="theme-color" content="#1976d2" />
        <meta name="msapplication-TileColor" content="#1976d2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SEC Pune" />
        <meta name="application-name" content="Shetty's Engineering Classes" />
        <meta name="msapplication-TileImage" content="/logo-sec-icon.svg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Core Web Vitals Performance Monitor */}
        <script src="/performance-monitor.js" defer />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Shetty's Engineering Classes",
              "alternateName": "SEC Pune",
              "description": "Best Engineering Classes in Pune - Leading engineering coaching institute",
              "url": "https://shettysengineeringclasses.com",
              "logo": "https://shettysengineeringclasses.com/logo-sec-icon.svg",
              "image": "https://shettysengineeringclasses.com/logo-sec-icon.svg",
              "telephone": "+91 99234 60156",
              "email": "shettyseng@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3rd Floor, besides Namaskar Restaurant, opp. MJM Hospital, Ghole Road, Off. FC Road",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411005",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5204,
                "longitude": 73.8567
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Pune"
                },
                {
                  "@type": "City",
                  "name": "Shivajinagar"
                },
                {
                  "@type": "City",
                  "name": "FC Road"
                },
                {
                  "@type": "City",
                  "name": "Ghole Road"
                }
              ],
              "serviceArea": {
                "@type": "City",
                "name": "Pune"
              },
              "foundingDate": "2010-01-01",
              "founder": {
                "@type": "Person",
                "name": "Prof. Sukumara Shetty",
                "jobTitle": "Founder & Educator",
                "description": "1st Topper SVCE Bangalore, VTU Karnataka 11th Rank (2005), 14+ Years of Teaching & Industry Experience"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Engineering Coaching Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Best First Year Engineering Class in Pune",
                      "description": "Comprehensive first year engineering coaching for all branches"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E&TC Engineering Coaching",
                      "description": "Electronics and Telecommunication Engineering coaching"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Computer Engineering Coaching",
                      "description": "Computer Science Engineering coaching"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electrical Engineering Coaching",
                      "description": "Electrical Engineering coaching"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI&DS Coaching",
                      "description": "Artificial Intelligence and Data Science coaching"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mechanical Engineering Coaching",
                      "description": "Mechanical Engineering coaching"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Civil Engineering Coaching",
                      "description": "Civil Engineering coaching"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://instagram.com/shettys_engineering_classes",
                "https://www.youtube.com/@SEC_Pune",
                "https://facebook.com/share/1DeqGNdbm4/?mibextid=qi2Omg"
              ],
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Best Engineering Classes in Pune",
                  "value": "Yes"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Best Engineering Classes in Shivajinagar",
                  "value": "Yes"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Engineering Classes Near Me",
                  "value": "Yes"
                },
                {
                  "@type": "PropertyValue",
                  "name": "First Year Engineering Coaching",
                  "value": "Yes"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Location",
                  "value": "FC Road, Ghole Road, Pune"
                }
              ]
            })
          }}
        />
      </head>
      <body className={roboto.variable}>
        <CoreWebVitals />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
