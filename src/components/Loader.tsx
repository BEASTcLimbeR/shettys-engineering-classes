import React from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';

interface LoaderProps {
  animationData: object;
  size?: number | string;
  overlay?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ animationData, size = 180, overlay = false }) => (
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
      background: overlay ? 'rgba(255,255,255,0.85)' : 'none',
    }}
  >
    <Lottie
      animationData={animationData}
      loop
      style={{ width: size, height: size }}
    />
  </Box>
);

export default Loader;