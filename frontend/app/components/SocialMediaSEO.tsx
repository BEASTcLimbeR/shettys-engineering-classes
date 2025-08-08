import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

const SocialMediaSEO: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <Typography
            variant="h2"
            component="h1"
            gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            color: '#1976d2',
              mb: 4,
              fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
            Shettys Engineering Classes - Best Engineering Coaching in Pune
        </Typography>
          
        <Typography
            variant="h5"
            component="h2"
            gutterBottom
          sx={{
            textAlign: 'center',
            color: '#666',
              mb: 6,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            Leading Engineering Coaching Institute Since 2010 | Expert Guidance for All Engineering Branches
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Business Information */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
                  Business Information
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ color: '#1976d2', mr: 2 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Address
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Besides Namaskar Restaurant, Ghole Rd, opposite MJM Hospital, Sud Nagar, Shivajinagar, Pune, Maharashtra 411004
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ color: '#1976d2', mr: 2 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Phone
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        +91 99234 60156
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ color: '#1976d2', mr: 2 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Email
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        shettyseng@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ color: '#1976d2', mr: 2 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Hours
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Open · Closes 10 pm
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Reviews and Ratings */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
                  Reviews & Ratings
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <StarIcon sx={{ color: '#ffc107', fontSize: '2rem', mr: 1 }} />
                    <Typography variant="h3" sx={{ fontWeight: 700, color: '#1976d2' }}>
                      4.8
                    </Typography>
                    <Typography variant="h6" sx={{ ml: 1, color: '#666' }}>
                      / 5
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    Based on 84 Google reviews
                  </Typography>
                  
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Reviews from the web:
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      <Chip 
                        label="Justdial: 4.8/5 (164 votes)" 
                        color="primary" 
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                      <Chip 
                        label="Facebook: 4/5 (4 votes)" 
                        color="primary" 
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                      <Chip 
                        label="UrbanPro: 5/5 (8 votes)" 
                        color="primary" 
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Services Offered */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 600, textAlign: 'center' }}>
                  Engineering Coaching Services
                </Typography>
                
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                        E&TC Engineering
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Electronics and Telecommunication Engineering coaching
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                        Computer Engineering
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Computer Science Engineering coaching
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                        Electrical Engineering
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Electrical Engineering coaching
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                        AI&DS Coaching
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Artificial Intelligence and Data Science coaching
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                        Mechanical Engineering
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Mechanical Engineering coaching
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                        Civil Engineering
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Civil Engineering coaching
        </Typography>
      </Box>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SocialMediaSEO; 