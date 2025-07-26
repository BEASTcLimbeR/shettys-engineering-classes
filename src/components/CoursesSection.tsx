"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Tabs, 
  Tab, 
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  ExpandMore, 
  School, 
  Computer, 
  Memory, 
  ElectricBolt,
  Storage,
  Psychology,
  Build
} from '@mui/icons-material';

type CourseYearData = {
  FE: string[];
  SE: string[];
  TE: string[];
  BE: string[];
};

const CoursesSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const branches = [
    { 
      name: 'SPPU', 
      icon: <School sx={{ fontSize: 24 }} />,
      color: '#1976d2'
    },
    { 
      name: 'E&TC', 
      icon: <Memory sx={{ fontSize: 24 }} />,
      color: '#2196f3'
    },
    { 
      name: 'CS', 
      icon: <Computer sx={{ fontSize: 24 }} />,
      color: '#4caf50'
    },
    { 
      name: 'Electrical', 
      icon: <ElectricBolt sx={{ fontSize: 24 }} />,
      color: '#ff9800'
    },
    { 
      name: 'IT', 
      icon: <Storage sx={{ fontSize: 24 }} />,
      color: '#9c27b0'
    },
    { 
      name: 'AI&DS', 
      icon: <Psychology sx={{ fontSize: 24 }} />,
      color: '#f44336'
    },
    { 
      name: 'Mechanical', 
      icon: <Build sx={{ fontSize: 24 }} />,
      color: '#795548'
    }
  ];

  const coursesData: Record<string, CourseYearData> = {
    SPPU: {
      FE: ['M1', 'M2', 'Mechanics', 'BEE', 'BXE', 'Python(PPS)'],
      SE: [],
      TE: [],
      BE: [],
    },
    'E&TC': {
      FE: [],
      SE: ['EC', 'ELC', 'DC', 'M3', 'SS', 'CS'],
      TE: ['DC', 'EMFT', 'MC', 'DBMS', 'PDC', 'CNW', 'NS'],
      BE: ['VLSI', 'RMT', 'CN', 'DIP', 'CC', 'FOC', 'DM', 'DL'],
    },
    'CS': {
      FE: [],
      SE: ['DELD', 'OOP', 'MP', 'M3', 'SE', 'DM'],
      TE: ['DBMS', 'DSBDA', 'SPOS', 'WT', 'CNS', 'TOC'],
      BE: ['DL', 'ML', 'DAA', 'Blockchain', 'HPC', 'NLP'],
    },
    'Electrical': {
      FE: [],
      SE: ['ADE', 'NA'],
      TE: ['PE', 'AMES', 'CS'],
      BE: ['AEDC', 'ACS'],
    },
    'IT': {
      FE: [],
      SE: ['BCN', 'LDCO'],
      TE: ['DBMS', 'ML', 'TOC', 'OS', 'DSBDA', 'CNS'],
      BE: ['Blockchain', 'DL', 'DS'],
    },
    'AI&DS': {
      FE: [],
      SE: ['M3', 'DM', 'SE', 'IOT'],
      TE: ['DBMS', 'CN', 'AI', 'DS', 'ANN'],
      BE: ['DC', 'ML'],
    },
    'Mechanical': {
      FE: [],
      SE: ['SM', 'EEE', 'ET'],
      TE: ['DME', 'AI&ML'],
      BE: ['DOM', 'TM', 'CIM'],
    },
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const renderCourses = () => {
    const branch = branches[selectedTab];
    const courses = coursesData[branch.name as keyof typeof coursesData];

    if (!courses) return null;

    return (
      <Box sx={{ mt: 4 }}>
        {/* FE Courses */}
        {courses.FE && courses.FE.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 3,
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 3,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: branch.color }}>
                First Year Engineering (FE)
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {courses.FE.map((course, index) => (
                  <Chip
                    key={index}
                    label={course}
                    sx={{
                      background: `${branch.color}15`,
                      color: branch.color,
                      fontWeight: 600,
                      '&:hover': {
                        background: `${branch.color}25`,
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </motion.div>
        )}
        {/* SE, TE, BE Courses */}
        {['SE', 'TE', 'BE'].map((year, yearIndex) =>
          courses[year as keyof CourseYearData] && courses[year as keyof CourseYearData].length > 0 ? (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  mb: 3,
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: branch.color }}>
                  {year === 'SE' ? 'Second Year' : year === 'TE' ? 'Third Year' : 'Final Year'} Engineering ({year})
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {courses[year as keyof CourseYearData].map((subject: string, index: number) => (
                    <Chip
                      key={index}
                      label={subject}
                      sx={{
                        background: `${branch.color}15`,
                        color: branch.color,
                        fontWeight: 600,
                        '&:hover': {
                          background: `${branch.color}25`,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          ) : null
        )}
        {/* If no courses, show a message */}
        {(!courses.FE || courses.FE.length === 0) &&
          (!courses.SE || courses.SE.length === 0) &&
          (!courses.TE || courses.TE.length === 0) &&
          (!courses.BE || courses.BE.length === 0) && (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                Courses for this branch will be available soon.
              </Typography>
            </Box>
          )}
      </Box>
    );
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'rgba(25, 118, 210, 0.05)',
          filter: 'blur(50px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 107, 53, 0.05)',
          filter: 'blur(40px)',
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 900,
                mb: 2,
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Courses Offered
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#666',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Comprehensive engineering coaching across all branches and universities
            </Typography>
          </Box>
        </motion.div>

        {/* Branch Tabs */}
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
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
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
                '& .MuiTabs-indicator': {
                  backgroundColor: branches[selectedTab]?.color || '#1976d2',
                  height: '4px',
                },
              }}
            >
              {branches.map((branch, index) => (
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
                />
              ))}
            </Tabs>
          </Paper>
        </motion.div>

        {/* Course Content */}
        {renderCourses()}

        {/* Other Universities Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mt: 4,
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              borderRadius: 3,
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Other Universities
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.95 }}>
              All other Indian and Foreign Universities - Any Branch, Any Subject
            </Typography>
            <Chip
              label="One-to-One Tuition Only"
              sx={{
                mt: 2,
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            />
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CoursesSection; 