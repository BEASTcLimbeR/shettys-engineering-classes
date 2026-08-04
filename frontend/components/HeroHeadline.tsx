import React from 'react';
import { Box, Typography } from '@mui/material';
import { Oswald, Playfair_Display } from 'next/font/google';

// Bold condensed sans-serif — matches the banner title style
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

// Elegant italic serif — matches the gold tagline style
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic'],
  display: 'swap',
});

const GOLD = '#C9A227';
const NAVY = '#0B1D36';

const HeroHeadline = () => (
  <>
    {/* Brand name — condensed, uppercase, high-impact */}
    <Typography
      variant="h1"
      className={oswald.className}
      sx={{
        fontSize: { xs: '2rem', sm: '2.75rem', md: '3.75rem', lg: '4.5rem' },
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: { xs: '0.02em', md: '0.04em' },
        textTransform: 'uppercase',
        color: NAVY,
        mb: { xs: 1.5, md: 2 },
      }}
    >
      Shetty&apos;s Engineering Classes
    </Typography>

    {/* Tagline — italic serif with gold dots and trailing rule */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: { xs: 1, sm: 1.5 },
        mb: { xs: 2, md: 2.5 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <Box
            key={i}
            sx={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: GOLD,
              opacity: 0.85,
            }}
          />
        ))}
      </Box>

      <Typography
        variant="h2"
        className={playfair.className}
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.6rem', md: '2rem', lg: '2.25rem' },
          fontWeight: 400,
          fontStyle: 'italic',
          lineHeight: 1.3,
          color: GOLD,
          m: 0,
        }}
      >
        Towards Students Satisfaction
      </Typography>

      {/* Trailing gold rule like the banner */}
      <Box
        aria-hidden
        sx={{
          width: { xs: 28, sm: 48, md: 64 },
          height: '1.5px',
          backgroundColor: GOLD,
          opacity: 0.9,
          flexShrink: 0,
        }}
      />
    </Box>
  </>
);

export default HeroHeadline;
