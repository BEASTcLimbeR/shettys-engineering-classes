import React from 'react';
import { Typography } from '@mui/material';

const HeroHeadline = () => (
  <>
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
        fontWeight: 900,
        lineHeight: 1.1,
        mb: 2,
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      Shetty's Engineering Classes
    </Typography>
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
        fontWeight: 800,
        lineHeight: 1.1,
        mb: 2,
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Towards Students
    </Typography>
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
        fontWeight: 800,
        lineHeight: 1.1,
        mb: 3,
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Satisfaction
    </Typography>
  </>
);

export default HeroHeadline;