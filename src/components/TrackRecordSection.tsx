"use client";

import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import { useEffect } from 'react';
import { useInView, useMotionValue, useAnimationFrame } from 'framer-motion';

const stats = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 48, color: '#ff6b35' }} />,
    value: '98%',
    label: 'Pass Rate across subjects',
  },
  {
    icon: <StarIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
    value: '100+',
    label: 'Distinctions every academic year',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 48, color: '#4caf50' }} />,
    value: 'Toppers',
    label: 'across Computer, ENTC, Electrical, AI, IT, Mechanical and Civil branches',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48, color: '#ff9800' }} />,
    value: '27',
    label: 'Universities trust us',
  },
];

const Counter: React.FC<{ value: string }> = ({ value }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  // Extract numeric part and suffix
  const match = value.match(/^(\d+)/);
  const number = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? value.substring(match[1].length) : value;
  const [display, setDisplay] = React.useState(0);
  const animationRef = React.useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const end = number;
    const duration = 1200; // ms
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setDisplay(value);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(end);
      }
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isInView, number]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
};

const TrackRecordSection: React.FC = () => {
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
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Track Record
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#666',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Our results speak for themselves. Here’s why students and parents trust us year after year.
            </Typography>
          </Box>
        </motion.div>

        {/* Stat Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {stats.map((stat, index) => (
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
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(25, 118, 210, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.04)',
                    boxShadow: '0 20px 40px rgba(255, 107, 53, 0.12)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2.5rem', sm: '3rem' },
                    color: '#222',
                    mb: 1,
                  }}
                >
                                     {stat.label === 'across Computer, ENTC, Electrical, AI, IT, Mechanical and Civil branches' ? (
                     stat.value
                   ) : (
                     <Counter value={stat.value} />
                   )}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#666',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                  }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrackRecordSection; 