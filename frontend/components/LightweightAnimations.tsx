"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

// Lightweight animation hook
export const useLightweightAnimation = (delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return { isVisible, elementRef };
};

// Lightweight motion div component
interface LightweightMotionDivProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'scaleIn' | 'none';
}

export const LightweightMotionDiv: React.FC<LightweightMotionDivProps> = ({
  children,
  className,
  style,
  delay = 0,
  duration = 0.6,
  animation = 'fadeIn'
}) => {
  const { isVisible, elementRef } = useLightweightAnimation(delay);

  const getAnimationStyles = () => {
    const baseTransition = `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
    
    switch (animation) {
      case 'fadeIn':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: baseTransition,
        };
      case 'slideUp':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: baseTransition,
        };
      case 'slideLeft':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
          transition: baseTransition,
        };
      case 'scaleIn':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          transition: baseTransition,
        };
      default:
        return {};
    }
  };

  return (
    <Box
      ref={elementRef}
      className={className}
      style={{
        ...style,
        ...getAnimationStyles(),
      }}
    >
      {children}
    </Box>
  );
};

// Lightweight hover animation component
interface HoverAnimationProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  scale?: number;
  duration?: number;
}

export const HoverAnimation: React.FC<HoverAnimationProps> = ({
  children,
  className,
  style,
  scale = 1.05,
  duration = 0.3
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      className={className}
      style={{
        ...style,
        transform: isHovered ? `scale(${scale})` : 'scale(1)',
        transition: `transform ${duration}s ease`,
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Box>
  );
};

// Lightweight stagger animation hook
export const useStaggerAnimation = (itemCount: number, staggerDelay: number = 0.1) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animations
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i]);
            }, i * staggerDelay * 1000);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [itemCount, staggerDelay]);

  return { visibleItems, containerRef };
};

// Lightweight stagger container
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  itemCount: number;
  staggerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className,
  style,
  itemCount,
  staggerDelay = 0.1
}) => {
  const { visibleItems, containerRef } = useStaggerAnimation(itemCount, staggerDelay);

  return (
    <Box
      ref={containerRef}
      className={className}
      style={style}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            style: {
              ...((child as any).props?.style || {}),
              opacity: visibleItems.includes(index) ? 1 : 0,
              transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
            },
          } as any);
        }
        return child;
      })}
    </Box>
  );
}; 