"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Link as MuiLink, Stack, IconButton, Paper, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Coding Academy', href: '/coding-academy' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '#contact' },
];

const quickLinks = [
  { label: 'Programming Basics', href: '/coding-academy/basics' },
  { label: 'Why Choose SEC', href: '#why-us' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Student Success', href: '#testimonials' },
];

const contact = {
  address: '3rd Floor, besides Namaskar Restaurant, opp. MJM Hospital, Ghole Road, Off. FC Road, Pune-04',
  phone: '+91 99234 60156',
  email: 'shettyseng@gmail.com',
  instagram: 'https://instagram.com/shettys_engineering_classes',
  whatsapp: 'https://wa.me/919923460156',
  youtube: 'https://www.youtube.com/@SEC_Pune',
  facebook: 'https://www.facebook.com/share/1Dy6BBvbY8/',
  justdial: 'https://jsdl.in/DT-49D672TZ',
  whatsappChannel: 'https://whatsapp.com/channel/0029VaFdKKwGk1G1F0VpOZ0y',
  linkedin: 'https://www.linkedin.com/in/sukumar-shetty-3950b757?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  timings: 'Mon-Sat: 9:00 AM - 8:00 PM',
};

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
        }
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
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
          bottom: '20%',
          left: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255, 107, 53, 0.05)',
          filter: 'blur(30px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={{ xs: 4, md: 6 }}
            justifyContent="space-between"
          >
            {/* Brand Section */}
            <Box sx={{ flex: 1, maxWidth: { lg: '300px' } }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <SchoolIcon sx={{ fontSize: 40, color: '#ff6b35' }} />
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 0.5,
                    }}
                  >
                    SEC
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: 500,
                    }}
                  >
                    Shetty&apos;s Engineering Classes
                  </Typography>
                </Box>
              </Stack>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Empowering engineering students with personalized coaching, expert guidance, and proven academic excellence for over 15+ years.
              </Typography>

              {/* Social Links */}
              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
                <IconButton
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#E1306C',
                    background: 'rgba(225, 48, 108, 0.1)',
                    '&:hover': {
                      background: 'rgba(225, 48, 108, 0.2)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#25D366',
                    background: 'rgba(37, 211, 102, 0.1)',
                    '&:hover': {
                      background: 'rgba(37, 211, 102, 0.2)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton
                  href={contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#FF0000',
                    background: 'rgba(255, 0, 0, 0.1)',
                    '&:hover': {
                      background: 'rgba(255, 0, 0, 0.2)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#1877F2',
                    background: 'rgba(24, 119, 242, 0.1)',
                    '&:hover': {
                      background: 'rgba(24, 119, 242, 0.2)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#0077B5',
                    background: 'rgba(0, 119, 181, 0.1)',
                    '&:hover': {
                      background: 'rgba(0, 119, 181, 0.2)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href={contact.justdial}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#FF6B35',
                    background: 'rgba(255, 107, 53, 0.1)',
                    '&:hover': {
                      background: 'rgba(255, 107, 53, 0.2)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <SchoolIcon />
                </IconButton>
                <IconButton
                  href={contact.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#25D366',
                    background: 'rgba(37, 211, 102, 0.1)',
                    '&:hover': {
                      background: 'rgba(37, 211, 102, 0.2)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Stack>
            </Box>

            {/* Quick Links */}
            <Box sx={{ flex: 1, maxWidth: { lg: '200px' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#ff6b35',
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={2}>
                {quickLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    <Typography
                      component="span"
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#ff6b35',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Navigation */}
            <Box sx={{ flex: 1, maxWidth: { lg: '200px' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#ff6b35',
                }}
              >
                Navigation
              </Typography>
              <Stack spacing={2}>
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    <Typography
                      component="span"
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#ff6b35',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Contact Info */}
            <Box sx={{ flex: 1, maxWidth: { lg: '300px' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#ff6b35',
                }}
              >
                Contact Info
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <LocationOnIcon sx={{ color: '#ff6b35', mt: 0.5, fontSize: 20 }} />
                  <MuiLink
                    href="https://maps.google.com/?q=3rd+Floor+besides+Namaskar+Restaurant+opp+MJM+Hospital+Ghole+Road+Off+FC+Road+Pune+04"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.5,
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#ff6b35',
                      },
                    }}
                  >
                    {contact.address}
                  </MuiLink>
                </Stack>
                
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneIcon sx={{ color: '#ff6b35', fontSize: 20 }} />
                  <MuiLink
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    underline="none"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#ff6b35',
                      },
                    }}
                  >
                    {contact.phone}
                  </MuiLink>
                </Stack>
                
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon sx={{ color: '#ff6b35', fontSize: 20 }} />
                  <MuiLink
                    href={`mailto:${contact.email}`}
                    underline="none"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#ff6b35',
                      },
                    }}
                  >
                    {contact.email}
                  </MuiLink>
                </Stack>
                
                <Stack direction="row" spacing={2} alignItems="center">
                  <AccessTimeIcon sx={{ color: '#ff6b35', fontSize: 20 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 500,
                    }}
                  >
                    {contact.timings}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

        {/* Bottom Section */}
        <Box sx={{ pb: 4 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                textAlign: { xs: 'left', md: 'center' },
              }}
            >
              © {currentYear} Shetty&apos;s Engineering Classes. All rights reserved.
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                textAlign: { xs: 'left', md: 'center' },
              }}
            >
              Empowering Students • Building Futures • Creating Success
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 