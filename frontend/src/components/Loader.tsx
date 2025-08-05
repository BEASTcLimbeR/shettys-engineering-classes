"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => (
    <Box
      sx={{
        width: 180,
        height: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(25, 118, 210, 0.1)',
        borderRadius: '50%',
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          border: '4px solid rgba(25, 118, 210, 0.3)',
          borderTop: '4px solid #1976d2',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }}
      />
    </Box>
  ),
});

interface LoaderProps {
  animationData: object;
  size?: number | string;
  overlay?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ animationData, size = 180, overlay = false }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything during SSR
  if (!isClient) {
    return null;
  }

  return (
    <Box
      sx={{
        position: overlay ? 'fixed' : 'relative',
        top: overlay ? 0 : 'auto',
        left: overlay ? 0 : 'auto',
        width: overlay ? '100vw' : 'auto',
        height: overlay ? '100vh' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: overlay ? 2000 : 'auto',
        background: overlay ? 'rgba(255, 255, 255, 0.9)' : 'none',
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        style={{ width: size, height: size }}
      />
    </Box>
  );
};

export default Loader;