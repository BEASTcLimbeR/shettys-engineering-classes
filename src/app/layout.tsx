import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import ClientLayout from '../components/ClientLayout';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Shettys Engineering Classes - Best Engineering Classes in Pune Since 2010",
    template: "%s | Shettys Engineering Classes"
  },
  description: "Shettys Engineering Classes - Best Engineering Classes in Pune. Leading engineering coaching institute offering personalized coaching for E&TC, Computer, Electrical, AI&DS, Mechanical, Civil engineering. Expert guidance, small batches, proven results since 2010. Book your free demo today!",
  keywords: [
    "Shettys Engineering Classes",
    "Shetty's Engineering Classes",
    "Shettys Engineering Classes Pune",
    "Shettys Engineering Classes Shivajinagar",
    "Shettys Engineering Classes FC Road",
    "Shettys Engineering Classes Ghole Road",
    "Shettys Engineering Classes near me",
    "Shettys Engineering Classes contact",
    "Shettys Engineering Classes phone number",
    "Shettys Engineering Classes address",
    "Shettys Engineering Classes reviews",
    "Shettys Engineering Classes fees",
    "Shettys Engineering Classes courses",
    "Shettys Engineering Classes branches",
    "Shettys Engineering Classes E&TC",
    "Shettys Engineering Classes Computer",
    "Shettys Engineering Classes Electrical",
    "Shettys Engineering Classes AI&DS",
    "Shettys Engineering Classes Mechanical",
    "Shettys Engineering Classes Civil",
    "Shettys Engineering Classes first year",
    "Shettys Engineering Classes coaching",
    "Shettys Engineering Classes tuition",
    "Shettys Engineering Classes classes",
    "Shettys Engineering Classes institute",
    "Shettys Engineering Classes Pune Maharashtra",
    "Shettys Engineering Classes best",
    "Shettys Engineering Classes top",
    "Shettys Engineering Classes leading",
    "Shettys Engineering Classes expert",
    "Shettys Engineering Classes faculty",
    "Shettys Engineering Classes batches",
    "Shettys Engineering Classes one-to-one",
    "Shettys Engineering Classes demo",
    "Shettys Engineering Classes counseling",
    "Shettys Engineering Classes study material",
    "Shettys Engineering Classes exam preparation",
    "engineering coaching",
    "Pune engineering classes",
    "SEC Pune",
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
    title: "Shettys Engineering Classes - Best Engineering Classes in Pune Since 2010",
    description: "Shettys Engineering Classes - Best Engineering Classes in Pune. Leading engineering coaching institute offering personalized coaching for E&TC, Computer, Electrical, AI&DS, Mechanical, Civil engineering. Expert guidance, small batches, proven results since 2010.",
    url: 'https://shettysengineeringclasses.com',
    siteName: "Shettys Engineering Classes",
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
    title: "Shettys Engineering Classes - Best Engineering Classes in Pune",
    description: "Shettys Engineering Classes - Best Engineering Classes in Pune. Leading engineering coaching institute offering personalized coaching for E&TC, Computer, Electrical, AI&DS, Mechanical, Civil engineering since 2010.",
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
        <link rel="icon" type="image/svg+xml" href="/logo-sec-icon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://shettysengineeringclasses.com" />
        <meta name="theme-color" content="#1976d2" />
        <meta name="msapplication-TileColor" content="#1976d2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SEC Pune" />
        <meta name="application-name" content="Shetty's Engineering Classes" />
        <meta name="msapplication-TileImage" content="/logo-sec-icon.svg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Shettys Engineering Classes",
              "alternateName": ["SEC Pune", "Shetty's Engineering Classes"],
              "description": "Shettys Engineering Classes - Best Engineering Classes in Pune - Leading engineering coaching institute",
              "url": "https://shettysengineeringclasses.com",
              "logo": "https://shettysengineeringclasses.com/logo-sec-icon.svg",
              "image": "https://shettysengineeringclasses.com/logo-sec-icon.svg",
              "telephone": "+91 99234 60156",
              "email": "shettyseng@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shetty's Engineering Classes, 3rd Floor Besides Namaskar Restaurant, Ghole Rd, opposite MJM Hospital, Sud Nagar, Shivajinagar, Pune, Maharashtra 411004",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411004",
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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
