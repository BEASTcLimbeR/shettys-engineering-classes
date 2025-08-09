"use client";

import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Loader from './Loader';
import clockLoading from '../public/clock-loading.json';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Keep original preloader time for beautiful animation
    const timer = setTimeout(() => {
      setHydrated(true);
    }, 1500); // Restored to 1.5 seconds for beautiful animation
    return () => clearTimeout(timer);
  }, []);

  // Don't render anything during SSR
  if (!isClient) {
    return null;
  }

  return (
    <>
      {!hydrated && <Loader animationData={clockLoading} overlay />}
      <ParallaxProvider>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }} // Restored original duration
            style={{ minHeight: '100vh' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </ParallaxProvider>
    </>
  );
};

export default ClientLayout;