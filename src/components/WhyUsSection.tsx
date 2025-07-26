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
      title: "Hybrid Learning",
      description: "Live Zoom sessions + face-to-face learning at Ghole Road"
    },
    {
      icon: <Assessment sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Consistent Assessment",
      description: "Unit tests, past-year questions, and performance insights"
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
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
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
                >
                  {promise.title}
                </Typography>
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
                Why "Student Satisfaction"?
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
                We've embedded these proven methods in every module.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhyUsSection; 