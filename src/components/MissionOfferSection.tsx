"use client";

import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const offers = [
  {
    icon: <MenuBookIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Full Subject Coverage',
    description: 'For FE to BE students across all branches',
  },
  {
    icon: <QuizIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
    title: 'Regular Unit Tests & Notes',
    description: 'Unit tests, notes, PYQs, and doubt-solving sessions',
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
    title: 'Hybrid Model',
    description: 'Online + Offline classes to reach more students',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
    title: 'Backlog/Repeater Support',
    description: 'Dedicated help for backlog and repeater students',
  },
];

const MissionOfferSection: React.FC = () => {
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
        {/* Mission Statement */}
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
              Our Mission
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#666',
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              To deliver affordable, high-quality academic coaching for engineering students across all branches — with 100% syllabus completion, real-time feedback, and a focus on performance and satisfaction.
            </Typography>
          </Box>
        </motion.div>

        {/* What We Offer Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {offers.map((offer, index) => (
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
                <Box sx={{ mb: 2 }}>{offer.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#333',
                  }}
                >
                  {offer.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.6,
                  }}
                >
                  {offer.description}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MissionOfferSection; 