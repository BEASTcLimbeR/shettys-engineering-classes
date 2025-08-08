"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import { Close, CalendarToday } from '@mui/icons-material';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScheduleModalProps {
  open: boolean;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 1,
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          color: 'white',
          borderRadius: '12px 12px 0 0',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <CalendarToday sx={{ fontSize: 28 }} />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Academic Calendar 2025
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{
            color: 'white',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Box sx={{ p: 3 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                background: 'white',
              }}
            >
              <Image
                src="/academic-calendar-2025.jpg"
                alt="Academic Calendar 2025 - SHETTY's Engineering Classes"
                width={800}
                height={600}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
                priority
              />
            </Paper>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#333',
                  mb: 2,
                }}
              >
                Key Academic Dates
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center', p: 2, background: 'rgba(255, 107, 53, 0.1)', borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ff6b35' }}>
                    Conclusion AY 2024-25
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    25th May 2025
                  </Typography>
                </Box>
                
                <Box sx={{ textAlign: 'center', p: 2, background: 'rgba(25, 118, 210, 0.1)', borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1976d2' }}>
                    Commencement AY 2025-26
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Non-SPPU: 1st July 2025
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    SPPU: 4th July 2025
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal; 