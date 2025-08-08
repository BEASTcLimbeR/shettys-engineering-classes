"use client";

import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle, School, Groups, VideoCall, Assessment } from '@mui/icons-material';

const WhyUsSection: React.FC = () => {
  const promises = [
    {
      icon: <School sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "15+ Years Specialization",
      description: "Specializing in Pune University and 25+ other University syllabus"
    },
    {
      icon: <Groups sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Personalized Attention",
      description: "Small batches and doubt clinics for individual focus"
    },
    {
      icon: <VideoCall sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Hybrid Learning(Batches)",
      description: "Live Zoom sessions + face-to-face learning at Ghole Road"
    },
    {
      icon: <Assessment sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Consistent Assessment",
      description: "Unit tests, past-year questions, and performance insights"
    },
    {
      icon: <Groups sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Home Tuition",
      description: "Convenient one-to-one coaching at your doorstep"
    },
    {
      icon: <VideoCall sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Hybrid Learning(One-to-One)",
      description: "Live Zoom sessions + face-to-face learning(One-to-One) at Ghole Road"
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(25, 118, 210, 0.05)',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 107, 53, 0.05)',
          filter: 'blur(40px)',
        }}
      />

      <Container maxWidth="lg">
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 8 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%)',
                borderRadius: 6,
                border: '2px solid rgba(25, 118, 210, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.12)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              {/* Enhanced Background decorative elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '5%',
                  right: '5%',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.08) 0%, rgba(21, 101, 192, 0.04) 100%)',
                  filter: 'blur(40px)',
                  animation: 'pulse 4s ease-in-out infinite',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '5%',
                  left: '5%',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, rgba(255, 147, 30, 0.04) 100%)',
                  filter: 'blur(30px)',
                  animation: 'pulse 4s ease-in-out infinite reverse',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.03) 0%, rgba(129, 199, 132, 0.02) 100%)',
                  filter: 'blur(50px)',
                  animation: 'pulse 6s ease-in-out infinite',
                }}
              />

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                {/* Enhanced Header */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                      fontWeight: 900,
                      mb: 2,
                      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 50%, #0d47a1 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    About Us
                  </Typography>
                  <Box
                    sx={{
                      width: '80px',
                      height: '4px',
                      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                      borderRadius: '2px',
                      mx: 'auto',
                      mb: 3,
                    }}
                  />
                </Box>

                {/* Enhanced Main Content */}
                <Box sx={{ mb: 5 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.7rem' },
                      fontWeight: 700,
                      mb: 4,
                      color: '#1a237e',
                      lineHeight: 1.4,
                      textAlign: 'center',
                    }}
                  >
                    Welcome to <span style={{ color: '#1976d2', fontWeight: 900 }}>SHETTY&apos;s Engineering Classes (SEC)</span> — Pune&apos;s trusted hub for engineering academic excellence!
                  </Typography>

                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    gap: 4, 
                    mb: 5,
                    alignItems: 'center'
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '1.05rem', sm: '1.15rem' },
                          mb: 3,
                          color: '#37474f',
                          lineHeight: 1.8,
                          textAlign: 'justify',
                          fontWeight: 500,
                        }}
                      >
                        Founded over a decade ago by <strong>Prof. Sukumara Shetty</strong>, SEC has grown into one of Pune&apos;s most sought-after coaching institutes, empowering thousands of engineering students across <strong>12+ top universities</strong> including SPPU, Mumbai University, and other institutions across India and abroad.
                      </Typography>
                    </Box>
                    <Box sx={{ 
                      flex: 1,
                      background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(21, 101, 192, 0.05) 100%)',
                      p: 3,
                      borderRadius: 3,
                      border: '1px solid rgba(25, 118, 210, 0.2)',
                    }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          color: '#1976d2',
                          lineHeight: 1.8,
                          textAlign: 'center',
                          fontWeight: 600,
                        }}
                      >
                                                 📍 Located at <strong>Ghole Rd, opposite MJM Hospital, Sud Nagar, Shivajinagar, Pune, Maharashtra 411004</strong>, we specialize in coaching First Year to Final Year engineering students, covering core subjects across Electronics, Electrical, Computer, IT, and AI branches.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Enhanced Why Students Choose Section */}
                <Box sx={{ mb: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.3rem', sm: '1.5rem' },
                      fontWeight: 800,
                      mb: 4,
                      color: '#1976d2',
                      textAlign: 'center',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60px',
                        height: '3px',
                        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                        borderRadius: '2px',
                      }
                    }}
                  >
                    Why Students Choose SEC:
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
                    <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%' } }}>
                      {[
                        { icon: '✨', text: 'Student-First Philosophy', color: '#4caf50' },
                        { icon: '🔍', text: 'Focus on Concept Clarity', color: '#2196f3' },
                        { icon: '👨‍🏫', text: 'Expert-Led Personalized Teaching', color: '#ff9800' },
                        { icon: '📚', text: 'Small Batches for Maximum Impact', color: '#9c27b0' },
                      ].map((item, index) => (
                        <Box 
                          key={index}
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            mb: 3,
                            p: 2,
                            borderRadius: 2,
                            background: 'rgba(255, 255, 255, 0.7)',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateX(8px)',
                              background: 'rgba(255, 255, 255, 0.9)',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            }
                          }}
                        >
                          <Typography sx={{ mr: 3, fontSize: '1.5rem' }}>{item.icon}</Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: '#37474f', 
                              lineHeight: 1.6,
                              fontWeight: 600,
                              fontSize: '1.05rem',
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%' } }}>
                      {[
                        { icon: '🎯', text: 'Result-Oriented Exam Preparation', color: '#f44336' },
                        { icon: '✅', text: 'Strong Concept Building + Exam-Focused Coaching', color: '#4caf50' },
                        { icon: '✅', text: 'Special Support for Backlogs & Repeater Students', color: '#ff9800' },
                        { icon: '🚀', text: 'Proven Track Record of Success', color: '#9c27b0' },
                      ].map((item, index) => (
                        <Box 
                          key={index}
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            mb: 3,
                            p: 2,
                            borderRadius: 2,
                            background: 'rgba(255, 255, 255, 0.7)',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateX(8px)',
                              background: 'rgba(255, 255, 255, 0.9)',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            }
                          }}
                        >
                          <Typography sx={{ mr: 3, fontSize: '1.5rem' }}>{item.icon}</Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: '#37474f', 
                              lineHeight: 1.6,
                              fontWeight: 600,
                              fontSize: '1.05rem',
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Enhanced Conclusion */}
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(21, 101, 192, 0.05) 100%)',
                    p: 4,
                    borderRadius: 4,
                    border: '2px solid rgba(25, 118, 210, 0.2)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%231976d2" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                      opacity: 0.5,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.15rem' },
                      color: '#1a237e',
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                      fontWeight: 600,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    Whether you're aiming to ace your semester, clear backlogs, or simply build a strong foundation, we&apos;re committed to your success — <strong>every step of the way</strong>.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </motion.div>

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
              Why Us?
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 600,
                color: '#666',
                mb: 4,
              }}
            >
              Our Unique Promise
            </Typography>
          </Box>
        </motion.div>

        {/* Promise Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 8,
          }}
        >
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 4,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    background: 'rgba(255, 255, 255, 0.95)',
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>
                  {promise.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#333',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: promise.title
                      .replace(/Batches/g, '<span style="color: #ff6b35; font-weight: 800;">Batches</span>')
                      .replace(/One-to-One/g, '<span style="color: #ff6b35; font-weight: 800;">One-to-One</span>')
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.6,
                  }}
                >
                  {promise.description}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>

        {/* Why Student Satisfaction Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background pattern */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.3,
              }}
            />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                }}
              >
                Why "Students Satisfaction"?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  mx: 'auto',
                  opacity: 0.95,
                }}
              >
                Studies show personalized coaching with frequent feedback directly boosts academic performance and satisfaction. 
                We&apos;ve embedded these proven methods in every module.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhyUsSection; 