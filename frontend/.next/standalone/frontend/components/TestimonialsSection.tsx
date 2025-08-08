"use client";

import React from 'react';
import { Box, Typography, Container, Paper, Avatar, Stack, Rating } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';

// ✅ Define type
type Testimonial = {
  name: string;
  rating: number;
  text: string;
  avatar?: string; // Optional avatar field
};

// ✅ Updated testimonials with optional avatar
const testimonials: Testimonial[] = [
  {
    name: 'Amit Sharma',
    rating: 5,
    text: 'The best coaching experience I have ever had! The personal attention and regular tests helped me clear my backlogs and score distinction.',
    avatar: '', // Optional: Add avatar URL or leave empty
  },
  {
    name: 'Priya Desai',
    rating: 5,
    text: 'Shetty Sir explains every concept so clearly. The hybrid model made it easy to attend classes even when I was out of town.',
    avatar: '',
  },
  {
    name: 'Rahul Patil',
    rating: 4.5,
    text: 'I loved the doubt clinics and the support for repeater students. Highly recommend to anyone who wants to truly understand engineering subjects.',
    avatar: '',
  },
  {
    name: 'Sneha Kulkarni',
    rating: 5,
    text: 'The notes, PYQs, and regular feedback made a huge difference in my performance. Thank you, Shetty Sir!',
    avatar: '',
  },
  {
    name: 'Vikas Joshi',
    rating: 4.5,
    text: 'The faculty is very supportive and the teaching methods are excellent. I gained a lot of confidence in my subjects.',
    avatar: '',
  },
  {
    name: 'Meera Nair',
    rating: 5,
    text: 'The hybrid classes and regular assessments helped me stay on track. Highly recommended for engineering students!',
    avatar: '',
  },
  {
    name: 'Siddharth Rao',
    rating: 4.5,
    text: 'Best place for concept clarity and exam preparation. The environment is very motivating.',
    avatar: '',
  },
];

// Duplicate for seamless loop
const loopedTestimonials = [...testimonials, ...testimonials];

const SLIDE_WIDTH = 320;
const MOBILE_SLIDE_WIDTH = 280;

const TestimonialsSection: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        x: [-0, -SLIDE_WIDTH * testimonials.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: testimonials.length * 5,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, inView]);

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
      {/* Background elements */}
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
        {/* Header */}
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
              What Our Learners Are Saying
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
              Real feedback from students and parents who have experienced Shetty’s Engineering Classes.
            </Typography>
          </Box>
        </motion.div>

        {/* Carousel */}
        <Box
          sx={{
            mt: 4,
            mb: 2,
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <motion.div
            ref={ref}
            animate={controls}
            style={{
              display: 'flex',
              gap: 24,
              width: loopedTestimonials.length * SLIDE_WIDTH,
            }}
          >
            {loopedTestimonials.map((t, index) => (
              <Paper
                key={index}
                sx={{
                  minWidth: { xs: 260, sm: 320 },
                  maxWidth: { xs: 260, sm: 320 },
                  mx: { xs: 0.5, sm: 1 },
                  p: { xs: 2.5, sm: 3, md: 4 },
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(25, 118, 210, 0.05)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '&:hover': {
                    transform: { xs: 'translateY(-4px) scale(1.02)', sm: 'translateY(-8px) scale(1.04)' },
                    boxShadow: '0 20px 40px rgba(255, 107, 53, 0.12)',
                  },
                }}
              >
                <Stack alignItems="center" spacing={{ xs: 1.5, sm: 2 }}>
                  <Avatar
                    src={t.avatar}
                    sx={{ 
                      width: { xs: 48, sm: 64 }, 
                      height: { xs: 48, sm: 64 }, 
                      bgcolor: '#1976d2', 
                      fontWeight: 700, 
                      fontSize: { xs: 24, sm: 32 } 
                    }}
                  >
                    {t.name[0]}
                  </Avatar>
                  <Rating 
                    value={t.rating} 
                    readOnly 
                    size="small" 
                    sx={{ 
                      color: '#ffb400',
                      '& .MuiRating-icon': {
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                      }
                    }} 
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#444', 
                      fontWeight: 400, 
                      mb: 2, 
                      minHeight: { xs: 60, sm: 80 },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      lineHeight: 1.5
                    }}
                  >
                    "{t.text}"
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#1976d2',
                      fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}
                  >
                    {t.name}
                  </Typography>
                </Stack>
              </Paper>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
