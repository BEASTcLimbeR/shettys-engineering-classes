import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Paper, Box, Tabs, Tab, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

// Define the Branch interface
interface Branch {
  name: string;
  color: string;
  icon: React.ReactNode;
}

// Define the component props interface
interface BranchTabsProps {
  branches: Branch[];
  selectedTab: number;
  onTabChange: (tabIndex: number) => void;
}

const BranchTabs: React.FC<BranchTabsProps> = ({ branches, selectedTab, onTabChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Properly type the refs array to hold HTMLDivElement references
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Improved function to calculate indicator position with better mobile handling
  const updateIndicatorPosition = useCallback(() => {
    const tab = tabRefs.current[selectedTab];
    const container = tabsContainerRef.current;
    
    if (tab && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      
      // Calculate position relative to the container
      const left = tabRect.left - containerRect.left;
      const width = tabRect.width;
      
      setIndicatorStyle({ left, width });
    }
  }, [selectedTab]);

  useEffect(() => {
    updateIndicatorPosition();
    
    // Add resize listener for mobile responsiveness
    const handleResize = () => {
      updateIndicatorPosition();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateIndicatorPosition]);

  // Update position when tab changes with better timing
  useEffect(() => {
    const timer = setTimeout(updateIndicatorPosition, 50);
    return () => clearTimeout(timer);
  }, [selectedTab, updateIndicatorPosition]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        // Prevent unwanted touch behaviors
        touchAction: 'pan-y',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 3,
          mb: 4,
          position: 'relative',
          overflow: 'visible',
          // Better mobile handling
          touchAction: 'pan-y',
          // Prevent text selection on mobile
          WebkitUserSelect: 'none',
          userSelect: 'none',
        }}
      >
        <Box 
          ref={tabsContainerRef}
          sx={{ 
            position: 'relative',
            overflow: 'hidden', // Ensure indicator doesn't overflow
            // Prevent unwanted scrolling on mobile
            touchAction: 'pan-y',
            '& .MuiTabs-root': {
              touchAction: 'pan-y',
            }
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={(_, v) => onTabChange(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile={true}
            TabIndicatorProps={{ style: { display: 'none' } }}
            sx={{
              // Prevent horizontal scrolling issues on mobile
              touchAction: 'pan-y',
              '& .MuiTabs-scroller': {
                touchAction: 'pan-y',
                // Prevent momentum scrolling on iOS
                WebkitOverflowScrolling: 'auto',
              },
              '& .MuiTab-root': {
                minHeight: isSmallMobile ? '50px' : isMobile ? '60px' : '80px',
                fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : '1rem',
                fontWeight: 600,
                textTransform: 'none',
                minWidth: isSmallMobile ? '80px' : isMobile ? '100px' : '120px',
                padding: isSmallMobile ? '6px 8px' : isMobile ? '8px 12px' : '12px 16px',
                // Prevent text wrapping on mobile
                whiteSpace: 'nowrap',
                '&.Mui-selected': {
                  color: branches[selectedTab]?.color || '#1976d2',
                },
              },
              '& .MuiTabs-scrollButtons': {
                color: '#666',
                '&.Mui-disabled': {
                  opacity: 0.3,
                },
                // Better touch targets for mobile
                minWidth: isMobile ? '40px' : '48px',
                minHeight: isMobile ? '40px' : '48px',
              },
            }}
          >
            {branches.map((branch: Branch, index: number) => (
              <Tab
                key={index}
                label={
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: isSmallMobile ? 0.3 : isMobile ? 0.5 : 1,
                    flexDirection: isSmallMobile ? 'column' : isMobile ? 'column' : 'row',
                    // Ensure content doesn't wrap
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    <Box sx={{ 
                      fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {branch.icon}
                    </Box>
                    <span style={{ 
                      fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : '1rem',
                      lineHeight: 1.2
                    }}>
                      {branch.name}
                    </span>
                  </Box>
                }
                sx={{
                  color: '#666',
                  // Better touch targets
                  minHeight: isSmallMobile ? '50px' : isMobile ? '60px' : '80px',
                  '&.Mui-selected': {
                    color: branch.color,
                  },
                  // Prevent text wrapping
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
                ref={(el: HTMLDivElement | null) => {
                  tabRefs.current[index] = el;
                }}
              />
            ))}
          </Tabs>
          
          {/* Custom Animated Indicator - Mobile Responsive */}
          <motion.div
            layout
            transition={{ 
              type: 'spring', 
              stiffness: 500, 
              damping: 30,
              duration: 0.3
            }}
            style={{
              position: 'absolute',
              left: indicatorStyle.left,
              bottom: 0,
              width: indicatorStyle.width,
              height: isSmallMobile ? 2 : isMobile ? 3 : 4,
              background: branches[selectedTab]?.color || '#1976d2',
              borderRadius: 2,
              zIndex: 1,
            }}
          />
        </Box>
      </Paper>
    </motion.div>
  );
};

export default BranchTabs;