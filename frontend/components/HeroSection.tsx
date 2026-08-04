"use client";

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Montserrat } from 'next/font/google';
import HeroHeadline from './HeroHeadline';
import HeroCTAButtons from './HeroCTAButtons';

// Clean tracked sans-serif — matches ACADEMICS | CODING | GATE banner line
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
});

const GOLD = '#C9A227';
const NAVY = '#0B1D36';

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
            <Typography
              className={montserrat.className}
              sx={{
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem' },
                fontWeight: 600,
                color: GOLD,
                letterSpacing: { xs: '0.2em', sm: '0.28em' },
                textTransform: 'uppercase',
                mb: { xs: 1.5, md: 2 },
              }}
            >
              16 Years Completed
            </Typography>
            <HeroHeadline />
          </motion.div>

          {/* Focus areas — uppercase, wide tracking, gold separators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Typography
              variant="h3"
              className={montserrat.className}
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.15rem', md: '1.35rem' },
                fontWeight: 600,
                color: NAVY,
                letterSpacing: { xs: '0.18em', sm: '0.28em', md: '0.35em' },
                textTransform: 'uppercase',
                mb: 3,
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              Academics{' '}
              <Box component="span" sx={{ color: GOLD, fontWeight: 500 }}>
                |
              </Box>{' '}
              Coding{' '}
              <Box component="span" sx={{ color: GOLD, fontWeight: 500 }}>
                |
              </Box>{' '}
              GATE
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
              Focused coaching for Global Universities at Ghole Road, off FC Road
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
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
