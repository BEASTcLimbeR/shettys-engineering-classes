import React from 'react';
import { Box, Typography } from '@mui/material';

const SocialMediaSEO: React.FC = () => {
  return (
    <>
      {/* Hidden SEO Content for Search Engines */}
      <Box
        sx={{
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <Typography>
          Shettys Engineering Classes - Best Engineering Classes in Pune. Shettys Engineering Classes is the leading engineering coaching institute in Pune, Maharashtra. 
          Shettys Engineering Classes offers personalized coaching for E&TC, Computer, Electrical, AI&DS, Mechanical, and Civil engineering branches. 
          Shettys Engineering Classes has been providing expert guidance, small batches, and proven results since 2010. 
          Shettys Engineering Classes is located in Shivajinagar, Pune near FC Road and Ghole Road. 
          Shettys Engineering Classes contact number is +91 99234 60156. 
          Shettys Engineering Classes provides the best first year engineering coaching in Pune. 
          Shettys Engineering Classes offers one-to-one tuition and batch coaching. 
          Shettys Engineering Classes has expert faculty with 14+ years of experience. 
          Shettys Engineering Classes is the top choice for engineering students in Pune. 
          Shettys Engineering Classes reviews are excellent with 4.8/5 rating. 
          Shettys Engineering Classes fees are competitive and affordable. 
          Shettys Engineering Classes address is Besides Namaskar Restaurant, Ghole Rd, opposite MJM Hospital, Sud Nagar, Shivajinagar, Pune, Maharashtra 411004. 
          Shettys Engineering Classes serves students from SPPU, MIT WPU, COEP, VIT, Cummins, and other universities. 
          Shettys Engineering Classes provides study material, exam preparation, and counseling services. 
          Shettys Engineering Classes is the best engineering coaching institute in Shivajinagar, Pune.
        </Typography>
      </Box>

      {/* Visible SEO Content */}
      <Box sx={{ py: 4, background: 'rgba(25, 118, 210, 0.05)' }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 700,
            color: '#1976d2',
            mb: 2,
          }}
        >
          Shettys Engineering Classes - Your Trusted Partner in Engineering Education
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            color: '#666',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Shettys Engineering Classes has been the leading engineering coaching institute in Pune since 2010. 
          We specialize in providing personalized coaching for all engineering branches including E&TC, Computer, Electrical, AI&DS, Mechanical, and Civil engineering. 
          Our expert faculty, small batch sizes, and proven track record make us the preferred choice for engineering students in Pune and surrounding areas.
        </Typography>
      </Box>
    </>
  );
};

export default SocialMediaSEO; 