import React from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Grid, 
  Chip, 
  Box, 
  Button,
  Paper
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

interface CourseAccordionProps {
  branch: string;
  coursesData: any;
  onBranchChange: (branch: string) => void;
}

const CourseAccordion = ({ branch, coursesData, onBranchChange }: CourseAccordionProps) => {
  const years = ['FE', 'SE', 'TE', 'BE'];
  const otherBranches = ['E&TC', 'CS', 'Electrical', 'IT', 'AI&DS', 'Mechanical', 'Civil'];

  // Function to get full year name
  const getYearName = (year: string) => {
    switch (year) {
      case 'FE': return 'First Year';
      case 'SE': return 'Second Year';
      case 'TE': return 'Third Year';
      case 'BE': return 'Final Year';
      default: return year;
    }
  };

  // Function to get year color and gradient
  const getYearStyle = (year: string) => {
    switch (year) {
      case 'FE': 
        return {
          gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: '#1976d2',
          borderColor: '#1976d2'
        };
      case 'SE': 
        return {
          gradient: 'linear-gradient(135deg, #388e3c 0%, #2e7d32 100%)',
          color: '#388e3c',
          borderColor: '#388e3c'
        };
      case 'TE': 
        return {
          gradient: 'linear-gradient(135deg, #f57c00 0%, #ef6c00 100%)',
          color: '#f57c00',
          borderColor: '#f57c00'
        };
      case 'BE': 
        return {
          gradient: 'linear-gradient(135deg, #7b1fa2 0%, #6a1b9a 100%)',
          color: '#7b1fa2',
          borderColor: '#7b1fa2'
        };
      default: 
        return {
          gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: '#1976d2',
          borderColor: '#1976d2'
        };
    }
  };

  // Function to get branch color
  const getBranchColor = (branchName: string) => {
    switch (branchName) {
      case 'E&TC': return '#2196f3';
      case 'CS': return '#4caf50';
      case 'Electrical': return '#ff9800';
      case 'IT': return '#9c27b0';
      case 'AI&DS': return '#f44336';
      case 'Mechanical': return '#795548';
      case 'Civil': return '#607d8b';
      default: return '#1976d2';
    }
  };

  return (
    <Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {years.map((year, index) => {
          // Skip SE, TE, BE for SPPU branch
          if (branch === 'SPPU' && year !== 'FE') {
            return null;
          }
          
          const yearStyle = getYearStyle(year);
          
          return (
            <Box key={year} sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '48%' } }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    background: 'rgba(255, 255, 255, 0.98)',
                    border: `1px solid rgba(0, 0, 0, 0.08)`,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                      borderColor: yearStyle.borderColor,
                    },
                  }}
                >
                  <Accordion
                    sx={{
                      background: 'transparent',
                      boxShadow: 'none',
                      '&:before': {
                        display: 'none',
                      },
                      '&.Mui-expanded': {
                        margin: 0,
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <Box
                          sx={{
                            background: yearStyle.gradient,
                            borderRadius: '50%',
                            width: 28,
                            height: 28,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        >
                          <ExpandMore sx={{ fontSize: 18 }} />
                        </Box>
                      }
                      sx={{
                        background: 'rgba(248, 249, 250, 0.8)',
                        color: '#333',
                        minHeight: 64,
                        borderBottom: `2px solid ${yearStyle.borderColor}`,
                        '&:hover': {
                          background: 'rgba(248, 249, 250, 0.95)',
                        },
                        '& .MuiAccordionSummary-content': {
                          margin: 0,
                          alignItems: 'center',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: yearStyle.gradient,
                            flexShrink: 0,
                          }}
                        />
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            color: '#333',
                          }}
                        >
                          {getYearName(year)}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        background: 'rgba(255, 255, 255, 0.98)',
                        p: 3,
                      }}
                    >
                      {coursesData[branch][year] && coursesData[branch][year].length > 0 ? (
                        <Box>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: yearStyle.color, 
                              fontWeight: 500, 
                              mb: 2,
                              fontSize: '0.85rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                            }}
                          >
                            {coursesData[branch][year].length} Courses Available
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {coursesData[branch][year].map((course: string, idx: number) => (
                              <Box key={idx}>
                                <Chip 
                                  label={course} 
                                  variant="outlined" 
                                  size="small"
                                  sx={{ 
                                    fontWeight: 500,
                                    fontSize: '0.95rem',
                                    borderColor: 'rgba(0, 0, 0, 0.12)',
                                    color: '#555',
                                    '&:hover': {
                                      background: `${yearStyle.color}08`,
                                      borderColor: yearStyle.color,
                                      color: yearStyle.color,
                                    },
                                  }} 
                                />
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      ) : (
                        <Box sx={{ textAlign: 'center', py: 3 }}>
                          <SchoolIcon sx={{ fontSize: 32, color: '#ccc', mb: 1 }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            Courses coming soon for {getYearName(year)}
                          </Typography>
                        </Box>
                      )}
                    </AccordionDetails>
                  </Accordion>
                </Paper>
              </motion.div>
            </Box>
          );
        })}
      </Box>
      
      {/* Branch Navigation for SPPU */}
      {branch === 'SPPU' && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1976d2' }}>
            Explore Other Branches:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {otherBranches.map((branchName) => {
              const branchColor = getBranchColor(branchName);
              return (
                <Button
                  key={branchName}
                  variant="outlined"
                  onClick={() => onBranchChange(branchName)}
                  sx={{
                    borderColor: branchColor,
                    color: branchColor,
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: branchColor,
                      color: 'white',
                      borderColor: branchColor,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 4px 12px ${branchColor}40`,
                    },
                  }}
                >
                  {branchName}
                </Button>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CourseAccordion;