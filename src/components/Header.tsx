"use client";

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Image from 'next/image';

// Navigation links with section IDs
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Coding', href: '#coding' }, // Placeholder, not implemented
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Schedule', href: '#schedule' }, // Placeholder, not implemented
  { label: 'Contact Us', href: '#contact' },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setAnchorEl(null);
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
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
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu open/close
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 4px 24px rgba(25, 118, 210, 0.18)' : '0 2px 20px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
      }}
    >
      <Toolbar sx={{ minHeight: scrolled ? '56px' : '70px', transition: 'min-height 0.3s cubic-bezier(.4,2,.3,1)' }}>
        {/* Logo and Brand Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Image src="/logo-icon.svg" alt="Shetty's Engineering Classes Logo" width={40} height={40} style={{ marginRight: 12 }} />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.5rem',
            }}
          >
            Shetty's Engineering Classes
          </Typography>
        </Box>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {navLinks.map((link) => (
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
        
        {/* Mobile Navigation */}
        {isMobile && (
          <>
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
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                '& .MuiPaper-root': {
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {navLinks.map((link) => (
                <MenuItem 
                  key={link.label} 
                  onClick={e => { handleNavClick(e as any, link.href); handleClose(); }}
                  sx={{
                    color: activeSection === link.href.replace('#', '') ? '#1976d2' : '#333',
                    fontWeight: 500,
                    '&:hover': {
                      background: 'rgba(25, 118, 210, 0.1)',
                      color: '#1976d2',
                    },
                  }}
                  component="a"
                  href={link.href}
                >
                  {link.label}
                </MenuItem>
              ))}
              <MenuItem onClick={e => { handleNavClick(e as any, '#contact'); handleClose(); }} sx={{ mt: 1 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{
                    fontWeight: 600,
                    borderRadius: '25px',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #e55a2b 0%, #e0851a 100%)',
                    },
                  }}
                  href="#contact"
                >
                  Book a Free Demo
                </Button>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 