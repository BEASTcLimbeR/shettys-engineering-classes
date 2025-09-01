"use client";

import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Loader from './Loader';
import clockLoading from '../../public/clock-loading.json';

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

// Add global styles for scrollbar
const globalStyles = `
  /* Webkit browsers (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(25, 118, 210, 0.1);
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #1976d2, #42a5f5);
    border-radius: 5px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #1565c0, #1976d2);
    transform: scale(1.05);
  }
  
  ::-webkit-scrollbar-corner {
    background: rgba(25, 118, 210, 0.1);
  }
  
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #1976d2 rgba(25, 118, 210, 0.1);
  }
  
  /* Smooth scrolling for the entire page */
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar for specific elements */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #1976d2 rgba(25, 118, 210, 0.1);
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(25, 118, 210, 0.05);
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #1976d2, #42a5f5);
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #1565c0, #1976d2);
  }
`;

// Inject global styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = globalStyles;
  document.head.appendChild(styleElement);
}