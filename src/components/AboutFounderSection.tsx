"use client";

import React from 'react';
import { Box, Typography, Container, Paper, Avatar, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const founder = {
  name: 'Prof. Sukumara Shetty',
  title: 'Founder & Educator',
  achievements: [
    '1st Topper SVCE Bangalore',
    'VTU Karnataka 11th Rank (2005)',
    '14+ Years of Teaching & Industry Experience',
  ],
  bio: `A passionate Educator, mentor, and the driving force behind Shetty's Engineering Classes, Prof. Sukumara Shetty has guided thousands of Engineering students across the globe with his clear explanations, motivational teaching, and Exam-smart strategies.

Renowned for his student-first approach, Shetty Sir combines traditional board based techniques with modern tools like Zoom sessions, digital quizzes, and custom PDFs, creating a learning environment where every student feels confident, supported, and inspired to succeed.

His teaching isn't just about completing the syllabus — it's about building confidence, cracking exams, and unlocking every student's true potential.`,
  message: `Dear Students & Parents,\n\nWhen I started Shetty’s Engineering Classes, my only goal was simple — to create a space where students feel supported, understood, and genuinely confident in their subjects. Over the years, that goal has evolved into a deeper mission: “Towards Students Satisfaction.”\n\nIn today’s fast-paced education system, many students struggle not because of lack of effort, but due to lack of personalized guidance. Here, at our institute on Ghole Road, Off FC Road, I make it a point to know every student, their strengths and weaknesses, and guide them with the right methods — not just to pass, but to truly learn and grow.\n\nThis institute is not just about notes and lectures. It's about building belief, one student at a time.\n\nLet’s continue the journey together with honesty, clarity, and commitment to excellence.\n\nWarm regards,\nProf. Sukumar Shetty\nFounder & Educator\nShetty’s Engineering Classes`,
};

const AboutFounderSection: React.FC = () => {
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

      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              background: 'rgba(255,255,255,0.95)',
              boxShadow: '0 8px 32px rgba(25, 118, 210, 0.05)',
              border: '1px solid rgba(255,255,255,0.2)',
              mb: 4,
            }}
          >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
              {/* Founder Photo */}
              <Avatar
                sx={{ width: 120, height: 120, bgcolor: '#1976d2', fontSize: 60 }}
                src={'/shetty-sir.svg'}
              >
                <PersonIcon fontSize="inherit" />
              </Avatar>
              {/* Founder Info */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  {founder.name}
                </Typography>
                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                   <Typography variant="h5" sx={{ fontWeight: 600, color: '#666' }}>
                     {founder.title}
                   </Typography>
                   <IconButton
                     href="https://www.linkedin.com/in/sukumar-shetty-3950b757?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                     target="_blank"
                     rel="noopener noreferrer"
                     sx={{
                       color: '#0077b5',
                       '&:hover': {
                         color: '#005885',
                         transform: 'scale(1.1)',
                       },
                       transition: 'all 0.3s ease',
                     }}
                   >
                     <LinkedInIcon sx={{ fontSize: 28 }} />
                   </IconButton>
                 </Box>
                 <Box sx={{ mb: 2 }}>
                   <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 600, mb: 1 }}>
                     {founder.achievements[0]}
                   </Typography>
                   <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 600, mb: 1 }}>
                     {founder.achievements[1]}
                   </Typography>
                   <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 600 }}>
                     {founder.achievements[2]}
                   </Typography>
                 </Box>
                <Typography variant="body1" sx={{ color: '#444', mb: 2, fontWeight: 400 }}>
                  {founder.bio}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </motion.div>

        {/* Founder Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
              color: 'white',
              boxShadow: '0 8px 32px rgba(25, 118, 210, 0.08)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
              Founder’s Message
            </Typography>
            {founder.message.split('\n').map((line, idx) => (
              <Typography key={idx} variant="h6" sx={{ fontWeight: 400, mb: 2, opacity: 0.95 }}>
                {line}
              </Typography>
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutFounderSection; 