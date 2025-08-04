"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, IconButton, Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import Head from 'next/head';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/photos-with-students/photo-1.jpg',
    '/photos-with-students/photo-2.jpg',
    '/photos-with-students/photo-3.jpg',
    '/photos-with-students/photo-4.jpg',
    '/photos-with-students/photo-5.jpg',
    '/photos-with-students/photo-6.jpg',
    '/photos-with-students/photo-7.jpg',
    '/photos-with-students/photo-8.jpg',
    '/photos-with-students/photo-9.jpg',
    '/photos-with-students/photo-10.jpg',
    '/photos-with-students/photo-11.jpg',
    '/photos-with-students/photo-12.jpg',
    '/photos-with-students/photo-13.jpg',
    '/photos-with-students/photo-14.jpg',
    '/photos-with-students/photo-15.jpg',
    '/photos-with-students/photo-16.jpg',
    '/photos-with-students/photo-17.jpg',
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Gallery - Student Life & Activities | Shetty's Engineering Classes</title>
        <meta name="description" content="Explore our gallery showcasing student life, classroom activities, and success stories at Shetty's Engineering Classes. See our vibrant learning environment and student achievements." />
        <meta name="keywords" content="student gallery, engineering classes photos, classroom activities, student life, engineering coaching photos, Pune engineering institute gallery" />
        <meta property="og:title" content="Gallery - Student Life & Activities" />
        <meta property="og:description" content="Explore our gallery showcasing student life, classroom activities, and success stories at Shetty's Engineering Classes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shettysengineeringclasses.com/gallery" />
        <link rel="canonical" href="https://shettysengineeringclasses.com/gallery" />
      </Head>

      <Box sx={{ pt: '70px', minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                fontWeight: 900,
                mb: 6,
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Our Gallery
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: '#666',
                mb: 6,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Explore moments from our vibrant learning environment, student activities, and success stories
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            <AnimatePresence>
              {images.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card
                      sx={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 32px rgba(25, 118, 210, 0.2)',
                        },
                      }}
                      onClick={() => handleImageClick(image)}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={image}
                        alt={`Gallery image ${index + 1}`}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </Container>
      </Box>

      <Dialog
        open={!!selectedImage}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0 }}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleClose} color="primary">
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GalleryPage;