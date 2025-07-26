"use client";

import React from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const faqs = [
  {
    question: 'What types of courses do you offer?',
    answer: 'We offer comprehensive coaching for engineering students from FE to BE across all branches, including SPPU, E&TC, CS, Electrical, IT, AI&DS, Mechanical, and more. We also provide one-to-one tuition for all other Indian and foreign universities.'
  },
  {
    question: 'What are doubt sessions and how can I ask questions?',
    answer: 'We conduct regular doubt clinics and small batch sessions where you can ask questions directly to the faculty. You can also reach out via WhatsApp or email for additional support.'
  },
  {
    question: 'How can I book a free demo?',
    answer: 'You can book a free demo by clicking the “Book a Free Demo” button on our website or by contacting us via phone or email.'
  },
  {
    question: 'Can I attend classes online?',
    answer: 'Yes! We offer a hybrid model with both online (Zoom) and offline (in-person) classes at our Ghole Road center.'
  },
  {
    question: 'Do you provide notes and previous year question papers?',
    answer: 'Yes, we provide detailed notes, PYQs, and regular unit tests to help you prepare thoroughly for exams.'
  },
  {
    question: 'Is there a refund policy if I am not satisfied with the course?',
    answer: 'We are committed to student satisfaction. Please contact us directly to discuss any concerns or refund requests.'
  },
];

const FAQSection: React.FC = () => {
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

      <Container maxWidth="md">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <HelpOutlineIcon sx={{ fontSize: 48, color: '#1976d2', mb: 1 }} />
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
              Frequently Asked Questions
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
              Answers to common questions from students and parents.
            </Typography>
          </Box>
        </motion.div>

        {/* FAQ Accordions */}
        <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4, background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(255,255,255,0.2)' }}>
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <Accordion sx={{ mb: 2, boxShadow: 'none', background: 'transparent', borderRadius: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1976d2' }}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ color: '#444', fontWeight: 400 }}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default FAQSection; 