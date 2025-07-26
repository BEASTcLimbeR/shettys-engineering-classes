"use client";

import React from 'react';
import { Box, Typography, Container, Link, Stack, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Courses', href: '#' },
  { label: 'Coding', href: '#' },
  { label: 'Testimonials', href: '#' },
  { label: 'Schedule', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const contact = {
  address: '3rd Floor, besides Namaskar Restaurant, opp. MJM Hospital, Ghole Road, Off. FC Road, Pune-04',
  phone: '+91 99234 60156',
  email: 'shettyseng@gmail.com',
  instagram: 'https://instagram.com/shettys_engineering_classes',
};

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        borderTop: '1px solid #e0e0e0',
        py: { xs: 4, md: 6 },
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          {/* Brand and Copyright */}
          <Box sx={{ mb: { xs: 2, md: 0 } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              Shetty's Engineering Classes
            </Typography>
            <Typography variant="body2" sx={{ color: '#888' }}>
              © {new Date().getFullYear()} Shetty's Engineering Classes. All rights reserved.
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                underline="hover"
                sx={{ color: '#1976d2', fontWeight: 600, fontSize: '1rem', mx: 1 }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          {/* Contact & Social */}
          <Stack spacing={1} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon color="primary" fontSize="small" />
              <Typography variant="body2" sx={{ color: '#333' }}>{contact.address}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon color="primary" fontSize="small" />
              <Link href={`tel:${contact.phone.replace(/\s+/g, '')}`} underline="hover" sx={{ color: '#1976d2', fontWeight: 600 }}>
                {contact.phone}
              </Link>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon color="primary" fontSize="small" />
              <Link href={`mailto:${contact.email}`} underline="hover" sx={{ color: '#1976d2', fontWeight: 600 }}>
                {contact.email}
              </Link>
            </Stack>
            <IconButton
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#E1306C', mt: 1 }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 