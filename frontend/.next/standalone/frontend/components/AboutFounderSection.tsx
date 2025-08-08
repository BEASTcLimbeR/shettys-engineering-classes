"use client";

import React from 'react';
import { Box, Typography, Container, Paper, Avatar, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const founder = {
  name: 'Prof. Sukumara Shetty (Shetty Sir)',
  title: 'Founder & Educator',
  achievements: [
    '**1st Topper** SVCE Bangalore',
    'VTU Karnataka **11th Rank (2005)**',
    '**14+ Years** of Teaching & Industry Experience',
  ],
  bio: `A passionate Educator, mentor, and the driving force behind Shetty's Engineering Classes, Prof. Sukumara Shetty (Shetty Sir) has guided thousands of Engineering students across the globe with his clear explanations, motivational teaching, and Exam-smart strategies.

Renowned for his student-first approach, Shetty Sir combines traditional board based techniques with modern tools like Zoom sessions, digital quizzes, and custom PDFs, creating a learning environment where every student feels confident, supported, and inspired to succeed.

His teaching isn't just about completing the syllabus — it's about building confidence, cracking exams, and unlocking every student's true potential.

He teaches **50+ subjects** across Electronics & Telecommunication, Computer, Artificial Intelligence, Data Science, Machine Learning, and Electrical Engineering domains.`,
  message: `Dear Students & Parents,\n\nWhen I started Shetty's Engineering Classes, my only goal was simple — to create a space where students feel supported, understood, and genuinely confident in their subjects. Over the years, that goal has evolved into a deeper mission: "Towards Students Satisfaction."\n\nIn today's fast-paced education system, many students struggle not because of lack of effort, but due to lack of personalized guidance. Here, at our institute on Ghole Road, Off FC Road, I make it a point to know every student, their strengths and weaknesses, and guide them with the right methods — not just to pass, but to truly learn and grow.\n\nThis institute is not just about notes and lectures. It's about building belief, one student at a time.\n\nLet's continue the journey together with honesty, clarity, and commitment to excellence.\n\nWarm regards,\nProf. Sukumar Shetty\nFounder & Educator\nShetty's Engineering Classes`,
};

const faculty = [
  {
    name: 'Prof. Shetty',
    department: 'E&TC, Computer, Electrical, AI, DS',
    experience: '15+ Years',
    color: '#1976d2'
  },
  {
    name: 'Prof. Patil',
    department: 'Mathematics',
    experience: '20+ Years',
    color: '#ff6b35'
  },
  {
    name: 'Prof. Pardeshi',
    department: 'Civil',
    experience: '15+ Years',
    color: '#4caf50'
  },
  {
    name: 'Prof. Pandharpure',
    department: 'Computer',
    experience: '20+ Years',
    color: '#9c27b0'
  },
  {
    name: 'Prof. Mulay',
    department: 'Mechanical',
    experience: '25+ Years',
    color: '#f44336'
  },
  {
    name: 'Prof. Bhatt',
    department: 'Mechanical',
    experience: '5+ Years',
    color: '#ff9800'
  },
  {
    name: 'Prof. Salunke',
    department: 'Physics',
    experience: '10+ Years',
    color: '#607d8b'
  }
];

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
            <Stack direction={{ xs: 'row', md: 'row' }} spacing={{ xs: 2, md: 4 }} alignItems={{ xs: 'flex-start', md: 'flex-start' }}>
              {/* Founder Photo */}
              <Avatar
                sx={{ 
                  width: { xs: 80, md: 120 }, 
                  height: { xs: 80, md: 120 }, 
                  bgcolor: '#1976d2', 
                  fontSize: { xs: 40, md: 60 },
                  flexShrink: 0,
                  mt: { xs: 0, md: 1 },
                  alignSelf: { xs: 'flex-start', md: 'flex-start' }
                }}
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
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                  }}
                >
                  {founder.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#666' }}>
                    {founder.title}
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 600, mb: 1 }}>
                    <span dangerouslySetInnerHTML={{ __html: founder.achievements[0].replace(/\*\*(.*?)\*\*/g, '<span style="color: #ff6b35; font-weight: 700;">$1</span>') }} />
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 600, mb: 1 }}>
                    <span dangerouslySetInnerHTML={{ __html: founder.achievements[1].replace(/\*\*(.*?)\*\*/g, '<span style="color: #ff6b35; font-weight: 700;">$1</span>') }} />
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 600 }}>
                    <span dangerouslySetInnerHTML={{ __html: founder.achievements[2].replace(/\*\*(.*?)\*\*/g, '<span style="color: #ff6b35; font-weight: 700;">$1</span>') }} />
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: '#444', mb: 2, fontWeight: 400 }}>
                  <span dangerouslySetInnerHTML={{ __html: founder.bio.replace(/\*\*(.*?)\*\*/g, '<span style="color: #ff6b35; font-weight: 700;">$1</span>').replace(/\n\n/g, '</p><p style="margin-bottom: 2rem; line-height: 1.8;">') }} />
                </Typography>
                
                {/* Social Media Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3 }}>
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
                  <IconButton
                    href="https://www.youtube.com/@SEC_Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#FF0000',
                      '&:hover': {
                        color: '#CC0000',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <YouTubeIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                  <IconButton
                    href="https://wa.me/919209455752?text=Hello%20Shetty%20Sir%2C%20I%20am%20interested%20in%20your%20classes."
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#25D366',
                      '&:hover': {
                        color: '#128C7E',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                  <IconButton
                    href="tel:+919209455752"
                    sx={{
                      color: '#007bff',
                      '&:hover': {
                        color: '#0056b3',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                </Box>
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
              mb: 8, // Added margin bottom for spacing
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
              Founder&apos;s Message
            </Typography>
            {founder.message.split('\n').map((line, idx) => (
              <Typography key={idx} variant="h6" sx={{ fontWeight: 400, mb: 2, opacity: 0.95 }}>
                {line}
              </Typography>
            ))}
          </Paper>
        </motion.div>

        {/* Our Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box id="faculty" sx={{ mt: 4 }}> {/* Added margin top for additional spacing */}
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                fontWeight: 900,
                mb: 6,
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Faculty
            </Typography>
          
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(3, 1fr)' 
              },
              gap: 3,
            }}
          >
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.08)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(25, 118, 210, 0.15)',
                    },
                  }}
                >
                  {/* Faculty Photo */}
                  <Avatar
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      bgcolor: member.color, 
                      fontSize: 40,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <PersonIcon fontSize="inherit" />
                  </Avatar>
                  
                  {/* Faculty Info */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#333',
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  
                                     <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mb: 1, textAlign: 'center' }}>
                     <SchoolIcon sx={{ fontSize: 16, color: member.color }} />
                     <Typography
                       variant="body2"
                       sx={{
                         color: '#666',
                         fontWeight: 500,
                         fontSize: '0.85rem',
                         textAlign: 'center',
                       }}
                     >
                       {member.department}
                     </Typography>
                   </Stack>
                   
                   <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ textAlign: 'center' }}>
                     <WorkIcon sx={{ fontSize: 16, color: member.color }} />
                     <Typography
                       variant="body2"
                       sx={{
                         color: '#666',
                         fontWeight: 500,
                         fontSize: '0.85rem',
                         textAlign: 'center',
                       }}
                     >
                       {member.experience}
                     </Typography>
                   </Stack>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutFounderSection; 