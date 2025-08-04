"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper, Chip, Button, AppBar, Toolbar, Grid, IconButton, Card } from '@mui/material';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CoffeeIcon from '@mui/icons-material/Coffee';
import MemoryIcon from '@mui/icons-material/Memory';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DiamondIcon from '@mui/icons-material/Diamond';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const CodingAcademyPage: React.FC = () => {
  const [isMainMode, setIsMainMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [particleCount, setParticleCount] = useState(50);

  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    // Play toggle sound
    const audio = new Audio('/toggle.mp3');
    audio.play().catch(error => {
      console.log('Audio play failed:', error);
    });
    
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
    { icon: <CodeIcon />, title: "C Programming", desc: "Foundation & Core Concepts", color: "#00ff00", gradient: "linear-gradient(135deg, #00ff00, #00cc00)" },
    { icon: <CodeIcon />, title: "C++ Advanced", desc: "Object-Oriented Programming", color: "#00ccff", gradient: "linear-gradient(135deg, #00ccff, #0099cc)" },
    { icon: <SchoolIcon />, title: "Data Structures", desc: "Arrays, Lists, Trees, Graphs", color: "#ffaa00", gradient: "linear-gradient(135deg, #ffaa00, #ff8800)" },
    { icon: <SchoolIcon />, title: "Algorithms", desc: "Sorting, Searching, Optimization", color: "#ff00ff", gradient: "linear-gradient(135deg, #ff00ff, #cc00cc)" },
    { icon: <CodeIcon />, title: "System Design", desc: "Low-Level Programming", color: "#ff4444", gradient: "linear-gradient(135deg, #ff4444, #cc0000)" },
    { icon: <SchoolIcon />, title: "Competitive Coding", desc: "Problem Solving & Optimization", color: "#00ffff", gradient: "linear-gradient(135deg, #00ffff, #00cccc)" }
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
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'monospace',
      }}
    >
      {/* 3D Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)
          `,
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        style={{
          position: 'fixed',
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
      />

      {/* Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #00d4ff, #0099cc, #ff6b35)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 10000,
        }}
      />

      {/* Navigation Bar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 0 },
          py: { xs: 1, sm: 1 },
          px: { xs: 1, sm: 2 }
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Box
              component="img"
              src="/coding-logo.svg"
              alt="Coding Academy Logo"
              sx={{
                width: { xs: 28, sm: 36, md: 40 },
                height: { xs: 28, sm: 36, md: 40 },
                filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.3))',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'drop-shadow(0 0 12px rgba(0, 255, 0, 0.5))',
                  transform: 'scale(1.05)',
                },
              }}
            />
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem', lg: '0.9rem' },
                  letterSpacing: '0.5px',
                  fontFamily: 'monospace',
                  textAlign: { xs: 'center', sm: 'left' },
                  mb: 0.5,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal',
                  wordBreak: 'break-all',
                  lineHeight: 1.2,
                  maxHeight: '2.4em',
                }}
              >
                SHETTY_SIR's{'\n'}CODING_ACADEMY
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#00d4ff',
                  fontWeight: 600,
                  fontSize: { xs: '0.5rem', sm: '0.7rem', md: '0.8rem' },
                  letterSpacing: '0.5px',
                  fontFamily: 'monospace',
                  textAlign: { xs: 'center', sm: 'left' },
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                Code, Create, Conquer!
              </Typography>
            </Box>
          </motion.div>
          
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 0.5, sm: 2 },
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '100%', sm: 'auto' }
          }}>
            {[
              { icon: <KeyboardArrowUpIcon />, label: 'TOP', action: scrollToTop },
              { icon: <MenuBookIcon />, label: 'BASICS', action: navigateToBasics },
              { icon: <ScheduleIcon />, label: 'SCHEDULE', action: () => {} },
              { icon: <ContactSupportIcon />, label: 'CONTACT', action: scrollToContact }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={item.action}
                  startIcon={item.icon}
                  sx={{
                    color: '#cccccc',
                    fontWeight: 600,
                    fontFamily: 'monospace',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 2,
                    px: { xs: 1, sm: 2, md: 3 },
                    py: { xs: 0.5, sm: 1 },
                    fontSize: { xs: '0.6rem', sm: '0.8rem', md: '0.875rem' },
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    minWidth: { xs: 'auto', sm: 'auto' },
                    maxWidth: { xs: '80px', sm: 'none' },
                    '& .MuiButton-startIcon': {
                      marginRight: { xs: 0.5, sm: 1 },
                    },
                    '&:hover': { 
                      color: '#00ff00',
                      background: 'rgba(0, 255, 0, 0.1)',
                      border: '1px solid #00ff00',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
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
              width: { xs: '80px', sm: '120px' },
              height: { xs: '40px', sm: '60px' },
              borderRadius: { xs: '20px', sm: '30px' },
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                textAlign: 'center',
                py: { xs: 6, sm: 8, md: 12 },
                px: { xs: 2, sm: 3, md: 4 },
                position: 'relative',
                minHeight: { xs: '60vh', sm: '70vh', md: '80vh' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Glowing Border Effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 0, 0.3)',
                    '0 0 40px rgba(0, 255, 0, 0.6)',
                    '0 0 20px rgba(0, 255, 0, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'relative',
                  padding: '2rem',
                  border: '2px solid #00ff00',
                  borderRadius: '20px',
                  background: 'rgba(0, 255, 0, 0.05)',
                  backdropFilter: 'blur(20px)',
                  maxWidth: '900px',
                  width: '100%',
                  margin: '1rem',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      px: { xs: 3, sm: 4, md: 6 },
                      py: { xs: 4, sm: 5, md: 6 },
                      border: '2px solid #00ff00',
                      borderRadius: '15px',
                      background: 'rgba(15, 15, 35, 0.95)',
                      backdropFilter: 'blur(20px)',
                      mb: { xs: 4, sm: 6 },
                      position: 'relative',
                      overflow: 'hidden',
                      width: '100%',
                      maxWidth: '800px',
                      mx: 'auto',
                      boxShadow: '0 8px 32px rgba(0, 255, 0, 0.2)',
                    }}
                  >
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(90deg, transparent 0%, rgba(0, 255, 0, 0.1) 50%, transparent 100%)',
                          'linear-gradient(90deg, transparent 0%, rgba(0, 255, 0, 0.3) 50%, transparent 100%)',
                          'linear-gradient(90deg, transparent 0%, rgba(0, 255, 0, 0.1) 50%, transparent 100%)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    
                    {/* Title */}
                    <Box sx={{ textAlign: 'center', mb: { xs: 1, sm: 2 } }}>
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '2.5rem', xl: '3rem' },
                          fontWeight: 900,
                          color: '#ffffff',
                          lineHeight: 1.3,
                          textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
                          fontFamily: 'monospace',
                          letterSpacing: { xs: '0.5px', sm: '1px', md: '1.5px' },
                          textAlign: 'center',
                          display: 'block',
                          wordBreak: 'break-all',
                          overflowWrap: 'break-word',
                          hyphens: 'manual',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        SHETTY_SIR's{'\n'}CODING_ACADEMY
                      </Typography>
                    </Box>
                    
                    {/* Slogan */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '2rem' },
                        fontWeight: 600,
                        mb: { xs: 3, sm: 4 },
                        color: '#00d4ff',
                        fontFamily: 'monospace',
                        letterSpacing: { xs: '1px', sm: '2px' },
                        textAlign: 'center',
                      }}
                    >
                      Code, Create, Conquer!
                    </Typography>
                    
                    {/* Course Details Box */}
                    <Box
                      sx={{
                        display: 'inline-block',
                        px: { xs: 3, sm: 4, md: 5 },
                        py: { xs: 2, sm: 3 },
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        textAlign: 'center',
                        minWidth: '200px',
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#ffffff',
                          fontWeight: 600,
                          fontFamily: 'monospace',
                          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                          lineHeight: 1.4,
                        }}
                      >
                        Industry-Level C, C++, and<br />
                        Data Structures
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </motion.div>
            </Box>
          </motion.div>

          {/* Course Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Box sx={{ mb: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: 60 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Course Overview
                </Typography>
              </motion.div>
              
                             <Box sx={{ 
                 display: 'grid',
                 gridTemplateColumns: { 
                   xs: '1fr', 
                   sm: 'repeat(2, 1fr)', 
                   md: 'repeat(3, 1fr)' 
                 },
                 gap: { xs: 2, sm: 3, md: 4 },
                 justifyContent: 'center'
               }}>
                 {[
                   { title: "DURATION", value: "3.5_MONTHS", color: "#00ff00", icon: <ScheduleIcon /> },
                   { title: "MODE", value: "ONLINE/OFFLINE", color: "#00ccff", icon: <CodeIcon /> },
                   { title: "WEEKLY_ACTIVITIES", value: "CODING_CONTESTS_&_MOCK_INTERVIEWS", color: "#ffaa00", icon: <TrendingUpIcon /> }
                 ].map((item, index) => (
                   <Box key={index}>
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: index * 0.1 }}
                     whileHover={{ scale: 1.05, y: -10 }}
                   >
                     <Paper
                       elevation={0}
                       sx={{
                         p: { xs: 2, sm: 3, md: 4 },
                         background: 'rgba(255, 255, 255, 0.05)',
                         backdropFilter: 'blur(20px)',
                         border: `2px solid ${item.color}40`,
                         borderRadius: 3,
                         textAlign: 'center',
                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                         transition: 'all 0.3s ease',
                         cursor: 'pointer',
                         '&:hover': {
                           transform: 'translateY(-10px)',
                           boxShadow: `0 20px 40px ${item.color}20`,
                           border: `2px solid ${item.color}`,
                         },
                       }}
                     >
                       <Box
                         sx={{
                           color: item.color,
                           fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                           mb: { xs: 1, sm: 2 },
                         }}
                       >
                         {item.icon}
                       </Box>
                       <Typography
                         variant="h5"
                         sx={{
                           color: '#cccccc',
                           mb: { xs: 1, sm: 2 },
                           fontWeight: 700,
                           fontFamily: 'monospace',
                           fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                         }}
                       >
                         {item.title}
                       </Typography>
                       <Typography
                         variant="h4"
                         sx={{
                           color: item.color,
                           fontWeight: 900,
                           fontFamily: 'monospace',
                           fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                         }}
                       >
                         {item.value}
                       </Typography>
                     </Paper>
                   </motion.div>
                 </Box>
               ))}
             </Box>
            </Box>
          </motion.div>

          {/* Programming Concepts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Box sx={{ mb: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: 60 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Core Concepts
                </Typography>
              </motion.div>
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr', 
                  sm: 'repeat(2, 1fr)', 
                  md: 'repeat(3, 1fr)' 
                },
                gap: { xs: 2, sm: 3, md: 4 },
                justifyContent: 'center',
                maxWidth: '1200px',
                mx: 'auto'
              }}>
                {programmingConcepts.map((concept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        p: { xs: 2, sm: 3, md: 4 },
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: `2px solid ${concept.color}40`,
                        borderRadius: 3,
                        textAlign: 'center',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: `0 20px 40px ${concept.color}20`,
                          border: `2px solid ${concept.color}`,
                        },
                      }}
                    >
                      <motion.div
                        animate={{
                          background: hoveredCard === index ? concept.gradient : 'transparent',
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          opacity: 0.1,
                        }}
                      />
                      <Box
                        sx={{
                          color: concept.color,
                          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                          mb: { xs: 1, sm: 2 },
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
                          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                        }}
                      >
                        {concept.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#cccccc',
                          fontFamily: 'monospace',
                          fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' },
                        }}
                      >
                        {concept.desc}
                      </Typography>
                    </Card>
                  </motion.div>
                ))}
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: 60 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Special Features
                </Typography>
              </motion.div>
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr', 
                  sm: 'repeat(2, 1fr)', 
                  md: 'repeat(3, 1fr)' 
                },
                gap: { xs: 1, sm: 2 },
                justifyContent: 'center'
              }}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <Chip
                      label={feature}
                      sx={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#cccccc',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        fontFamily: 'monospace',
                        fontWeight: 500,
                        fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                        height: 'auto',
                        backdropFilter: 'blur(20px)',
                        width: '100%',
                        '& .MuiChip-label': {
                          whiteSpace: 'normal',
                          textAlign: 'center',
                          padding: { xs: '8px 12px', sm: '10px 14px', md: '12px 16px' },
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
                ))}
              </Box>
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
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '2px solid #00ff00',
                borderRadius: 3,
                p: { xs: 3, sm: 4, md: 6 },
                textAlign: 'center',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                mx: { xs: 2, sm: 3, md: 0 },
              }}
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(90deg, transparent 0%, rgba(0, 255, 0, 0.1) 50%, transparent 100%)',
                    'linear-gradient(90deg, transparent 0%, rgba(0, 255, 0, 0.3) 50%, transparent 100%)',
                    'linear-gradient(90deg, transparent 0%, rgba(0, 255, 0, 0.1) 50%, transparent 100%)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                }}
              />
              
              <Typography
                variant="h3"
                sx={{
                  color: '#00ff00',
                  mb: { xs: 3, sm: 4 },
                  fontWeight: 700,
                  fontFamily: 'monospace',
                  letterSpacing: { xs: '1px', sm: '2px' },
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                }}
              >
                GET_STARTED_TODAY
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: '#cccccc',
                  mb: { xs: 2, sm: 3 },
                  fontWeight: 600,
                  fontFamily: 'monospace',
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
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
                  letterSpacing: { xs: '0.5px', sm: '1px' },
                  mb: { xs: 3, sm: 4 },
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                }}
              >
                M: 92094_55752
              </Typography>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<RocketLaunchIcon />}
                  href="https://wa.me/919209455752"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: { xs: 4, sm: 5, md: 6 },
                    py: { xs: 1.5, sm: 2 },
                    background: 'linear-gradient(135deg, #00ff00, #00cc00)',
                    color: '#1a1a1a',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    letterSpacing: { xs: '0.5px', sm: '1px' },
                    borderRadius: '8px',
                    boxShadow: '0 8px 32px rgba(0, 255, 0, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #00cc00, #009900)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 40px rgba(0, 255, 0, 0.4)',
                    },
                  }}
                >
                  ENROLL_NOW
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .custom-cursor {
          transition: all 0.1s ease;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #0099cc, #007399);
        }
      `}</style>
    </Box>
  );
};

export default CodingAcademyPage; 