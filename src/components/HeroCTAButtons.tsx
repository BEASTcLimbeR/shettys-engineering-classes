import React from 'react';
import { Stack, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const contact = {
  phone: '+91 99234 60156',
  whatsapp: 'https://wa.me/919923460156',
};

const HeroCTAButtons = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in booking a free demo for Shetty's Engineering Classes. Can you please provide me with more information about the courses and schedule?"
    );
    const whatsappUrl = `${contact.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    const phoneNumber = contact.phone.replace(/\s+/g, '');
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={{
        '& > *': { boxShadow: 'none', border: 'none' },
        gap: { xs: 2, sm: 3 },
      }}
    >
      <Button
        variant="contained"
        size="large"
        onClick={handleWhatsAppClick}
        startIcon={<WhatsAppIcon />}
        sx={{
          px: 4,
          py: 2,
          fontSize: '1.1rem',
          fontWeight: 700,
          borderRadius: '50px',
          minHeight: '52px',
          lineHeight: 1.5,
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #e55a2b 0%, #e0851a 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 35px rgba(255, 107, 53, 0.4)',
          },
          transition: 'all 0.3s ease',
          outline: 'none',
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        }}
      >
        Book a Free Demo
      </Button>
      <Button
        variant="outlined"
        size="large"
        onClick={handleCallClick}
        startIcon={<PhoneIcon />}
        sx={{
          px: 4,
          py: 2,
          fontSize: '1.1rem',
          fontWeight: 600,
          borderRadius: '50px',
          minHeight: '52px',
          lineHeight: 1.5,
          border: '2px solid #1976d2',
          color: '#1976d2',
          backgroundColor: 'transparent',
          '&:hover': {
            background: '#1976d2',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
          },
          transition: 'all 0.3s ease',
          outline: 'none',
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        }}
      >
        Talk to a Counselor
      </Button>
    </Stack>
  );
};

export default HeroCTAButtons;