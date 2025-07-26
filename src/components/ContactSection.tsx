"use client";

import React from 'react';
import { Box, Typography, Container, Paper, Stack, Button, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const contact = {
  address: '3rd Floor, besides Namaskar Restaurant, opp. MJM Hospital, Ghole Road, Off. FC Road, Pune-04',
  phone: '+91 99234 60156',
  email: 'shettyseng@gmail.com',
  instagram: 'https://instagram.com/shettys_engineering_classes',
};

const ContactSection: React.FC = () => {
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

      <Container maxWidth="sm">
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
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 900,
                mb: 3,
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Contact Us
            </Typography>
            <Stack spacing={3} sx={{ mb: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <LocationOnIcon color="primary" />
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  {contact.address}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <PhoneIcon color="primary" />
                <Link href={`tel:${contact.phone.replace(/\s+/g, '')}`} underline="hover" sx={{ fontWeight: 600, color: '#1976d2' }}>
                  {contact.phone}
                </Link>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <EmailIcon color="primary" />
                <Link href={`mailto:${contact.email}`} underline="hover" sx={{ fontWeight: 600, color: '#1976d2' }}>
                  {contact.email}
                </Link>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <InstagramIcon sx={{ color: '#E1306C' }} />
                <Link href={contact.instagram} target="_blank" underline="hover" sx={{ fontWeight: 600, color: '#E1306C' }}>
                  @shettys_engineering_classes
                </Link>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              size="large"
              color="primary"
              href={`mailto:${contact.email}`}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                borderRadius: '30px',
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                boxShadow: '0 8px 32px rgba(25, 118, 210, 0.08)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Send an Email
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection; 