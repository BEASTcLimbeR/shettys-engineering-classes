'use client';

import { useEffect } from 'react';

// Core Web Vitals monitoring
const CoreWebVitals = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log Core Web Vitals for monitoring
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
          // Send to analytics if needed
          if (entry.startTime < 2500) {
            console.log('✅ LCP is good (< 2.5s)');
          } else {
            console.log('⚠️ LCP needs improvement (> 2.5s)');
          }
        }
        
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
          const fid = entry.processingStart - entry.startTime;
          if (fid < 100) {
            console.log('✅ FID is good (< 100ms)');
          } else {
            console.log('⚠️ FID needs improvement (> 100ms)');
          }
        }
      }
    });

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

    // Monitor CLS (Cumulative Layout Shift)
    let clsValue = 0;
    let clsEntries: any[] = [];

    const observerCLS = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as any[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      }
      
      console.log('CLS:', clsValue);
      if (clsValue < 0.1) {
        console.log('✅ CLS is good (< 0.1)');
      } else {
        console.log('⚠️ CLS needs improvement (> 0.1)');
      }
    });

    observerCLS.observe({ entryTypes: ['layout-shift'] });

    return () => {
      observer.disconnect();
      observerCLS.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CoreWebVitals; 