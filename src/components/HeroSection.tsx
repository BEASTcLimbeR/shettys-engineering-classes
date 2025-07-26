"use client";

import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 165, 0, 0.1)',
          filter: 'blur(40px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(25, 118, 210, 0.1)',
          filter: 'blur(30px)',
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 2,
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              Towards Student
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 3,
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Satisfaction
            </Typography>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 400,
                color: '#666',
                mb: 2,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              One Institute & More Than 12 Universities
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem' },
                color: '#888',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 300,
              }}
            >
              Focused coaching for FE to BE—across Pune colleges—on Ghole Road, off FC Road
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #e55a2b 0%, #e0851a 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(255, 107, 53, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Book a Free Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  border: '2px solid #1976d2',
                  color: '#1976d2',
                  '&:hover': {
                    background: '#1976d2',
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Talk to a Counselor
              </Button>
            </Stack>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Box
              sx={{
                width: '2px',
                height: '60px',
                background: 'linear-gradient(to bottom, #1976d2, transparent)',
                animation: 'scroll-indicator 2s ease-in-out infinite',
                '@keyframes scroll-indicator': {
                  '0%, 100%': { opacity: 0.3 },
                  '50%': { opacity: 1 },
                },
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection; 