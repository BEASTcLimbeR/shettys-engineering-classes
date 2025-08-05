// Core Web Vitals Performance Monitor
(function() {
  'use strict';

  // Core Web Vitals thresholds
  const LCP_THRESHOLD = 2500; // 2.5 seconds
  const FID_THRESHOLD = 100; // 100 milliseconds
  const CLS_THRESHOLD = 0.1; // 0.1

  // Monitor LCP (Largest Contentful Paint)
  function monitorLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry) {
        const lcp = lastEntry.startTime;
        console.log('🚀 LCP:', lcp, 'ms');
        
        if (lcp < LCP_THRESHOLD) {
          console.log('✅ LCP is excellent!');
        } else {
          console.log('⚠️ LCP needs improvement');
        }
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  // Monitor FID (First Input Delay)
  function monitorFID() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach(entry => {
        const fid = entry.processingStart - entry.startTime;
        console.log('⚡ FID:', fid, 'ms');
        
        if (fid < FID_THRESHOLD) {
          console.log('✅ FID is excellent!');
        } else {
          console.log('⚠️ FID needs improvement');
        }
      });
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  }

  // Monitor CLS (Cumulative Layout Shift)
  function monitorCLS() {
    let clsValue = 0;
    let clsEntries = [];

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      });
      
      console.log('📐 CLS:', clsValue.toFixed(3));
      
      if (clsValue < CLS_THRESHOLD) {
        console.log('✅ CLS is excellent!');
      } else {
        console.log('⚠️ CLS needs improvement');
      }
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  }

  // Initialize monitoring when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      monitorLCP();
      monitorFID();
      monitorCLS();
    });
  } else {
    monitorLCP();
    monitorFID();
    monitorCLS();
  }

  // Log overall performance score
  window.addEventListener('load', function() {
    setTimeout(() => {
      console.log('🎯 Core Web Vitals Monitoring Active');
      console.log('📊 Check browser console for performance metrics');
    }, 1000);
  });

})(); 