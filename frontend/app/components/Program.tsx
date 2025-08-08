'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

interface AnimatedCounterProps {
  to: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, to, {
      duration: 2.5,
      ease: [0.25, 1, 0.5, 1], // An ease-out-expo like curve
      onUpdate: (value) => {
        // Ensure the text content is always an integer
        node.textContent = Math.round(value).toString();
      },
    });

    // Stop the animation when the component unmounts
    return () => controls.stop();
  }, [to]);

  // Display 0 initially to prevent layout shift
  return <span ref={nodeRef}>0</span>;
};

export default AnimatedCounter;