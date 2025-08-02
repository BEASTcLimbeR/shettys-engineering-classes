import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'next/image';
import Loader from '../../components/Loader';
import handLoading from '../../../public/hand-loading.json';

const photoFilenames = [
  'photo-1.jpg',
  'photo-2.jpg',
  'photo-3.jpg',
  'photo-4.jpg',
  'photo-5.jpg',
  'photo-6.jpg',
  'photo-7.jpg',
  'photo-8.jpg',
  'photo-9.jpg',
  'photo-10.jpg',
  'photo-11.jpg',
  'photo-12.jpg',
  'photo-13.jpg',
  'photo-14.jpg',
  'photo-15.jpg',
  'photo-16.jpg',
  'photo-17.jpg',
];

const GalleryPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '100vh', position: 'relative' }}>
      {loading && <Loader animationData={handLoading} overlay />}
      {!loading && (
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ fontWeight: 900, mb: 6, background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Photos with our students
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {photoFilenames.map((filename, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={filename}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: 3,
                    background: 'white',
                    transition: 'transform 0.3s cubic-bezier(.4,2,.3,1), box-shadow 0.3s cubic-bezier(.4,2,.3,1)',
                    '&:hover': {
                      transform: 'scale(1.04)',
                      boxShadow: 6,
                    },
                    width: '100%',
                    maxWidth: 400,
                  }}
                >
                  <Image
                    src={`/photos-with-students/${filename}`}
                    alt={`Student photo ${idx + 1}`}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    loading="lazy"
                    quality={70}
                    placeholder="blur"
                    blurDataURL="/photos-with-students/photo-1.jpg"
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default GalleryPage;