"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  Grid,
  TextField,
  Autocomplete,
  ListItem,
  ListItemText
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
  Build,
  Search as SearchIcon
} from '@mui/icons-material';
import BranchTabs from './BranchTabs';
import CourseAccordion from './CourseAccordion';

type CourseYearData = {
  FE?: string[];
  SE?: string[];
  TE?: string[];
  BE?: string[];
};

const CoursesSection = (): React.JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successSubject, setSuccessSubject] = useState('');
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const tab = tabRefs.current[selectedTab];
    if (tab) {
      setIndicatorStyle({ left: tab.offsetLeft, width: tab.offsetWidth });
    }
  }, [selectedTab]);

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
    },
    { 
      name: 'Civil', 
      icon: <Build sx={{ fontSize: 24 }} />,
      color: '#607d8b'
    }
  ];

  const coursesData: Record<string, CourseYearData> = {
    SPPU: {
      FE: ['Engineering Mathematics 1', 'Engineering Mathematics 2', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Basic Electronics Engineering', 'Programming and Problem Solving', 'Engineering Graphics', 'Engineering Physics', 'Engineering Chemistry', 'Fundamentals of Programming Languages'],
    },
    'E&TC': {
      FE: ['Engineering Mathematics 1', 'Engineering Mathematics 2', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Basic Electronics Engineering', 'Programming and Problem Solving', 'Engineering Graphics', 'Engineering Physics', 'Engineering Chemistry', 'Fundamentals of Programming Languages'],
      SE: ['Electrical Circuits', 'Electronics Circuits', 'Digital Circuits', 'Engineering Mathematics 3', 'Signal Systems', 'Control Systems'],
      TE: ['Digital Communication', 'Electromagnetic Field Theory', 'Microcontrollers', 'Database Management Systems', 'Power Device Circuits', 'Cellular Networks', 'Network Security'],
      BE: ['VLSI Design', 'Radiation and Microwave Theory', 'Cellular Networks', 'Digital Image Processing', 'Cloud Computing', 'JavaScript', 'Deep Learning', 'Digital Marketing', 'Fundamentals of Optical Communication'],
    },
    'CS': {
      FE: ['Engineering Mathematics 1', 'Engineering Mathematics 2', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Basic Electronics Engineering', 'Programming and Problem Solving', 'Engineering Graphics', 'Engineering Physics', 'Engineering Chemistry', 'Fundamentals of Programming Languages'],
      SE: ['Digital Electronics Logic Design', 'Object Oriented Programming with C++ and Java', 'Microprocessor', 'Engineering Mathematics 3', 'Software Engineering', 'Discrete Mathematics'],
      TE: ['Database Management Systems', 'Data Science and Big Data Analytics', 'System Programming and Operating Systems', 'Web Technology', 'Computer Networks', 'Network Security', 'Theory of Computation', 'Artificial Intelligence'],
      BE: ['Deep Learning', 'Machine Learning', 'Design and Analysis of Algorithms', 'Blockchain Technology', 'High Performance Computing', 'Natural Language Processing'],
    },
    'Electrical': {
      FE: ['Engineering Mathematics 1', 'Engineering Mathematics 2', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Basic Electronics Engineering', 'Programming and Problem Solving', 'Engineering Graphics', 'Engineering Physics', 'Engineering Chemistry', 'Fundamentals of Programming Languages'],
      SE: ['Analog and Digital Electronics', 'Network Analysis'],
      TE: ['Power Electronics', 'Advanced Microcontroller and Embedded Systems', 'Control Systems'],
      BE: ['Advanced Electrical Drives and Control', 'Advanced Control Systems'],
    },
    'IT': {
      FE: ['Engineering Mathematics 1', 'Engineering Mathematics 2', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Basic Electronics Engineering', 'Programming and Problem Solving', 'Engineering Graphics', 'Engineering Physics', 'Engineering Chemistry', 'Fundamentals of Programming Languages'],
      SE: ['Basics of Computer Networks', 'Digital Electronics Logic Design', 'Database Management Systems'],
      TE: ['Theory of Computation', 'Machine Learning', 'Operating Systems', 'Computer Networks and Security'],
      BE: ['Blockchain Technology', 'Distributed Systems', 'Deep Learning'],
    },
    'AI&DS': {
      FE: ['Engineering Mathematics 1', 'Engineering Mathematics 2', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Basic Electronics Engineering', 'Programming and Problem Solving', 'Engineering Graphics', 'Engineering Physics', 'Engineering Chemistry', 'Fundamentals of Programming Languages'],
      SE: ['Discrete Mathematics', 'Statistics and Probability', 'Internet of Things'],
      TE: ['Machine Learning', 'Data Science', 'Database Management Systems', 'Computer Networks', 'Artificial Neural Networks', 'Artificial Intelligence'],
      BE: ['Data Modeling and Visualization', 'Deep Learning', 'Distributed Computing', 'Computational Intelligence'],
    },
    'Mechanical': {
      FE: ['Engineering Mathematics 1', 'Engineering Mathematics 2', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Basic Electronics Engineering', 'Programming and Problem Solving', 'Engineering Graphics', 'Engineering Physics', 'Engineering Chemistry', 'Fundamentals of Programming Languages'],
      SE: ['Solid Mechanics', 'Engineering Thermodynamics', 'Electrical Electronics Engineering', 'Engineering Mathematics 3', 'Fluid Mechanics'],
      TE: ['Numerical and Statistical Methods', 'Heat and Mass Transfer', 'Design of Machine Elements', 'Artificial Intelligence and Machine Learning'],
      BE: ['Design of Machine Elements', 'Thermal Engineering', 'Computer Integrated Manufacturing'],
    },
    'Civil': {
      FE: ['Engineering Mathematics 1', 'Engineering Mathematics 2', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Basic Electronics Engineering', 'Programming and Problem Solving', 'Engineering Graphics', 'Engineering Physics', 'Engineering Chemistry', 'Fundamentals of Programming Languages'],
      SE: ['Fluid Mechanics', 'Solid Mechanics', 'Geotechnical Engineering', 'Structural Analysis'],
      TE: ['Design of Steel Structures', 'Design of Reinforced Concrete'],
      BE: ['Traffic Engineering', 'Structural Design 3'],
    },
  };

  // Get all subjects from all branches and years
  const allSubjects = useMemo(() => {
    const subjects: Array<{
      subject: string;
      branch: string;
      year: string;
      fullText: string;
    }> = [];
    
    // Function to get full year name
    const getYearName = (year: string): string => {
      switch (year) {
        case 'FE': return 'First Year';
        case 'SE': return 'Second Year';
        case 'TE': return 'Third Year';
        case 'BE': return 'Final Year';
        default: return year;
      }
    };

    Object.keys(coursesData).forEach(branchName => {
      Object.keys(coursesData[branchName]).forEach(year => {
        const yearData = coursesData[branchName as keyof typeof coursesData];
        const yearCourses = yearData[year as keyof CourseYearData];
        if (yearCourses && yearCourses.length > 0) {
          yearCourses.forEach(subject => {
            subjects.push({
              subject,
              branch: branchName,
              year,
              fullText: `${subject} (${branchName} - ${getYearName(year)})`
            });
          });
        }
      });
    });
    return subjects;
  }, [coursesData]);

  // Filter subjects based on search query
  const filteredSubjects = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allSubjects.filter(item => 
      item.subject.toLowerCase().includes(query) ||
      item.branch.toLowerCase().includes(query) ||
      item.year.toLowerCase().includes(query)
    ).slice(0, 10); // Limit to 10 suggestions
  }, [searchQuery, allSubjects]);

  const handleSubjectSelect = (selectedItem: string | {
    subject: string;
    branch: string;
    year: string;
    fullText: string;
  } | null) => {
    if (selectedItem && typeof selectedItem === 'object') {
      // Find the branch index and switch to it
      const branchIndex = branches.findIndex(b => b.name === selectedItem.branch);
      if (branchIndex !== -1) {
        setSelectedTab(branchIndex);
        
        // Show success message
        setSuccessSubject(selectedItem.subject);
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
        
        // Scroll to the specific subject after a short delay to ensure the tab switch is complete
        setTimeout(() => {
          const subjectElement = document.querySelector(`[data-subject="${selectedItem.subject}"][data-year="${selectedItem.year}"]`);
          if (subjectElement) {
            // Scroll to the subject with smooth animation
            subjectElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
            
            // Add highlight effect
            subjectElement.classList.add('subject-highlight');
            setTimeout(() => {
              subjectElement.classList.remove('subject-highlight');
            }, 2000);
          }
        }, 300);
      }
      setSearchQuery('');
    }
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
        {/* FE, SE, TE, BE Courses */}
        {['FE', 'SE', 'TE', 'BE'].map((year, yearIndex) => {
          // Skip SE, TE, BE for SPPU branch
          if (branch.name === 'SPPU' && year !== 'FE') {
            return null;
          }
          
          const yearCourses = courses[year as keyof CourseYearData];
          return yearCourses && yearCourses.length > 0 ? (
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
                  p: { xs: 2, sm: 3, md: 4 },
                  mb: 3,
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3,
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: { xs: 2, md: 3 }, 
                    color: branch.color,
                    fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.75rem' }
                  }}
                >
                  {year === 'FE' ? 'First Year' : year === 'SE' ? 'Second Year' : year === 'TE' ? 'Third Year' : 'Final Year'} Engineering
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: { xs: 0.5, sm: 1 },
                  justifyContent: { xs: 'center', sm: 'flex-start' }
                }}>
                  {yearCourses.map((subject: string, index: number) => (
                    <Chip
                      key={index}
                      label={subject}
                      data-subject={subject}
                      data-year={year}
                      onClick={() => {
                        // Add a subtle highlight effect when clicked
                        const chip = document.querySelector(`[data-subject="${subject}"][data-year="${year}"]`);
                        if (chip) {
                          chip.classList.add('subject-highlight');
                          setTimeout(() => {
                            chip.classList.remove('subject-highlight');
                          }, 1000);
                        }
                      }}
                      sx={{
                        background: `${branch.color}15`,
                        color: branch.color,
                        fontWeight: 600,
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        height: { xs: 28, sm: 32 },
                        mb: { xs: 0.5, sm: 0 },
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: `${branch.color}25`,
                          transform: 'scale(1.05)',
                          boxShadow: `0 4px 12px ${branch.color}40`,
                        },
                        '&:active': {
                          transform: 'scale(0.95)',
                        },
                        // Highlight effect for searched subjects
                        '&.subject-highlight': {
                          background: `${branch.color}40`,
                          transform: 'scale(1.1)',
                          boxShadow: `0 8px 24px ${branch.color}60`,
                          animation: 'pulse 2s ease-in-out',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          ) : null;
        })}
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
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(25, 118, 210, 0.05)',
          filter: 'blur(40px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255, 107, 53, 0.05)',
          filter: 'blur(30px)',
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
              Our Courses
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#666',
                fontWeight: 400,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Comprehensive coaching for all Engineering Branches, Years and Patterns.
            </Typography>
          </Box>
        </motion.div>

        {/* Search Section - Moved above Branch Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1976d2' }}>
              🔍 Search Subjects
            </Typography>
            <Autocomplete
              freeSolo
              options={filteredSubjects}
              getOptionLabel={(option) => 
                typeof option === 'string' ? option : option.fullText
              }
              inputValue={searchQuery}
              onInputChange={(event, newInputValue) => {
                setSearchQuery(newInputValue);
              }}
              onChange={(event, newValue) => {
                handleSubjectSelect(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search subjects (e.g., 'Engineering', 'Programming', 'Mathematics')"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                      backgroundColor: 'white',
                      '&:hover': {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1976d2',
                        },
                      },
                      '&.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1976d2',
                        },
                      },
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <SearchIcon sx={{ color: '#1976d2', mr: 1 }} />
                    ),
                  }}
                />
              )}
              renderOption={(props, option) => {
                const { key, ...otherProps } = props;
                return (
                  <ListItem 
                    key={key} 
                    {...otherProps} 
                    sx={{ 
                      py: 1,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      borderRadius: 1,
                      mx: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        transform: 'translateX(4px)',
                      },
                      '&:active': {
                        backgroundColor: 'rgba(25, 118, 210, 0.12)',
                        transform: 'translateX(6px)',
                      }
                    }}
                  >
                    <ListItemText
                      primary={option.subject}
                      secondary={`${option.branch} - ${option.year}`}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        color: '#1976d2',
                      }}
                      secondaryTypographyProps={{
                        fontSize: '0.85rem',
                        color: '#666',
                      }}
                    />
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      color: '#1976d2',
                      opacity: 0.7,
                      transition: 'opacity 0.2s ease',
                      '&:hover': {
                        opacity: 1,
                      }
                    }}>
                      <Typography variant="caption" sx={{ mr: 1, fontWeight: 600 }}>
                        Tap to navigate
                      </Typography>
                      <Box sx={{ 
                        width: 16, 
                        height: 16, 
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.6rem',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        →
                      </Box>
                    </Box>
                  </ListItem>
                );
              }}
              PaperComponent={({ children, ...props }) => (
                <Paper
                  {...props}
                  sx={{
                    mt: 1,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    borderRadius: 2,
                    '& .MuiAutocomplete-listbox': {
                      py: 0,
                    },
                  }}
                >
                  {children}
                </Paper>
              )}
            />
            
            {/* Search Tips */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                💡 <strong>Search Tips:</strong> Try searching for "Engineering", "Programming", "Mathematics", "Physics", "Chemistry", "Mechanics", "Electrical", "Computer", etc.
              </Typography>
            </Box>
            
            {/* Success Message */}
            {showSuccessMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Box sx={{ 
                  mt: 2, 
                  p: 2, 
                  background: 'linear-gradient(135deg, #4caf50, #66bb6a)', 
                  borderRadius: 2,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Box sx={{ 
                    width: 20, 
                    height: 20, 
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem'
                  }}>
                    ✓
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Navigated to <strong>{successSubject}</strong> in {branches[selectedTab]?.name} branch
                  </Typography>
                </Box>
              </motion.div>
            )}
          </Box>
        </motion.div>

        {/* Branch Tabs */}
        <BranchTabs
          branches={branches}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />

        {/* Course Content */}
        <CourseAccordion
          branch={branches[selectedTab].name}
          coursesData={coursesData}
          onBranchChange={(branchName: string) => {
            const branchIndex = branches.findIndex(b => b.name === branchName);
            if (branchIndex !== -1) {
              setSelectedTab(branchIndex);
            }
          }}
        />

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
              p: { xs: 3, sm: 4, md: 5 },
              mt: 4,
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              borderRadius: 3,
              textAlign: 'center',
              color: 'white',
              boxShadow: '0 8px 32px rgba(255, 107, 53, 0.2)',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
              Other Universities
            </Typography>
            
            {/* Indian Universities */}
            <Box sx={{ mb: 5 }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 700, 
                mb: 3, 
                color: 'white', 
                textAlign: 'center',
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                🇮🇳 Indian Universities
              </Typography>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: { xs: 3, sm: 4 },
                fontSize: '0.9rem',
                lineHeight: 1.8
              }}>
                <Box sx={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 2, 
                  p: 2,
                  backdropFilter: 'blur(10px)'
                }}>
                  <Typography sx={{ 
                    fontWeight: 700, 
                    mb: 2, 
                    color: 'rgba(255,255,255,0.95)',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    📍 Pune, Maharashtra
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• SPPU, PUNE (Savitribai Phule Pune University)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• MIT WPU, Pune (MIT World Peace University)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• COEP, Pune (College of Engineering, Pune)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• VIT, Pune (Vishwakarma Institute of Technology)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Cummins, Pune (Cummins College of Engineering for Women)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• MIT ADT, Pune (MIT Art, Design and Technology University)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• GPP, Pune (Government Polytechnic Pune)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Symbiosis International University, Pune</Typography>
                  </Box>
                </Box>
                <Box sx={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 2, 
                  p: 2,
                  backdropFilter: 'blur(10px)'
                }}>
                  <Typography sx={{ 
                    fontWeight: 700, 
                    mb: 2, 
                    color: 'rgba(255,255,255,0.95)',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    📍 Other Maharashtra
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• RSTM, Nagpur (Rashtrasant Tukadoji Maharaj Nagpur University)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Amravati University, Amravati (Sant Gadge Baba Amravati University)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Shivaji University, Kolhapur</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Mumbai University, Mumbai (University of Mumbai)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Marathwada University, Nanded (Swami Ramanand Teerth Marathwada University)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• DBATU, Lonere (Dr. Babasaheb Ambedkar Technological University)</Typography>
                  </Box>
                </Box>
                <Box sx={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 2, 
                  p: 2,
                  backdropFilter: 'blur(10px)'
                }}>
                  <Typography sx={{ 
                    fontWeight: 700, 
                    mb: 2, 
                    color: 'rgba(255,255,255,0.95)',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    📍 Other States
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• IIT, Guwahati (Indian Institute of Technology Guwahati, Assam)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• VTU, Karnataka (Visvesvaraya Technological University, Karnataka)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• SDM, Dharwad (Shri Dharmasthala Manjunatheshwara College of Engineering and Technology, Karnataka)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• MIT, Manipal (Manipal Institute of Technology, Karnataka)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• AMIE, Kolkata (Associate Member of the Institution of Engineers, West Bengal)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• AKU, Patna (Aryabhatta Knowledge University, Bihar)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Delhi University, Delhi</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Foreign Universities */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 700, 
                mb: 3, 
                color: 'white', 
                textAlign: 'center',
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                🌍 Foreign Universities
              </Typography>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: { xs: 3, sm: 4 },
                fontSize: '0.9rem',
                lineHeight: 1.8
              }}>
                <Box sx={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 2, 
                  p: 2,
                  backdropFilter: 'blur(10px)'
                }}>
                  <Typography sx={{ 
                    fontWeight: 700, 
                    mb: 2, 
                    color: 'rgba(255,255,255,0.95)',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    🌎 North America
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• McGill University, Canada</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Rice University, Texas, USA</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Rutgers University, New Jersey, USA</Typography>
                  </Box>
                </Box>
                <Box sx={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 2, 
                  p: 2,
                  backdropFilter: 'blur(10px)'
                }}>
                  <Typography sx={{ 
                    fontWeight: 700, 
                    mb: 2, 
                    color: 'rgba(255,255,255,0.95)',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    🇪🇺 Europe
            </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• Queen Mary University of London, UK</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• SRH Germany, Berlin (SRH University Berlin)</Typography>
                    <Typography sx={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>• University of Bremen, Germany</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Chip
              label={
                <span dangerouslySetInnerHTML={{
                  __html: "Batches and One-to-One Tuition"
                    .replace(/Batches/g, '<span style="color: #000000; font-weight: 800;">Batches</span>')
                    .replace(/One-to-One/g, '<span style="color: #000000; font-weight: 800;">One-to-One</span>')
                }} />
              }
              sx={{
                mt: 3,
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 600,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                px: 3,
                py: 1,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            />
          </Paper>
        </motion.div>
      </Container>
      
      {/* Global Styles for Subject Highlight Animation */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1.1);
            box-shadow: 0 8px 24px rgba(25, 118, 210, 0.6);
          }
          50% { 
            transform: scale(1.15);
            box-shadow: 0 12px 32px rgba(25, 118, 210, 0.8);
          }
        }
        
        .subject-highlight {
          animation: pulse 2s ease-in-out !important;
        }
      `}</style>
    </Box>
  );
};

export default CoursesSection; 