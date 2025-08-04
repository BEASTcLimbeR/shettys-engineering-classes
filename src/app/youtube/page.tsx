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

const categories = ['All', 'Academic Updates', 'Results', 'Mobile Computing', 'Fiber Optics', 'Digital Marketing', 'AI & Data Science', 'Control Systems', 'VLSI', 'RMT', 'Blockchain', 'Syllabus'];

const YouTubePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All' 
    ? youtubeVideos 
    : youtubeVideos.filter(video => video.category === selectedCategory);

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
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                <YouTube sx={{ fontSize: 60, color: '#ff0000', mr: 2 }} />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: 'white',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Our YouTube Channel
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  maxWidth: '800px',
                  mx: 'auto',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                Learn engineering concepts, programming, and more with our comprehensive video tutorials
              </Typography>
              
              {/* Category Filter */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 4 }}>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    onClick={() => setSelectedCategory(category)}
                    sx={{
                      background: selectedCategory === category 
                        ? 'rgba(255, 255, 255, 0.9)' 
                        : 'rgba(255, 255, 255, 0.2)',
                      color: selectedCategory === category ? '#333' : 'white',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* Videos Grid */}
          <Grid container spacing={4}>
            {filteredVideos.map((video, index) => (
              <Grid item xs={12} sm={6} md={4} key={video.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
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
                        sx={{ objectFit: 'cover' }}
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
              </Grid>
            ))}
          </Grid>

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