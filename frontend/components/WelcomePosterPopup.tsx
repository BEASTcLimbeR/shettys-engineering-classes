"use client";

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Button,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AnimatePresence, motion } from 'framer-motion';

const POSTERS = [
  {
    src: '/photos-with-students/gate-result-poster.jpeg',
    alt: "GATE results poster - Shetty's Engineering Classes",
  },
  {
    src: '/photos-with-students/16-years-poster.jpeg',
    alt: "16 Years Completed poster - Shetty's Engineering Classes",
  },
] as const;

const SESSION_KEY = 'sec-welcome-posters-dismissed';

/**
 * Shows welcome posters (GATE + 16 Years) when a visitor opens the site.
 * Close dismisses them for the rest of the browser session.
 */
const WelcomePosterPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === '1') return;
    } catch {
      // sessionStorage may be blocked; still show the popup
    }
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // ignore storage errors
    }
  };

  const isLast = index === POSTERS.length - 1;
  const poster = POSTERS[index];

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(POSTERS.length - 1, i + 1));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      aria-labelledby="welcome-poster-title"
      PaperProps={{
        sx: {
          backgroundColor: '#0B1D36',
          borderRadius: 2,
          overflow: 'hidden',
          m: { xs: 1.5, sm: 2 },
          maxHeight: { xs: '92vh', sm: '90vh' },
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.72)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <IconButton
          onClick={handleClose}
          aria-label="Close posters and continue to website"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 2,
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent
          sx={{
            p: { xs: 1, sm: 1.5 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: { xs: 220, sm: 320 },
            }}
          >
            {/* Prev */}
            <IconButton
              onClick={goPrev}
              disabled={index === 0}
              aria-label="Previous poster"
              sx={{
                position: 'absolute',
                left: { xs: 0, sm: 4 },
                zIndex: 1,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.65)' },
                '&.Mui-disabled': { color: 'rgba(255,255,255,0.25)' },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <AnimatePresence mode="wait">
              <motion.div
                key={poster.src}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '0 40px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  id="welcome-poster-title"
                  src={poster.src}
                  alt={poster.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: 4,
                    display: 'block',
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <IconButton
              onClick={goNext}
              disabled={isLast}
              aria-label="Next poster"
              sx={{
                position: 'absolute',
                right: { xs: 0, sm: 4 },
                zIndex: 1,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.65)' },
                '&.Mui-disabled': { color: 'rgba(255,255,255,0.25)' },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>

          {/* Dot indicators */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {POSTERS.map((p, i) => (
              <Box
                key={p.src}
                onClick={() => setIndex(i)}
                role="button"
                aria-label={`Show poster ${i + 1}`}
                sx={{
                  width: i === index ? 18 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: i === index ? '#C9A227' : 'rgba(255,255,255,0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
            <Typography
              sx={{
                ml: 1,
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              {index + 1} / {POSTERS.length}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1.5, mb: 0.5, flexWrap: 'wrap', justifyContent: 'center' }}>
            {!isLast ? (
              <Button
                variant="contained"
                onClick={goNext}
                sx={{
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  textTransform: 'none',
                  backgroundColor: '#C9A227',
                  color: '#0B1D36',
                  '&:hover': { backgroundColor: '#b8911f' },
                }}
              >
                Next
              </Button>
            ) : null}
            <Button
              variant={isLast ? 'contained' : 'outlined'}
              onClick={handleClose}
              sx={{
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: 'none',
                ...(isLast
                  ? {
                      backgroundColor: '#C9A227',
                      color: '#0B1D36',
                      '&:hover': { backgroundColor: '#b8911f' },
                    }
                  : {
                      borderColor: 'rgba(255,255,255,0.5)',
                      color: '#fff',
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                      },
                    }),
              }}
            >
              Close & Continue
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default WelcomePosterPopup;
