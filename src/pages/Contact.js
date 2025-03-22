import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { Send } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 'bold' }}>
          Get in Touch
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </Typography>

        {submitted && (
          <Alert severity="success" sx={{ mb: 4 }}>
            Thank you for your message! I'll get back to you soon.
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <TextField
            required
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
          />
          
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
          
          <TextField
            required
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
          />
          
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<Send />}
            sx={{
              mt: 2,
              width: { xs: '100%', sm: 'auto' },
              alignSelf: 'flex-start',
              textTransform: 'none'
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
