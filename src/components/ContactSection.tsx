"use client";

import React, { useState, useMemo } from 'react';
import { Box, Typography, Container, Paper, Stack, Button, Link, TextField, Alert, CircularProgress, Autocomplete, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import MapIcon from '@mui/icons-material/Map';

const contact = {
  address: '3rd Floor, besides Namaskar Restaurant, opp. MJM Hospital, Ghole Road, Off. FC Road, Pune-04',
  phone: '+91 99234 60156',
  email: 'shettyseng@gmail.com',
  instagram: 'https://instagram.com/shettys_engineering_classes',
  whatsapp: 'https://wa.me/919923460156',
};

// Common subject suggestions for contact form
const subjectSuggestions = [
  'Course Inquiry',
  'Admission Query',
  'Fee Structure',
  'Schedule Information',
  'Demo Class Request',
  'Faculty Information',
  'Study Material',
  'Exam Preparation',
  'Placement Support',
  'Technical Support',
  'Partnership Inquiry',
  'Feedback',
  'Complaint',
  'Suggestion',
  'Other'
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Filter subjects based on search query
  const filteredSubjects = useMemo(() => {
    if (!formData.subject.trim()) return subjectSuggestions;
    
    const query = formData.subject.toLowerCase();
    return subjectSuggestions.filter(subject => 
      subject.toLowerCase().includes(query)
    );
  }, [formData.subject]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Use environment variable for API URL
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/api/email/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
      } else {
        setError(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubjectChange = (event: any, newValue: any) => {
    setFormData({
      ...formData,
      subject: newValue || ''
    });
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(25, 118, 210, 0.05)',
          filter: 'blur(40px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255, 107, 53, 0.05)',
          filter: 'blur(30px)',
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 900,
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Contact Us
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {/* Contact Information */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                background: 'rgba(255,255,255,0.95)',
                boxShadow: '0 8px 32px rgba(25, 118, 210, 0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#333' }}>
                Get in Touch
              </Typography>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocationOnIcon color="primary" />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Link
                      href="https://maps.google.com/?q=3rd+Floor+besides+Namaskar+Restaurant+opp+MJM+Hospital+Ghole+Road+Off+FC+Road+Pune+04"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      sx={{ 
                        fontWeight: 500, 
                        color: '#333',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#1976d2',
                        },
                      }}
                    >
                      {contact.address}
                    </Link>
                    <MapIcon sx={{ fontSize: 16, color: '#1976d2', cursor: 'pointer' }} />
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneIcon color="primary" />
                  <Link href={`tel:${contact.phone.replace(/\s+/g, '')}`} underline="hover" sx={{ fontWeight: 600, color: '#1976d2' }}>
                    {contact.phone}
                  </Link>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon color="primary" />
                  <Link href={`mailto:${contact.email}`} underline="hover" sx={{ fontWeight: 600, color: '#1976d2' }}>
                    {contact.email}
                  </Link>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <InstagramIcon sx={{ color: '#E1306C' }} />
                  <Link href={contact.instagram} target="_blank" underline="hover" sx={{ fontWeight: 600, color: '#E1306C' }}>
                    @shettys_engineering_classes
                  </Link>
                </Stack>
              </Stack>
              
              {/* Action Buttons */}
              <Stack direction="column" spacing={2} sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="medium"
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Book a Free Demo
                </Button>
                
                <Button
                  variant="contained"
                  size="medium"
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  startIcon={<PhoneIcon />}
                  sx={{
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                    boxShadow: '0 4px 16px rgba(76, 175, 80, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #45a049 0%, #4CAF50 100%)',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Talk to a Counselor
                </Button>
              </Stack>
            </Paper>

            {/* Email Form */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                background: 'rgba(255,255,255,0.95)',
                boxShadow: '0 8px 32px rgba(25, 118, 210, 0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#333' }}>
                Send us a Message
              </Typography>

              {success && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Email sent successfully! Check your inbox for a confirmation.
                </Alert>
              )}

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Stack spacing={3}>
                  <TextField
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    name="email"
                    label="Your Email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    name="phone"
                    label="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                  
                  {/* Subject Autocomplete */}
                  <Autocomplete
                    freeSolo
                    options={filteredSubjects}
                    getOptionLabel={(option) => option}
                    inputValue={formData.subject}
                    onInputChange={(event, newInputValue) => {
                      setFormData({
                        ...formData,
                        subject: newInputValue
                      });
                    }}
                    onChange={handleSubjectChange}
                    slotProps={{
                      popper: {
                        placement: 'bottom-start',
                        modifiers: [
                          {
                            name: 'preventOverflow',
                            enabled: true,
                            options: {
                              altAxis: true,
                              tether: false,
                            },
                          },
                        ],
                      },
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="subject"
                        label="Subject"
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="Type or select a subject..."
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <SearchIcon sx={{ color: '#1976d2', mr: 1 }} />
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#1976d2',
                              },
                            },
                            '&.Mui-focused': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#1976d2',
                              },
                            },
                          },
                        }}
                      />
                    )}
                    renderOption={(props, option) => {
                      const { key, ...otherProps } = props;
                      return (
                        <ListItem key={key} {...otherProps} sx={{ py: 1 }}>
                          <ListItemText
                            primary={option}
                            primaryTypographyProps={{
                              fontWeight: 600,
                              color: '#1976d2',
                            }}
                          />
                        </ListItem>
                      );
                    }}
                    PaperComponent={({ children, ...props }) => (
                      <Paper
                        {...props}
                        sx={{
                          mt: 1,
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                          borderRadius: 2,
                          '& .MuiAutocomplete-listbox': {
                            py: 0,
                          },
                        }}
                      >
                        {children}
                      </Paper>
                    )}
                  />
                  
                  <TextField
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: '25px',
                      fontSize: '1rem',
                      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                      boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                        transform: 'translateY(-1px)',
                        boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection; 