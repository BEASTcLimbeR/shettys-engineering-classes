"use client";

import React, { useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Loader from './Loader';
import programersWorking from '../public/programers-working.json';
import clockLoading from '../public/clock-loading.json';

const CodingSection: React.FC = () => {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    // Play toggle sound
    const audio = new Audio('/toggle.mp3');
    audio.play().catch(error => {
      console.log('Audio play failed:', error);
    });
    
    // Immediately update the toggle state for visual feedback
    setIsDeveloperMode(!isDeveloperMode);
    
    // Keep original animation timing but optimize routing
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Fast routing without delays
      if (!isDeveloperMode) {
        router.push('/coding-academy');
      } else {
        router.push('/');
      }
    }, 1500); // Keep original animation time for beautiful preloader
  };

  const handleTitleClick = () => {
    // Play title click sound
    const audio = new Audio('/toggle.mp3');
    audio.play().catch(error => {
      console.log('Audio play failed:', error);
    });
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
      {loading && (
        <Loader
          animationData={isDeveloperMode ? programersWorking : clockLoading}
          overlay
        />
      )}
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
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
          left: '10%',
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
          transition={{ duration: 0.8 }} // Restored original duration
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              onClick={handleTitleClick}
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 900,
                mb: 2,
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  filter: 'brightness(1.1)',
                },
              }}
            >
              Want to learn coding?
            </Typography>
          </Box>
        </motion.div>

        {/* Toggle Switch Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }} // Restored original duration
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            {/* Toggle Switch */}
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggle}
              animate={{ scale: loading ? 0.95 : 1 }}
              transition={{ duration: 0.2 }}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                width: '164px', // 2x the original size
                height: '82px', // 2x the original size
                borderRadius: '41px',
                background: 'white',
                boxShadow: loading 
                  ? '0 4px 20px rgba(25, 118, 210, 0.3)' 
                  : '0 4px 20px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: loading 
                    ? '0 8px 30px rgba(25, 118, 210, 0.4)' 
                    : '0 8px 30px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {/* Sleeping Toggle (Default State) */}
              <AnimatePresence mode="wait">
                {!isDeveloperMode ? (
                  <motion.div
                    key="sleeping"
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
                      src="/sleeping-toggle-switch.svg"
                      alt="Sleeping Mode"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </motion.div>
                ) : (
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
                )}
              </AnimatePresence>
            </Box>

            {/* Switch Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }} // Restored original duration
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#666',
                  fontWeight: 500,
                  fontSize: '1.2rem',
                  textAlign: 'center',
                }}
              >
                Switch to developer mode
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CodingSection; 