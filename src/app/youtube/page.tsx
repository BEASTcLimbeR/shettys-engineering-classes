"use client";

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PlayArrow, YouTube, Visibility } from '@mui/icons-material';

// YouTube video data from SEC Pune channel
const youtubeVideos = [
  {
    id: '6tZkKVw4yrM',
    title: 'SPPU Academic Calendar || Insem 2025 || Endsem 2025 || Shetty Sir ||',
    thumbnail: 'https://img.youtube.com/vi/6tZkKVw4yrM/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/6tZkKVw4yrM',
    duration: '45:30',
    views: '2.5K',
    category: 'Academic Updates'
  },
  {
    id: 'T2sFgqPdSNE',
    title: 'SPPU 2024 PATTERN SYLLABUS || SE E&TC ||',
    thumbnail: 'https://img.youtube.com/vi/T2sFgqPdSNE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/T2sFgqPdSNE',
    duration: '1:15:20',
    views: '1.8K',
    category: 'Syllabus'
  },
  {
    id: 'cGFf49VS1dw',
    title: 'SPPU || Result 2025 || Latest Updates ||',
    thumbnail: 'https://img.youtube.com/vi/cGFf49VS1dw/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/cGFf49VS1dw',
    duration: '52:15',
    views: '3.2K',
    category: 'Results'
  },
  {
    id: 'KM3yzsIsl08',
    title: 'Mobile Computing || SPPU || Unit 5 and Unit 6 || SHETTY\'s Engineering Classes ||',
    thumbnail: 'https://img.youtube.com/vi/KM3yzsIsl08/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/KM3yzsIsl08',
    duration: '38:45',
    views: '1.9K',
    category: 'Mobile Computing'
  },
  {
    id: '9B5IrvmvV88',
    title: 'Mobile Computing || SPPU || Unit 3 & Unit 4 || SHETTY\'s Engineering Classes',
    thumbnail: 'https://img.youtube.com/vi/9B5IrvmvV88/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/9B5IrvmvV88',
    duration: '1:25:10',
    views: '2.1K',
    category: 'Mobile Computing'
  },
  {
    id: 'MGltoXPImKc',
    title: '|| SPPU || Fiber Optic Communication || FOC important unit 3 4',
    thumbnail: 'https://img.youtube.com/vi/MGltoXPImKc/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/MGltoXPImKc',
    duration: '55:30',
    views: '1.7K',
    category: 'Fiber Optics'
  },
  {
    id: '8dqgtDsBlE8',
    title: 'SPPU || End Sem || Timetable ||',
    thumbnail: 'https://img.youtube.com/vi/8dqgtDsBlE8/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/8dqgtDsBlE8',
    duration: '1:10:25',
    views: '2.8K',
    category: 'Academic Updates'
  },
  {
    id: 'PW9By3Bu4YA',
    title: 'SPPU End Sem Exam 2025 || Latest Updates ||',
    thumbnail: 'https://img.youtube.com/vi/PW9By3Bu4YA/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/PW9By3Bu4YA',
    duration: '48:15',
    views: '3.5K',
    category: 'Academic Updates'
  },
  {
    id: '7CNaYy7WY90',
    title: '|| Digital Marketing ||',
    thumbnail: 'https://img.youtube.com/vi/7CNaYy7WY90/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/7CNaYy7WY90',
    duration: '42:20',
    views: '1.6K',
    category: 'Digital Marketing'
  },
  {
    id: '-cfte0wqjRk',
    title: 'Mobile Computing Unit 2 || SPPU BE E&TC ||',
    thumbnail: 'https://img.youtube.com/vi/-cfte0wqjRk/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/-cfte0wqjRk',
    duration: '35:45',
    views: '2.3K',
    category: 'Mobile Computing'
  },
  {
    id: 'xkSfpx_McWo',
    title: 'Computational Intelligence || SPPU || BE AI-DS ||',
    thumbnail: 'https://img.youtube.com/vi/xkSfpx_McWo/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/xkSfpx_McWo',
    duration: '58:20',
    views: '4.1K',
    category: 'AI & Data Science'
  },
  {
    id: '4FfwUlz_EVI',
    title: 'Mobile Computing Unit 1 || SPPU BE E&TC ||',
    thumbnail: 'https://img.youtube.com/vi/4FfwUlz_EVI/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/4FfwUlz_EVI',
    duration: '1:12:15',
    views: '2.7K',
    category: 'Mobile Computing'
  },
  {
    id: 'hqK2Wa3uxMQ',
    title: 'SPPU Carry ON || Latest Updates and News ||',
    thumbnail: 'https://img.youtube.com/vi/hqK2Wa3uxMQ/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/hqK2Wa3uxMQ',
    duration: '1:05:30',
    views: '2.9K',
    category: 'Academic Updates'
  },
  {
    id: 'kv6sqAU8QdM',
    title: 'CARRY ON SPPU || LATEST UPDATES || Engineering',
    thumbnail: 'https://img.youtube.com/vi/kv6sqAU8QdM/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/kv6sqAU8QdM',
    duration: '49:45',
    views: '2.2K',
    category: 'Academic Updates'
  },
  {
    id: 'otsv75UQjxc',
    title: 'SPPU FE 2024 pattern Results | Tentative Date||',
    thumbnail: 'https://img.youtube.com/vi/otsv75UQjxc/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/otsv75UQjxc',
    duration: '1:18:20',
    views: '1.9K',
    category: 'Results'
  },
  {
    id: 'T1nomQQ0nIg',
    title: 'SPPU Engineering Update || Insem exam 2025 || Endsem Exam 2025 ||',
    thumbnail: 'https://img.youtube.com/vi/T1nomQQ0nIg/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/T1nomQQ0nIg',
    duration: '1:25:10',
    views: '3.8K',
    category: 'Academic Updates'
  },
  {
    id: 's2wfvGO3CJQ',
    title: 'SPPU Engineering Results 2025 || SE Results Out!!',
    thumbnail: 'https://img.youtube.com/vi/s2wfvGO3CJQ/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/s2wfvGO3CJQ',
    duration: '1:15:45',
    views: '4.2K',
    category: 'Results'
  },
  {
    id: 'N9i-4A_tYb4',
    title: 'SPPU Engineering Result 2025 || Latest Updates!!',
    thumbnail: 'https://img.youtube.com/vi/N9i-4A_tYb4/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/N9i-4A_tYb4',
    duration: '52:30',
    views: '2.4K',
    category: 'Results'
  },
  {
    id: 'GTcywQ1Errs',
    title: 'SPPU TE Results Tentative || SE FE Tentative Results date Updates',
    thumbnail: 'https://img.youtube.com/vi/GTcywQ1Errs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/GTcywQ1Errs',
    duration: '1:30:15',
    views: '5.1K',
    category: 'Results'
  },
  {
    id: '-YrPotGbPkM',
    title: 'SPPU BE Results Out. When TE, SE, FE?',
    thumbnail: 'https://img.youtube.com/vi/-YrPotGbPkM/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/-YrPotGbPkM',
    duration: '1:08:40',
    views: '2.6K',
    category: 'Results'
  },
  {
    id: 'BWZ-fbjv1kM',
    title: 'Control Systems- E&TC, Electrical || Unit 2: Steady State Error Derivation',
    thumbnail: 'https://img.youtube.com/vi/BWZ-fbjv1kM/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/BWZ-fbjv1kM',
    duration: '1:22:25',
    views: '3.3K',
    category: 'Control Systems'
  },
  {
    id: 'cZ21m2lcwxk',
    title: 'University Results. Here\'s What You Need to Know!!',
    thumbnail: 'https://img.youtube.com/vi/cZ21m2lcwxk/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/cZ21m2lcwxk',
    duration: '1:05:15',
    views: '2.8K',
    category: 'Results'
  },
  {
    id: 'FRKlpj5d6sQ',
    title: 'SPPU BE E&TC VLSI unit 5 part 2',
    thumbnail: 'https://img.youtube.com/vi/FRKlpj5d6sQ/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/FRKlpj5d6sQ',
    duration: '1:15:50',
    views: '2.9K',
    category: 'VLSI'
  },
  {
    id: 'AynY6xj4jfs',
    title: 'SPPU BE E&TC RMT unit 5 short lecture.',
    thumbnail: 'https://img.youtube.com/vi/AynY6xj4jfs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/AynY6xj4jfs',
    duration: '45:20',
    views: '2.1K',
    category: 'RMT'
  },
  {
    id: 'riy-yl20Bk4',
    title: 'SPPU BE E&TC VLSI unit 5 lecture part 1',
    thumbnail: 'https://img.youtube.com/vi/riy-yl20Bk4/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/riy-yl20Bk4',
    duration: '1:28:30',
    views: '3.7K',
    category: 'VLSI'
  },
  {
    id: 'pUQEA6JxGzs',
    title: 'Blockchain and Education - Part 2',
    thumbnail: 'https://img.youtube.com/vi/pUQEA6JxGzs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/pUQEA6JxGzs',
    duration: '1:12:45',
    views: '2.5K',
    category: 'Blockchain'
  },
  {
    id: '1execeXiJOg',
    title: 'Blockchain and Education',
    thumbnail: 'https://img.youtube.com/vi/1execeXiJOg/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/1execeXiJOg',
    duration: '1:35:20',
    views: '4.5K',
    category: 'Blockchain'
  }
];

const categories = [
  'All', 
  'Academic Updates', 
  'Results', 
  'Mobile Computing', 
  'Fiber Optics', 
  'Digital Marketing', 
  'AI & Data Science', 
  'Control Systems', 
  'VLSI', 
  'RMT', 
  'Blockchain', 
  'Syllabus'
];

const YouTubePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const filteredVideos = selectedCategory === 'All' 
    ? youtubeVideos 
    : youtubeVideos.filter(video => video.category === selectedCategory);

  // Professional Preloader
  if (isLoading) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        {/* Animated YouTube Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box sx={{
            background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
            borderRadius: '50%',
            p: 4,
            mb: 4,
            boxShadow: '0 12px 40px rgba(255, 0, 0, 0.4)',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-8px',
              left: '-8px',
              right: '-8px',
              bottom: '-8px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #ff0000, #cc0000, #ff0000)',
              zIndex: -1,
              animation: 'pulse 2s infinite',
            }
          }}>
            <YouTube sx={{ 
              fontSize: 120, 
              color: 'white',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
            }} />
          </Box>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 600,
              textAlign: 'center',
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Loading Our YouTube Channel
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              mb: 4,
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            Preparing educational content for you...
          </Typography>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Box sx={{
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Box sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(255,255,255,0.3)',
                }} />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #ff0000, #cc0000)',
            borderRadius: '2px',
          }}
        />

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.7;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        pt: { xs: 8, md: 10 },
        pb: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(40px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            {/* Main Title with Enhanced Styling */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                mb: 2,
                position: 'relative'
              }}>
                {/* Animated YouTube Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box sx={{
                    background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                    borderRadius: '50%',
                    p: 2,
                    mr: 3,
                    boxShadow: '0 8px 32px rgba(255, 0, 0, 0.3)',
                    border: '3px solid rgba(255, 255, 255, 0.2)',
                  }}>
                    <YouTube sx={{ 
                      fontSize: 70, 
                      color: 'white',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }} />
                  </Box>
                </motion.div>
                
                {/* Enhanced Title */}
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 50%, #e6f3ff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    textShadow: '0 4px 8px rgba(0,0,0,0.4)',
                    letterSpacing: '0.02em',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: '3px',
                      background: 'linear-gradient(90deg, transparent, #ff0000, transparent)',
                      borderRadius: '2px',
                    }
                  }}
                >
                  Our YouTube Channel
                </Typography>
              </Box>
              
              {/* Channel Name - Now properly positioned below */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ff6b35',
                    fontWeight: 700,
                    mt: 2,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    fontSize: { xs: '1.2rem', md: '1.8rem' },
                    letterSpacing: '0.05em',
                    fontStyle: 'italic',
                    lineHeight: 1.3,
                    maxWidth: '600px',
                    mx: 'auto',
                    textAlign: 'center',
                  }}
                >
                  SPPU Engineering Simplified By SHETTY SIR
                </Typography>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.95)',
                  mb: 6,
                  maxWidth: '900px',
                  mx: 'auto',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                  fontStyle: 'italic',
                }}
              >
                Learn engineering concepts, programming, and more with our comprehensive video tutorials
              </Typography>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                mb: 6,
                flexWrap: 'wrap'
              }}>
                <Box sx={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  p: 2,
                  minWidth: 120,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}>
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 0.5 }}>
                    25+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Videos
                  </Typography>
                </Box>
                <Box sx={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  p: 2,
                  minWidth: 120,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}>
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 0.5 }}>
                    50K+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Views
                  </Typography>
                </Box>
                <Box sx={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  p: 2,
                  minWidth: 120,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}>
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 0.5 }}>
                    12
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Categories
                  </Typography>
                </Box>
              </Box>
            </motion.div>
            
            {/* Enhanced Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2, 
                justifyContent: 'center', 
                mb: 6,
                p: 2,
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 4,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}>
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Chip
                      label={category}
                      onClick={() => setSelectedCategory(category)}
                      sx={{
                        background: selectedCategory === category 
                          ? 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)' 
                          : 'rgba(255, 255, 255, 0.15)',
                        color: selectedCategory === category ? 'white' : 'rgba(255,255,255,0.9)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        px: 2,
                        py: 1,
                        border: selectedCategory === category 
                          ? '2px solid rgba(255, 255, 255, 0.3)' 
                          : '1px solid rgba(255, 255, 255, 0.2)',
                        '&:hover': {
                          background: selectedCategory === category 
                            ? 'linear-gradient(135deg, #cc0000 0%, #aa0000 100%)'
                            : 'rgba(255, 255, 255, 0.25)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        {/* Videos Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: '1fr 1fr', 
            md: '1fr 1fr 1fr' 
          }, 
          gap: 3,
          maxWidth: '100%',
          mx: 'auto'
        }}>
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              style={{ display: 'flex' }}
            >
              <Card
                sx={{
                  width: '100%',
                  height: 'fit-content',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                    background: 'rgba(255, 255, 255, 0.95)',
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={video.thumbnail}
                    alt={video.title}
                    sx={{ 
                      objectFit: 'cover',
                      width: '100%',
                      height: '200px'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      background: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    {video.duration}
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      left: 8,
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.8rem',
                    }}
                  >
                    <Visibility sx={{ fontSize: 16, mr: 0.5 }} />
                    {video.views}
                  </Box>
                </Box>
                
                <CardContent sx={{ p: 3 }}>
                  <Chip
                    label={video.category}
                    size="small"
                    sx={{
                      mb: 2,
                      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#333',
                      lineHeight: 1.4,
                      fontSize: '1rem',
                    }}
                  >
                    {video.title}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<PlayArrow />}
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 2,
                      background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                      color: 'white',
                      fontWeight: 600,
                      borderRadius: 2,
                      py: 1.5,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #cc0000 0%, #aa0000 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(255, 0, 0, 0.3)',
                      },
                    }}
                  >
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Paper
            sx={{
              mt: 8,
              p: 4,
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#333' }}>
              Subscribe to Our Channel
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
              Get notified about new educational videos and stay updated with the latest engineering concepts
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<YouTube />}
              href="https://www.youtube.com/@SEC_Pune"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                color: 'white',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontSize: '1.1rem',
                '&:hover': {
                  background: 'linear-gradient(135deg, #cc0000 0%, #aa0000 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(255, 0, 0, 0.3)',
                },
              }}
            >
              Subscribe to SEC Pune
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default YouTubePage; 