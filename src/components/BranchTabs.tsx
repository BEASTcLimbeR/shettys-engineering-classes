import React, { useRef, useEffect, useState } from 'react';
import { Paper, Box, Tabs, Tab } from '@mui/material';
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
  // Properly type the refs array to hold HTMLDivElement references
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const tab = tabRefs.current[selectedTab];
    if (tab) {
      setIndicatorStyle({ left: tab.offsetLeft, width: tab.offsetWidth });
    }
  }, [selectedTab]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
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
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Tabs
            value={selectedTab}
            onChange={(_, v) => onTabChange(v)}
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{ style: { display: 'none' } }}
            sx={{
              '& .MuiTab-root': {
                minHeight: '80px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                '&.Mui-selected': {
                  color: branches[selectedTab]?.color || '#1976d2',
                },
              },
            }}
          >
            {branches.map((branch: Branch, index: number) => (
              <Tab
                key={index}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {branch.icon}
                    <span>{branch.name}</span>
                  </Box>
                }
                sx={{
                  color: '#666',
                  '&.Mui-selected': {
                    color: branch.color,
                  },
                }}
                ref={(el: HTMLDivElement | null) => {
                  tabRefs.current[index] = el;
                }}
              />
            ))}
          </Tabs>
          {/* Custom Animated Indicator */}
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            style={{
              position: 'absolute',
              left: indicatorStyle.left,
              bottom: 0,
              width: indicatorStyle.width,
              height: 4,
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