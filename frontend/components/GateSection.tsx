"use client";

import React from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const coursesOffered = [
  'GATE Electronics & Communication Engineering (ECE)',
  'GATE Computer Science & Engineering (CSE)',
  'GATE Data Science & Artificial Intelligence (DA)',
  'GATE Mechanical Engineering (ME)',
  'GATE Civil Engineering (CE)',
];

const whyChoose = [
  'Concept-based teaching',
  'Complete syllabus coverage',
  'Previous Year Question (PYQ) discussion',
  'Topic-wise practice problems',
  'Regular tests and performance analysis',
  'Personal guidance and doubt-solving',
  'Small batch size for individual attention',
  'Offline & Online learning support (if applicable)',
];

const whoCanJoin = [
  'B.E. / B.Tech Third and Final Year Engineering Students',
  'Engineering Graduates',
  'PSU Aspirants',
  'M.Tech & Research Aspirants',
];

const careerOpportunities = [
  'Admission to IITs, IISc, NITs, and other premier institutes',
  'M.Tech, MS, and PhD programs',
  'PSU Recruitment',
  'Research & Development Careers',
  'Scholarships and Financial Assistance',
  'Higher Studies in India and Abroad',
];

const subjectsCovered = [
  'Engineering Mathematics',
  'General Aptitude',
  'Core Technical Subjects',
  'Numerical Problem Solving',
  'Mock Tests & Previous Year Papers',
];

const cardSx = {
  p: 3,
  height: '100%',
  borderRadius: 3,
  border: '1px solid rgba(25, 118, 210, 0.12)',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
};

const BulletList = ({ items }: { items: string[] }) => (
  <List dense disablePadding>
    {items.map((item) => (
      <ListItem key={item} sx={{ py: 0.4, px: 0, alignItems: 'flex-start' }}>
        <ListItemIcon sx={{ minWidth: 32, mt: 0.3 }}>
          <CheckCircleOutlineIcon sx={{ fontSize: 20, color: '#1976d2' }} />
        </ListItemIcon>
        <ListItemText
          primary={item}
          primaryTypographyProps={{
            sx: { color: '#444', fontSize: { xs: '0.95rem', md: '1.05rem' } },
          }}
        />
      </ListItem>
    ))}
  </List>
);

const GateSection: React.FC = () => {
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
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
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
              GATE
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#1565c0',
                fontWeight: 700,
                maxWidth: '900px',
                mx: 'auto',
                mb: 2,
              }}
            >
              Prepare for India&apos;s Most Prestigious Technical Examination
            </Typography>
            <Typography
              sx={{
                color: '#555',
                fontSize: { xs: '1rem', md: '1.15rem' },
                maxWidth: '850px',
                mx: 'auto',
                mb: 1.5,
                lineHeight: 1.7,
              }}
            >
              The Graduate Aptitude Test in Engineering (GATE) is the gateway to higher education, PSU jobs, research opportunities, and careers in leading engineering organizations.
            </Typography>
            <Typography
              sx={{
                color: '#555',
                fontSize: { xs: '1rem', md: '1.15rem' },
                maxWidth: '850px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              At Shetty&apos;s Engineering Classes, we focus on building strong concepts, problem-solving skills, and exam-oriented preparation.
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            alignItems: 'stretch',
          }}
        >
          <Paper elevation={0} sx={cardSx}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1976d2', mb: 2 }}>
              Courses Offered
            </Typography>
            <BulletList items={coursesOffered} />
          </Paper>

          <Paper elevation={0} sx={cardSx}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1976d2', mb: 2 }}>
              Why Choose Our GATE Program?
            </Typography>
            <BulletList items={whyChoose} />
          </Paper>

          <Paper elevation={0} sx={cardSx}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1976d2', mb: 2 }}>
              Who Can Join?
            </Typography>
            <BulletList items={whoCanJoin} />
          </Paper>

          <Paper elevation={0} sx={cardSx}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1976d2', mb: 2 }}>
              Career Opportunities After GATE
            </Typography>
            <Typography sx={{ color: '#555', mb: 1.5 }}>
              A good GATE score can help you achieve:
            </Typography>
            <BulletList items={careerOpportunities} />
          </Paper>

          <Paper elevation={0} sx={{ ...cardSx, gridColumn: { xs: '1', md: '1 / -1' } }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1976d2', mb: 1 }}>
              Subjects Covered
            </Typography>
            <Typography sx={{ color: '#555', mb: 2 }}>
              Our course covers the complete GATE syllabus with emphasis on:
            </Typography>
            <Box component="ol" sx={{ m: 0, pl: 3, color: '#444', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
              {subjectsCovered.map((subject) => (
                <Box component="li" key={subject} sx={{ mb: 0.75 }}>
                  {subject}
                </Box>
              ))}
            </Box>
          </Paper>

          <Paper elevation={0} sx={{ ...cardSx, gridColumn: { xs: '1', md: '1 / -1' } }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1976d2', mb: 2 }}>
              Student Testimonials
            </Typography>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos-with-students/gate-result-poster.jpeg"
                alt="GATE student testimonials - Shetty's Engineering Classes"
                style={{
                  width: '100%',
                  maxWidth: '480px',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: 8,
                  display: 'block',
                }}
              />
            </Box>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              ...cardSx,
              gridColumn: { xs: '1', md: '1 / -1' },
              background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
              border: '1px solid rgba(25, 118, 210, 0.16)',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1976d2', mb: 1.5 }}>
              Upcoming Batches
            </Typography>
            <Typography sx={{ color: '#444', fontSize: '1.1rem', mb: 1 }}>
              New batches will be announced soon
            </Typography>
            <Typography sx={{ color: '#666' }}>
              Contact us to know more about admissions, schedules, and course details.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default GateSection;
