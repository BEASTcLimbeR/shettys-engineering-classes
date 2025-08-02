"use client";

import React, { Suspense } from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';

const HeroHeadline = dynamic(() => import('./HeroHeadline'), { ssr: false });
const HeroCTAButtons = dynamic(() => import('./HeroCTAButtons'), { ssr: false });

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
      <Parallax translateY={[-30, 30]}>
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
            zIndex: 0,
          }}
        />
      </Parallax>
      <Parallax translateY={[30, -30]}>
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
            zIndex: 0,
          }}
        />
      </Parallax>

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
            <HeroHeadline />
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
            <HeroCTAButtons />
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
              cursor: 'pointer',
              zIndex: 2,
            }}
            onClick={() => {
              const nextSection = document.getElementById('about');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
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
