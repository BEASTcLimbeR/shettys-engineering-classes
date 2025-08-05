import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import ClientLayout from '../components/ClientLayout';
import CoreWebVitals from '../components/CoreWebVitals';
import { keywordString } from '../data/keywords';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Best Engineering Classes in Pune | Shetty's Engineering Classes (SEC) - Expert Coaching Since 2010",
    template: "%s | Shetty's Engineering Classes"
  },
  description: "Best First Year Engineering Class in Pune. Leading engineering coaching institute offering personalized coaching for E&TC, Computer, Electrical, AI&DS, Mechanical, Civil branches. Expert guidance, small batches, proven results since 2010. Book free demo today!",
  keywords: keywordString,
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
    title: "Best Engineering Classes in Pune | Shetty's Engineering Classes (SEC) - Expert Coaching Since 2010",
    description: "Best First Year Engineering Class in Pune. Leading engineering coaching institute offering personalized coaching for E&TC, Computer, Electrical, AI&DS, Mechanical, Civil branches. Expert guidance, small batches, proven results since 2010. Book free demo today!",
    url: 'https://shettysengineeringclasses.com',
    siteName: "Shetty's Engineering Classes",
    images: [
      {
        url: '/logo-sec-icon.svg',
        width: 1200,
        height: 630,
        alt: "Shetty's Engineering Classes Logo - Best Engineering Coaching in Pune",
        type: 'image/svg+xml',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'India',
    emails: ['shettyseng@gmail.com'],
    phoneNumbers: ['+91 99234 60156'],
    faxNumbers: [],
    ttl: 86400,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Engineering Classes in Pune | Shetty's Engineering Classes (SEC)",
    description: "Best First Year Engineering Class in Pune. Leading engineering coaching institute offering personalized coaching for all engineering branches since 2010. Book free demo today!",
    images: ['/logo-sec-icon.svg'],
    creator: '@SEC_Pune',
    site: '@SEC_Pune',
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
    // Geographic meta data
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.5204;73.8567',
    'ICBM': '18.5204, 73.8567',
    'geo.country': 'India',
    'geo.city': 'Pune',
    'geo.state': 'Maharashtra',
    
    // Dublin Core meta data
    'DC.title': "Best Engineering Classes in Pune | Shetty's Engineering Classes (SEC)",
    'DC.creator': "Shetty's Engineering Classes",
    'DC.subject': 'Engineering Coaching, Engineering Classes, Engineering Tuition, Engineering Exam Preparation',
    'DC.description': 'Best First Year Engineering Class in Pune. Leading engineering coaching institute offering personalized coaching for E&TC, Computer, Electrical, AI&DS, Mechanical, Civil branches.',
    'DC.publisher': "Shetty's Engineering Classes",
    'DC.contributor': "Shetty's Engineering Classes",
    'DC.date': '2010-01-01',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://shettysengineeringclasses.com',
    'DC.language': 'en',
    'DC.coverage': 'Pune, Maharashtra, India',
    'DC.rights': 'Copyright 2024 Shetty\'s Engineering Classes',
    'DC.source': 'https://shettysengineeringclasses.com',
    'DC.relation': 'https://shettysengineeringclasses.com',
    
    // Additional SEO meta data
    'author': "Shetty's Engineering Classes",
    'copyright': 'Copyright 2024 Shetty\'s Engineering Classes',
    'language': 'en',
    'distribution': 'global',
    'rating': 'general',
    'revisit-after': '7 days',
    'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    'googlebot': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    'bingbot': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    
    // Business meta data
    'business:contact_data:street_address': '3rd Floor, besides Namaskar Restaurant, opp. MJM Hospital, Ghole Road, Off. FC Road',
    'business:contact_data:locality': 'Pune',
    'business:contact_data:region': 'Maharashtra',
    'business:contact_data:postal_code': '411005',
    'business:contact_data:country_name': 'India',
    'business:contact_data:phone_number': '+91 99234 60156',
    'business:contact_data:email': 'shettyseng@gmail.com',
    'business:contact_data:website': 'https://shettysengineeringclasses.com',
    
    // Educational meta data
    'education:institution_name': "Shetty's Engineering Classes",
    'education:institution_type': 'Engineering Coaching Institute',
    'education:specialization': 'Engineering Coaching',
    'education:branches': 'E&TC, Computer, Electrical, AI&DS, Mechanical, Civil',
    'education:location': 'Pune, Maharashtra, India',
    'education:established': '2010',
    'education:founder': 'Prof. Sukumara Shetty',
    
    // Local SEO meta data
    'place:location:latitude': '18.5204',
    'place:location:longitude': '73.8567',
    'place:location:locality': 'Pune',
    'place:location:region': 'Maharashtra',
    'place:location:country': 'India',
    'place:business:name': "Shetty's Engineering Classes",
    'place:business:category': 'Education',
    'place:business:phone': '+91 99234 60156',
    'place:business:website': 'https://shettysengineeringclasses.com',
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
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="author" content="Shetty's Engineering Classes" />
        <meta name="copyright" content="Copyright 2024 Shetty's Engineering Classes" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SEC Pune" />
        <meta name="application-name" content="Shetty's Engineering Classes" />
        <meta name="msapplication-TileImage" content="/logo-sec-icon.svg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Business Meta Tags */}
        <meta name="business:contact_data:street_address" content="3rd Floor, besides Namaskar Restaurant, opp. MJM Hospital, Ghole Road, Off. FC Road" />
        <meta name="business:contact_data:locality" content="Pune" />
        <meta name="business:contact_data:region" content="Maharashtra" />
        <meta name="business:contact_data:postal_code" content="411005" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:phone_number" content="+91 99234 60156" />
        <meta name="business:contact_data:email" content="shettyseng@gmail.com" />
        <meta name="business:contact_data:website" content="https://shettysengineeringclasses.com" />
        
        {/* Educational Meta Tags */}
        <meta name="education:institution_name" content="Shetty's Engineering Classes" />
        <meta name="education:institution_type" content="Engineering Coaching Institute" />
        <meta name="education:specialization" content="Engineering Coaching" />
        <meta name="education:branches" content="E&TC, Computer, Electrical, AI&DS, Mechanical, Civil" />
        <meta name="education:location" content="Pune, Maharashtra, India" />
        <meta name="education:established" content="2010" />
        <meta name="education:founder" content="Prof. Sukumara Shetty" />
        
        {/* Local SEO Meta Tags */}
        <meta name="place:location:latitude" content="18.5204" />
        <meta name="place:location:longitude" content="73.8567" />
        <meta name="place:location:locality" content="Pune" />
        <meta name="place:location:region" content="Maharashtra" />
        <meta name="place:location:country" content="India" />
        <meta name="place:business:name" content="Shetty's Engineering Classes" />
        <meta name="place:business:category" content="Education" />
        <meta name="place:business:phone" content="+91 99234 60156" />
        <meta name="place:business:website" content="https://shettysengineeringclasses.com" />
        
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
