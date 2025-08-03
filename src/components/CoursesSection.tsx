"use client";

import React, { useState, useEffect, useRef } from 'react';
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
import BranchTabs from './BranchTabs';
import CourseAccordion from './CourseAccordion';

type CourseYearData = {
  FE?: string[];
  SE: string[];
  TE: string[];
  BE: string[];
};

const CoursesSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
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
      FE: ['Engineering Mathematics 1', 'Engineering Mathematics 2', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Basic Electronics Engineering', 'Programming and Problem Solving'],
      SE: [],
      TE: [],
      BE: [],
    },
    'E&TC': {
      SE: ['Electrical Circuits', 'Electronics Circuits', 'Digital Circuits', 'Engineering Mathematics 3', 'Signal Systems', 'Control Systems'],
      TE: ['Digital Communication', 'Electromagnetic Field Theory', 'Microcontrollers', 'Database Management Systems', 'Power Device Circuits', 'Cellular Networks', 'Network Security'],
      BE: ['VLSI Design', 'Radiation and Microwave Theory', 'Cellular Networks', 'Digital Image Processing', 'Cloud Computing', 'JavaScript', 'Deep Learning', 'Digital Marketing', 'Fundamentals of Optical Communication'],
    },
    'CS': {
      SE: ['Digital Electronics Logic Design', 'Object Oriented Programming with C++ and Java', 'Microprocessor', 'Engineering Mathematics 3', 'Software Engineering', 'Discrete Mathematics'],
      TE: ['Database Management Systems', 'Data Science and Big Data Analytics', 'System Programming and Operating Systems', 'Web Technology', 'Computer Networks', 'Network Security', 'Theory of Computation', 'Artificial Intelligence'],
      BE: ['Deep Learning', 'Machine Learning', 'Design and Analysis of Algorithms', 'Blockchain Technology', 'High Performance Computing', 'Natural Language Processing'],
    },
    'Electrical': {
      SE: ['Analog and Digital Electronics', 'Network Analysis'],
      TE: ['Power Electronics', 'Advanced Microcontroller and Embedded Systems', 'Control Systems'],
      BE: ['Advanced Electrical Drives and Control', 'Advanced Control Systems'],
    },
    'IT': {
      SE: ['Basics of Computer Networks', 'Digital Electronics Logic Design', 'Database Management Systems'],
      TE: ['Theory of Computation', 'Machine Learning', 'Operating Systems', 'Computer Networks and Security'],
      BE: ['Blockchain Technology', 'Distributed Systems', 'Deep Learning'],
    },
    'AI&DS': {
      SE: ['Discrete Mathematics', 'Statistics and Probability', 'Internet of Things'],
      TE: ['Machine Learning', 'Data Science', 'Database Management Systems', 'Computer Networks', 'Artificial Neural Networks', 'Artificial Intelligence'],
      BE: ['Data Modeling and Visualization', 'Deep Learning', 'Distributed Computing', 'Computational Intelligence'],
    },
    'Mechanical': {
      SE: ['Solid Mechanics', 'Engineering Thermodynamics', 'Electrical Electronics Engineering', 'Engineering Mathematics 3', 'Fluid Mechanics'],
      TE: ['Numerical and Statistical Methods', 'Heat and Mass Transfer', 'Design of Machine Elements', 'Artificial Intelligence and Machine Learning'],
      BE: ['Design of Machine Elements', 'Thermal Engineering', 'Computer Integrated Manufacturing'],
    },
    'Civil': {
      SE: ['Fluid Mechanics', 'Solid Mechanics', 'Geotechnical Engineering', 'Structural Analysis'],
      TE: ['Design of Steel Structures', 'Design of Reinforced Concrete'],
      BE: ['Traffic Engineering', 'Structural Design 3'],
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
        {/* SE, TE, BE Courses */}
        {['SE', 'TE', 'BE'].map((year, yearIndex) => {
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
                  {yearCourses.map((subject: string, index: number) => (
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
          ) : null;
        })}
        {/* If no courses, show a message */}
        {(!courses.SE || courses.SE.length === 0) &&
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
              Comprehensive coaching for all engineering branches and years
            </Typography>
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
              label="One-to-One Tuition"
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
    </Box>
  );
};

export default CoursesSection; 