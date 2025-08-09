"use client";

import { ParallaxProvider } from 'react-scroll-parallax';
import { ReactNode } from 'react';

interface ClientParallaxProviderProps {
  children: ReactNode;
}

export default function ClientParallaxProvider({ children }: ClientParallaxProviderProps) {
  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  );
}
