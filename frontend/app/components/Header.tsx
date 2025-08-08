"use client";

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, List, ListItem, ListItemText, Divider, Fade, Slide } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation links with section IDs
const navLinks = [
  { label: 'Home', href: '#home', icon: '🏠' },
  { label: 'About', href: '#about', icon: 'ℹ️' },
  { label: 'Courses', href: '#courses', icon: '📚' },
  { label: 'Coding', href: '#coding', icon: '💻' },
  { label: 'Our Faculty', href: '#faculty', icon: '👨‍🏫' },
  { label: 'Testimonials', href: '#testimonials', icon: '⭐' },
  { label: 'Contact Us', href: '#contact', icon: '📞' },
  { label: 'Gallery', href: '/gallery', icon: '📸' },
  { label: 'YouTube', href: '/youtube', icon: '📺' },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    
    const section = document.querySelector(href);
    if (section) {
      const headerHeight = scrolled ? 56 : 70;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      setMobileOpen(false);
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 10);
          
          const sectionIds = navLinks.map(link => link.href.replace('#', ''));
          let current = 'home';
          
          for (const id of sectionIds) {
            const section = document.getElementById(id);
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 80 && rect.bottom > 80) {
                current = id;
                break;
              }
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  // Mobile menu drawer
  const mobileMenu = (
    <Box sx={{ width: '100vw', height: '100vh', background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)' }}>
      {/* Header in mobile menu */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 3,
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo-sec-icon.svg" alt="SEC Logo" width={40} height={40} style={{ marginRight: 12 }} />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
            SEC
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation links */}
      <List sx={{ pt: 2 }}>
        {navLinks.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem
              button
              onClick={e => {
                if (link.href.startsWith('#')) {
                  handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, link.href);
                }
                setMobileOpen(false);
              }}
              sx={{
                py: 2,
                px: 3,
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Typography sx={{ fontSize: '1.2rem', mr: 2 }}>
                  {link.icon}
                </Typography>
                <ListItemText
                  primary={link.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '1.1rem',
                    },
                  }}
                />
                {activeSection === link.href.replace('#', '') && (
                  <Box
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: 'white',
                      ml: 'auto',
                    }}
                  />
                )}
              </Box>
            </ListItem>
            {index < navLinks.length - 1 && (
              <Divider sx={{ background: 'rgba(255, 255, 255, 0.2)' }} />
            )}
          </motion.div>
        ))}
      </List>

      {/* CTA Button */}
      <Box sx={{ p: 3, mt: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={e => {
              handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>, '#contact');
              setMobileOpen(false);
            }}
            sx={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              color: 'white',
              fontWeight: 600,
              borderRadius: '25px',
              py: 2,
              fontSize: '1.1rem',
              '&:hover': {
                background: 'linear-gradient(135deg, #e55a2b 0%, #e0851a 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Book a Free Demo
          </Button>
        </motion.div>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 4px 24px rgba(25, 118, 210, 0.18)' : '0 2px 20px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ minHeight: scrolled ? '56px' : '70px', transition: 'min-height 0.3s cubic-bezier(.4,2,.3,1)' }}>
          {/* Logo and Brand Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Image src="/logo-sec-icon.svg" alt="Shetty's Engineering Classes Logo" width={40} height={40} style={{ marginRight: 12 }} />
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '1.5rem',
                  lineHeight: 1.2,
                }}
              >
                Shetty&apos;s Engineering Classes
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  fontWeight: 600,
                  color: '#666',
                  fontSize: '0.75rem',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Since 2010
              </Typography>
            </Box>
          </Box>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <Button
                    key={link.label}
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    sx={{
                      color: activeSection === link.href.replace('#', '') ? '#1976d2' : '#333',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      borderBottom: activeSection === link.href.replace('#', '') ? '2px solid #1976d2' : 'none',
                      '&:hover': {
                        background: 'rgba(25, 118, 210, 0.1)',
                        color: '#1976d2',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {link.label}
                  </Button>
                ) : (
                  <Link key={link.label} href={link.href}>
                    <Button
                      sx={{
                        color: activeSection === link.href.replace('#', '') ? '#1976d2' : '#333',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        borderBottom: activeSection === link.href.replace('#', '') ? '2px solid #1976d2' : 'none',
                        '&:hover': {
                          background: 'rgba(25, 118, 210, 0.1)',
                          color: '#1976d2',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {link.label}
                    </Button>
                  </Link>
                )
              ))}
              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  fontWeight: 600,
                  borderRadius: '25px',
                  px: 3,
                  py: 1,
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #e55a2b 0%, #e0851a 100%)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
                href="#contact"
                onClick={e => handleNavClick(e, '#contact')}
              >
                Book a Free Demo
              </Button>
            </Box>
          )}
          
          {/* Mobile Hamburger Button */}
          {isMobile && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                size="large"
                edge="end"
                sx={{
                  color: '#333',
                  '&:hover': {
                    background: 'rgba(25, 118, 210, 0.1)',
                  },
                }}
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CloseIcon />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MenuIcon />
                    </motion.div>
                  )}
                </AnimatePresence>
              </IconButton>
            </motion.div>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100vw',
            background: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200 
              }}
              style={{ height: '100%' }}
            >
              {mobileMenu}
            </motion.div>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  );
};

export default Header; 