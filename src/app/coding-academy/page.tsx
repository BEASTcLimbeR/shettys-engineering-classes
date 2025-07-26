"use client";

import React, { useState } from 'react';
import { Box, Typography, Container, Paper, Chip, Button, AppBar, Toolbar, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const CodingAcademyPage: React.FC = () => {
  const [isMainMode, setIsMainMode] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsMainMode(!isMainMode);
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToBasics = () => {
    router.push('/coding-academy/basics');
  };

  const programmingConcepts = [
    { icon: <CodeIcon />, title: "C Programming", desc: "Foundation & Core Concepts", color: "#00ff00" },
    { icon: <CodeIcon />, title: "C++ Advanced", desc: "Object-Oriented Programming", color: "#00ccff" },
    { icon: <SchoolIcon />, title: "Data Structures", desc: "Arrays, Lists, Trees, Graphs", color: "#ffaa00" },
    { icon: <SchoolIcon />, title: "Algorithms", desc: "Sorting, Searching, Optimization", color: "#ff00ff" },
    { icon: <CodeIcon />, title: "System Design", desc: "Low-Level Programming", color: "#ff4444" },
    { icon: <SchoolIcon />, title: "Competitive Coding", desc: "Problem Solving & Optimization", color: "#00ffff" }
  ];

  const features = [
    "Personal Mentoring & Progress Tracking",
    "Priority Doubt Support",
    "Curriculum for Beginners (No Experience Required)",
    "Real-World Problem Solving",
    "Industry Coding Standards",
    "Project-Based Learning",
    "Competitive Programming",
    "Mock Interviews & Resume Building",
    "Behavioral & Communication Skills",
    "Major MNCs Placement Papers",
    "Placement Guidance"
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#1a1a1a',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'monospace',
      }}
    >
      {/* Code Editor Style Background with Line Numbers */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 40px, #2a2a2a 40px, #2a2a2a 41px, #1a1a1a 41px, #1a1a1a 100px),
            repeating-linear-gradient(0deg, transparent, transparent 20px, #333 20px, #333 21px)
          `,
          opacity: 0.3,
        }}
      />

      {/* Navigation Bar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #333',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#00ff00',
              fontFamily: 'monospace',
              letterSpacing: '1px',
            }}
          >
            SHETTY_SIR_CODING_ACADEMY
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              onClick={scrollToTop}
              startIcon={<KeyboardArrowUpIcon />}
              sx={{
                color: '#cccccc',
                fontWeight: 600,
                fontFamily: 'monospace',
                '&:hover': { color: '#00ff00' },
              }}
            >
              TOP
            </Button>
            <Button
              onClick={navigateToBasics}
              startIcon={<MenuBookIcon />}
              sx={{
                color: '#cccccc',
                fontWeight: 600,
                fontFamily: 'monospace',
                '&:hover': { color: '#00ff00' },
              }}
            >
              BASICS
            </Button>
            <Button
              startIcon={<ScheduleIcon />}
              sx={{
                color: '#cccccc',
                fontWeight: 600,
                fontFamily: 'monospace',
                '&:hover': { color: '#00ff00' },
              }}
            >
              SCHEDULE
            </Button>
            <Button
              onClick={scrollToContact}
              startIcon={<ContactSupportIcon />}
              sx={{
                color: '#cccccc',
                fontWeight: 600,
                fontFamily: 'monospace',
                '&:hover': { color: '#00ff00' },
              }}
            >
              CONTACT
            </Button>
          </Box>

          {/* Toggle Switch */}
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            sx={{
              cursor: 'pointer',
              position: 'relative',
              width: '120px',
              height: '60px',
              borderRadius: '30px',
              background: '#333',
              border: '2px solid #00ff00',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
              },
            }}
          >
            <AnimatePresence mode="wait">
              {!isMainMode ? (
                <motion.div
                  key="developer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="/developer-toggle-switch.svg"
                    alt="Developer Mode"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="study"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="/study-toggle-switch.svg"
                    alt="Study Mode"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ pt: '80px' }}>
        <Container maxWidth="xl">
          {/* Hero Section - Code Editor Style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                textAlign: 'center',
                py: 12,
                position: 'relative',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* ASCII Art Border */}
              <Box
                sx={{
                  position: 'relative',
                  p: 6,
                  border: '2px solid #00ff00',
                  borderRadius: '8px',
                  background: 'rgba(0, 255, 0, 0.05)',
                  mb: 4,
                  maxWidth: '800px',
                  width: '100%',
                }}
              >
                {/* Top Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    right: '-2px',
                    height: '2px',
                    background: '#00ff00',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      height: '100%',
                      background: 'repeating-linear-gradient(90deg, #00ff00 0px, #00ff00 10px, transparent 10px, transparent 20px)',
                    },
                  }}
                />
                
                {/* Bottom Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '-2px',
                    right: '-2px',
                    height: '2px',
                    background: '#00ff00',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      height: '100%',
                      background: 'repeating-linear-gradient(90deg, #00ff00 0px, #00ff00 10px, transparent 10px, transparent 20px)',
                    },
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    fontWeight: 900,
                    mb: 2,
                    color: '#00ff00',
                    fontFamily: 'monospace',
                    letterSpacing: '2px',
                    lineHeight: 1.2,
                  }}
                >
                  SHETTY_SIR
                  <br />
                  CODING_ACADEMY
                </Typography>
                
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mb: 4,
                    color: '#cccccc',
                    fontStyle: 'italic',
                    fontFamily: 'monospace',
                    letterSpacing: '1px',
                  }}
                >
                  "Not Just coding - Career Engineering!"
                </Typography>

                <Box
                  sx={{
                    display: 'inline-block',
                    px: 6,
                    py: 3,
                    border: '2px solid #333',
                    borderRadius: '8px',
                    background: 'rgba(51, 51, 51, 0.5)',
                    mb: 6,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#ffffff',
                      fontWeight: 700,
                      fontFamily: 'monospace',
                    }}
                  >
                    Industry-Level C, C++, and Data Structures
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* Course Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Box sx={{ mb: 8 }}>
              <Grid container spacing={4}>
                <Grid component="div" sx={{ width: { xs: '100%', md: '33.333%' } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      background: 'rgba(51, 51, 51, 0.8)',
                      border: '2px solid #00ff00',
                      borderRadius: 3,
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0, 255, 0, 0.2)',
                        border: '2px solid #00ff00',
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#cccccc',
                        mb: 2,
                        fontWeight: 700,
                        fontFamily: 'monospace',
                      }}
                    >
                      DURATION
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#00ff00',
                        fontWeight: 900,
                        fontFamily: 'monospace',
                      }}
                    >
                      3.5_MONTHS
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid component="div" sx={{ width: { xs: '100%', md: '33.333%' } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      background: 'rgba(51, 51, 51, 0.8)',
                      border: '2px solid #00ccff',
                      borderRadius: 3,
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0, 204, 255, 0.2)',
                        border: '2px solid #00ccff',
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#cccccc',
                        mb: 2,
                        fontWeight: 700,
                        fontFamily: 'monospace',
                      }}
                    >
                      MODE
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#00ccff',
                        fontWeight: 900,
                        fontFamily: 'monospace',
                      }}
                    >
                      ONLINE/OFFLINE
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid component="div" sx={{ width: { xs: '100%', md: '33.333%' } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      background: 'rgba(51, 51, 51, 0.8)',
                      border: '2px solid #ffaa00',
                      borderRadius: 3,
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(255, 170, 0, 0.2)',
                        border: '2px solid #ffaa00',
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#cccccc',
                        mb: 2,
                        fontWeight: 700,
                        fontFamily: 'monospace',
                      }}
                    >
                      WEEKLY_ACTIVITIES
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#ffaa00',
                        fontWeight: 600,
                        fontFamily: 'monospace',
                      }}
                    >
                      CODING_CONTESTS_&_MOCK_INTERVIEWS
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </motion.div>

          {/* Programming Concepts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  mb: 6,
                  color: '#00ff00',
                  fontWeight: 700,
                  fontFamily: 'monospace',
                  letterSpacing: '2px',
                }}
              >
                CORE_CONCEPTS
              </Typography>
              
              <Grid container spacing={4}>
                {programmingConcepts.map((concept, index) => (
                  <Grid component="div" key={index} sx={{ width: { xs: '100%', sm: '50%', md: '33.333%' } }}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 4,
                          background: 'rgba(51, 51, 51, 0.8)',
                          border: `2px solid ${concept.color}`,
                          borderRadius: 3,
                          backdropFilter: 'blur(10px)',
                          textAlign: 'center',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: `0 20px 40px ${concept.color}20`,
                            border: `2px solid ${concept.color}`,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            color: concept.color,
                            fontSize: '3rem',
                            mb: 2,
                          }}
                        >
                          {concept.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#ffffff',
                            mb: 1,
                            fontWeight: 700,
                            fontFamily: 'monospace',
                          }}
                        >
                          {concept.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#cccccc',
                            fontFamily: 'monospace',
                          }}
                        >
                          {concept.desc}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Course Modules */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  mb: 6,
                  color: '#00ff00',
                  fontWeight: 700,
                  fontFamily: 'monospace',
                  letterSpacing: '2px',
                }}
              >
                COURSE_MODULES
              </Typography>
              
              <Box
                sx={{
                  background: 'rgba(51, 51, 51, 0.8)',
                  border: '2px solid #00ff00',
                  borderRadius: 3,
                  p: 4,
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Grid container spacing={3}>
                  {[
                    "Module_1: Foundations_of_C_and_C++",
                    "Module_2: Data_Structures_&_Algorithms",
                    "Module_3: System_Programming_&_Low_Level_Design",
                    "Module_4: Competitive_Coding_&_Performance_Optimization",
                    "Module_5: Mock_Interviews_&_Resume_Building"
                  ].map((module, index) => (
                    <Grid component="div" key={index} sx={{ width: { xs: '100%', md: '50%' } }}>
                      <Box
                        sx={{
                          p: 3,
                          border: '1px solid #333',
                          borderRadius: 2,
                          background: 'rgba(26, 26, 26, 0.5)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(51, 51, 51, 0.8)',
                            border: '1px solid #00ff00',
                            transform: 'translateX(5px)',
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#00ff00',
                            fontWeight: 600,
                            fontFamily: 'monospace',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              background: '#00ff00',
                              display: 'inline-block',
                            }}
                          />
                          {module}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  mb: 6,
                  color: '#00ff00',
                  fontWeight: 700,
                  fontFamily: 'monospace',
                  letterSpacing: '2px',
                }}
              >
                SPECIAL_FEATURES
              </Typography>
              
              <Grid container spacing={2}>
                {features.map((feature, index) => (
                  <Grid component="div" key={index} sx={{ width: { xs: '100%', sm: '50%', md: '33.333%' } }}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <Chip
                        label={feature}
                        sx={{
                          background: 'rgba(51, 51, 51, 0.8)',
                          color: '#cccccc',
                          border: '1px solid #333',
                          fontFamily: 'monospace',
                          fontWeight: 500,
                          fontSize: '0.9rem',
                          height: 'auto',
                          '& .MuiChip-label': {
                            whiteSpace: 'normal',
                            textAlign: 'center',
                            padding: '12px 16px',
                          },
                          '&:hover': {
                            background: 'rgba(0, 255, 0, 0.1)',
                            border: '1px solid #00ff00',
                            color: '#00ff00',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(0, 255, 0, 0.2)',
                          },
                        }}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <Box
              id="contact"
              sx={{
                background: 'rgba(51, 51, 51, 0.8)',
                border: '2px solid #00ff00',
                borderRadius: 3,
                p: 6,
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: '#00ff00',
                  mb: 4,
                  fontWeight: 700,
                  fontFamily: 'monospace',
                  letterSpacing: '2px',
                }}
              >
                GET_STARTED_TODAY
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: '#cccccc',
                  mb: 3,
                  fontWeight: 600,
                  fontFamily: 'monospace',
                }}
              >
                Contact_Shetty_Sir
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  color: '#00ff00',
                  fontWeight: 900,
                  fontFamily: 'monospace',
                  letterSpacing: '1px',
                  mb: 4,
                }}
              >
                M: 92094_55752
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 2,
                  background: '#00ff00',
                  color: '#1a1a1a',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  letterSpacing: '1px',
                  borderRadius: '8px',
                  '&:hover': {
                    background: '#00cc00',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 255, 0, 0.3)',
                  },
                }}
              >
                ENROLL_NOW
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default CodingAcademyPage; 