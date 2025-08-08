"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ open, onClose, imageSrc, imageAlt }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      PaperProps={{
        sx: {
          background: 'rgba(0, 0, 0, 0.9)',
          borderRadius: 0,
          boxShadow: 'none',
          maxWidth: '95vw',
          maxHeight: '95vh',
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 10,
            color: 'white',
            background: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <Close />
        </IconButton>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
              priority
            />
          </Box>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal; 