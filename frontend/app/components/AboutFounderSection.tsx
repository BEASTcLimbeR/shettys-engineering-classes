"use client";

import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Stack,
  IconButton,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

// Client component for dynamic content to avoid hydration issues
const DynamicContent: React.FC<{ content: string; type: 'achievement' | 'bio' }> = ({ content, type }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const processedContent = React.useMemo(() => {
    if (type === 'achievement') {
      return content.replace(/\*\*(.*?)\*\*/g, '<span style="color: #ff6b35; font-weight: 700;">$1</span>');
    } else {
      // For bio content, wrap in paragraph tags and process line breaks
      const processed = content
        .replace(/\*\*(.*?)\*\*/g, '<span style="color: #ff6b35; font-weight: 700;">$1</span>')
        .split('\n\n')
        .map((paragraph, index) => 
          `<p style="margin-bottom: 2rem; line-height: 1.8;">${paragraph}</p>`
        )
        .join('');
      return processed;
    }
  }, [content, type]);

  // Don't render dynamic content during SSR to avoid hydration mismatch
  if (!isClient) {
    return <span>{content}</span>; // Fallback to plain text during SSR
  }

  return <span dangerouslySetInnerHTML={{ __html: processedContent }} />;
};

const founder = {
  name: "Prof. Sukumara Shetty",
  title: "Founder & Lead Educator",
  image: "/shetty-sir.svg",
  achievements: [
    "**1st Topper** SVCE Bangalore",
    "**VTU Karnataka 11th Rank** (2005)",
    "**14+ Years** of Teaching & Industry Experience"
  ],
  bio: "A passionate Educator, mentor, and the driving force behind Shetty's Engineering Classes. With over 14 years of experience in engineering education, I have dedicated my career to helping students achieve their academic goals and build successful careers in engineering.\n\nMy journey began as a student at SVCE Bangalore, where I secured the **1st rank** and later achieved the **11th rank** in VTU Karnataka in 2005. This academic excellence, combined with extensive industry experience, has shaped my teaching methodology.\n\nAt Shetty's Engineering Classes, we believe in **personalized learning** and **small batch sizes** to ensure every student receives individual attention. Our proven track record speaks for itself - we've helped hundreds of students excel in their engineering journey.\n\nMy mission is to make quality engineering education accessible to every student in Pune, providing them with the knowledge, skills, and confidence to succeed in their academic and professional pursuits."
};

const AboutFounderSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            maxWidth: '1200px',
            mx: 'auto',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid
            direction={{ xs: 'row', md: 'row' }}
            spacing={{ xs: 2, md: 4 }}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            container
          >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center" sx={{ width: '100%' }}>
              {/* Founder Image */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: { xs: 3, md: 0 } }}>
                <Avatar
                  src={founder.image}
                  alt={founder.name}
                  sx={{
                    width: { xs: 120, md: 150 },
                    height: { xs: 120, md: 150 },
                    border: '4px solid #1976d2',
                    boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
                  }}
                />
              </Box>

              {/* Founder Details */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#1976d2',
                    mb: 2,
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  {founder.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#666' }}>
                    {founder.title}
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 600, mb: 1 }}>
                    <DynamicContent content={founder.achievements[0]} type="achievement" />
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 600, mb: 1 }}>
                    <DynamicContent content={founder.achievements[1]} type="achievement" />
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 600 }}>
                    <DynamicContent content={founder.achievements[2]} type="achievement" />
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: '#444', mb: 2, fontWeight: 400 }}>
                  <DynamicContent content={founder.bio} type="bio" />
                </Typography>

                {/* Social Media Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3 }}>
                  <IconButton
                    href="https://www.linkedin.com/in/sukumar-shetty-3950b757?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#0077b5',
                      '&:hover': {
                        color: '#005885',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                  <IconButton
                    href="https://www.youtube.com/@SEC_Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#FF0000',
                      '&:hover': {
                        color: '#CC0000',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <YouTubeIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                  <IconButton
                    href="https://wa.me/919209455752?text=Hello%20Shetty%20Sir%2C%20I%20am%20interested%20in%20your%20classes."
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#25D366',
                      '&:hover': {
                        color: '#128C7E',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                  <IconButton
                    href="tel:+919209455752"
                    sx={{
                      color: '#007bff',
                      '&:hover': {
                        color: '#0056b3',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Paper>
      </motion.div>

      {/* Founder Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            maxWidth: '1200px',
            mx: 'auto',
            mt: 4,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#1976d2',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#444',
              lineHeight: 1.8,
              fontSize: '1.1rem',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            At Shetty's Engineering Classes, we are committed to providing the highest quality engineering education. 
            Our mission is to empower students with knowledge, skills, and confidence to excel in their academic journey 
            and build successful careers in engineering. We believe in personalized learning, expert guidance, and 
            creating an environment where every student can reach their full potential.
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default AboutFounderSection;
