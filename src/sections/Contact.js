import React, { useState, useRef } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { Send as SendIcon, Email as EmailIcon, Person as PersonIcon, Message as MessageIcon } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact directly at devsoni5880@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        minHeight: '100vh',
        py: 10,
        background: '#0A0A0A',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        {[...Array(40)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              x: ['0vw', '100vw'],
              y: Math.cos(i) * 40,
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: 'linear',
              delay: i * -0.2
            }}
            sx={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              background: 'linear-gradient(90deg, #4ECDC4, transparent)',
              left: `-${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3
            }}
          />
        ))}
      </Box>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 6,
              fontWeight: 700,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #4ECDC4, #45B7D1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <Box
          component="form"
          ref={form}
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: 600,
            mx: 'auto',
            p: 3,
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {status.message && (
            <Alert 
              severity={status.type} 
              sx={{ 
                background: status.type === 'success' ? 'rgba(78, 205, 196, 0.1)' : 'rgba(255, 72, 66, 0.1)',
                color: status.type === 'success' ? '#4ECDC4' : '#ff4842',
                border: `1px solid ${status.type === 'success' ? '#4ECDC4' : '#ff4842'}`,
                '& .MuiAlert-icon': {
                  color: status.type === 'success' ? '#4ECDC4' : '#ff4842'
                }
              }}
            >
              {status.message}
            </Alert>
          )}

          <TextField
            required
            fullWidth
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            InputProps={{
              startAdornment: <PersonIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.3)' }} />
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                },
                '&:hover fieldset': {
                  borderColor: '#4ECDC4'
                }
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }}
          />

          <TextField
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: <EmailIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.3)' }} />
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                },
                '&:hover fieldset': {
                  borderColor: '#4ECDC4'
                }
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }}
          />

          <TextField
            required
            fullWidth
            name="message"
            label="Message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            InputProps={{
              startAdornment: <MessageIcon sx={{ mr: 1, mt: 1, color: 'rgba(255, 255, 255, 0.3)' }} />
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                },
                '&:hover fieldset': {
                  borderColor: '#4ECDC4'
                }
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{
              mt: 2,
              py: 1.5,
              background: 'linear-gradient(45deg, #4ECDC4, #45B7D1)',
              '&:hover': {
                background: 'linear-gradient(45deg, #45B7D1, #4ECDC4)'
              }
            }}
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <SendIcon sx={{ ml: 1 }} />
              </>
            )}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
