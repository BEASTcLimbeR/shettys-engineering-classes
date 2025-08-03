'use client';

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Loader from '../components/Loader';
import clockLoading from '../../public/clock-loading.json';
import React, { useState, useEffect } from 'react';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // Give the preloader animation time to show its effect
    const timer = setTimeout(() => {
      setHydrated(true);
    }, 3000); // Show for 3 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-icon.svg" type="image/svg+xml" />
      </head>
      <body className={roboto.variable}>
        {!hydrated && <Loader animationData={clockLoading} overlay />}
        <ParallaxProvider>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ minHeight: '100vh' }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </ParallaxProvider>
      </body>
    </html>
  );
}
