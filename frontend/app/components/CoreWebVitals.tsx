"use client";

import { useEffect } from 'react';

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    // Check if PerformanceObserver is supported
    if (typeof PerformanceObserver === 'undefined') {
      return;
    }

    // Monitor Core Web Vitals for analytics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          // Send to analytics if needed
          if (entry.startTime < 2500) {
            // LCP is good
          } else {
            // LCP needs improvement
          }
        }
        
        if (entry.entryType === 'first-input') {
          const fid = entry.processingStart - entry.startTime;
          if (fid < 100) {
            // FID is good
          } else {
            // FID needs improvement
          }
        }
      }
    });

    // Observe LCP and FID
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

    // Monitor CLS
    let clsValue = 0;
    let clsEntries: any[] = [];

    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);
        }
      }
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    if (clsValue < 0.1) {
      // CLS is good
    } else {
      // CLS needs improvement
    }

    return () => {
      observer.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return null;
};

export default CoreWebVitals;
