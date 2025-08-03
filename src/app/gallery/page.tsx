"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, Stack, IconButton } from '@mui/material';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhotoLibrary, 
  People, 
  School, 
  Celebration,
  Favorite,
  Share
} from '@mui/icons-material';
import Loader from '../../components/Loader';
import handLoading from '../../../public/hand-loading.json';

const photoFilenames = [
  'photo-1.jpg',
  'photo-2.jpg',
  'photo-3.jpg',
  'photo-4.jpg',
  'photo-5.jpg',
  'photo-6.jpg',
  'photo-7.jpg',
  'photo-8.jpg',
  'photo-9.jpg',
  'photo-10.jpg',
  'photo-11.jpg',
  'photo-12.jpg',
  'photo-13.jpg',
  'photo-14.jpg',
  'photo-15.jpg',
  'photo-16.jpg',
  'photo-17.jpg',
];

const GalleryPage = () => {
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 }, 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
        minHeight: '100vh', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
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
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'rgba(255, 107, 53, 0.05)',
          filter: 'blur(50px)',
        }}
      />

      {loading && <Loader animationData={handLoading} overlay />}
      
      {!loading && (
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
                <PhotoLibrary sx={{ fontSize: 48, color: '#ff6b35' }} />
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 900, 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                    backgroundClip: 'text', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' }
                  }}
                >
                  Student Gallery
                </Typography>
              </Stack>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontWeight: 400, 
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Capturing moments of learning, growth, and success with our amazing students
              </Typography>

              <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                <Chip 
                  icon={<People />} 
                  label={`${photoFilenames.length} Photos`} 
                  sx={{ 
                    background: 'rgba(255,255,255,0.1)', 
                    color: 'white', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    '&:hover': { background: 'rgba(255,255,255,0.2)' }
                  }} 
                />
                <Chip 
                  icon={<School />} 
                  label="Learning Moments" 
                  sx={{ 
                    background: 'rgba(255,255,255,0.1)', 
                    color: 'white', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    '&:hover': { background: 'rgba(255,255,255,0.2)' }
                  }} 
                />
                <Chip 
                  icon={<Celebration />} 
                  label="Success Stories" 
                  sx={{ 
                    background: 'rgba(255,255,255,0.1)', 
                    color: 'white', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    '&:hover': { background: 'rgba(255,255,255,0.2)' }
                  }} 
                />
              </Stack>
            </Box>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={3} justifyContent="center">
              {photoFilenames.map((filename, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={filename}
                  component={motion.div}
                  variants={itemVariants}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255, 107, 53, 0.3)',
                        '& .photo-overlay': {
                          opacity: 1,
                        },
                        '& .photo-actions': {
                          transform: 'translateY(0)',
                          opacity: 1,
                        }
                      },
                      width: '100%',
                      maxWidth: 350,
                    }}
                    onClick={() => setSelectedPhoto(idx)}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <Image
                        src={`/photos-with-students/${filename}`}
                        alt={`Student photo ${idx + 1}`}
                        width={350}
                        height={280}
                        style={{ 
                          width: '100%', 
                          height: 'auto', 
                          display: 'block',
                          transition: 'transform 0.3s ease'
                        }}
                        loading="lazy"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="/photos-with-students/photo-1.jpg"
                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                      
                      {/* Overlay */}
                      <Box
                        className="photo-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.8) 0%, rgba(247, 147, 30, 0.6) 100%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'white',
                            fontWeight: 700,
                            textAlign: 'center',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                          }}
                        >
                          Student Success #{idx + 1}
                        </Typography>
                      </Box>

                      {/* Action Buttons */}
                      <Box
                        className="photo-actions"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          opacity: 0,
                          transform: 'translateY(-10px)',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Stack direction="row" spacing={1}>
                          <IconButton
                            size="small"
                            sx={{
                              background: 'rgba(255,255,255,0.9)',
                              color: '#ff6b35',
                              '&:hover': {
                                background: 'white',
                                transform: 'scale(1.1)',
                              }
                            }}
                          >
                            <Favorite fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{
                              background: 'rgba(255,255,255,0.9)',
                              color: '#ff6b35',
                              '&:hover': {
                                background: 'white',
                                transform: 'scale(1.1)',
                              }
                            }}
                          >
                            <Share fontSize="small" />
                          </IconButton>
                        </Stack>
                      </Box>
                    </Box>

                    {/* Photo Info */}
                    <Box sx={{ p: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          fontWeight: 500,
                          textAlign: 'center'
                        }}
                      >
                        Learning Journey #{idx + 1}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: 500,
                  mb: 2
                }}
              >
                Every photo tells a story of dedication, growth, and achievement
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Join our community of successful students and be part of the next success story
              </Typography>
            </Box>
          </motion.div>
        </Container>
      )}
    </Box>
  );
};

export default GalleryPage;