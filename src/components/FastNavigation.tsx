"use client";

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

interface FastNavigationProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FastNavigation: React.FC<FastNavigationProps> = ({
  children,
  className,
  style
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fast visibility check
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.15s ease-out',
      }}
    >
      {children}
    </Box>
  );
};

// Fast hover animation component
interface FastHoverProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  scale?: number;
}

export const FastHover: React.FC<FastHoverProps> = ({
  children,
  className,
  style,
  scale = 1.02
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      className={className}
      style={{
        ...style,
        transform: isHovered ? `scale(${scale})` : 'scale(1)',
        transition: 'transform 0.15s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Box>
  );
};

// Fast fade in component
interface FastFadeInProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const FastFadeIn: React.FC<FastFadeInProps> = ({
  children,
  className,
  style,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Box
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-out',
      }}
    >
      {children}
    </Box>
  );
}; 