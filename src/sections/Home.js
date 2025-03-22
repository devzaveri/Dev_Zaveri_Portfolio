import React from 'react';
import { Box, Container, Typography, Button, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email, LocationOn, Phone } from '@mui/icons-material';

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <Grid container spacing={4} sx={{ minHeight: '100vh', py: { xs: 8, md: 0 } }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'primary.main',
                  fontFamily: "'Fira Code', monospace",
                  mb: 2,
                }}
              >
                Hi, my name is
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  background: 'linear-gradient(45deg, #64ffda 30%, #7000ff 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '4rem' }
                }}
              >
                Dev Zaveri
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography
                variant="h2"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontSize: { xs: '1.8rem', md: '2.5rem' }
                }}
              >
                React Native Developer
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '600px'
                }}
              >
                Looking for a challenging role in a reputable organization to utilize my technical and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <LocationOn sx={{ color: 'primary.main' }} />
                <Typography>Rajkot, Gujarat</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Email sx={{ color: 'primary.main' }} />
                <Typography>devsoni5880@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Phone sx={{ color: 'primary.main' }} />
                <Typography>+91 9408665655</Typography>
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                {['React Native', 'Redux', 'React Navigation', 'Hooks', 'Styled Components'].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      bgcolor: 'background.paper',
                      color: 'primary.main',
                      border: '1px solid',
                      borderColor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'background.default',
                      }
                    }}
                  />
                ))}
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button
                  variant="outlined"
                  onClick={scrollToProjects}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(100, 255, 218, 0.1)',
                    }
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="contained"
                  onClick={scrollToContact}
                  sx={{
                    background: 'linear-gradient(45deg, #64ffda 30%, #7000ff 90%)',
                    color: 'background.default',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 5px 15px rgba(100, 255, 218, 0.3)',
                    }
                  }}
                >
                  Get in Touch
                </Button>
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  style={{ color: 'inherit' }}
                >
                  <GitHub sx={{ fontSize: 28 }} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  style={{ color: 'inherit' }}
                >
                  <LinkedIn sx={{ fontSize: 28 }} />
                </motion.a>
                <motion.a
                  href="mailto:devsoni5880@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  style={{ color: 'inherit' }}
                >
                  <Email sx={{ fontSize: 28 }} />
                </motion.a>
              </Box>
            </motion.div>
          </motion.div>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -20,
                left: -20,
                right: -20,
                bottom: -20,
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 2,
                opacity: 0.3,
                transform: 'rotate(-5deg)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -10,
                left: -10,
                right: -10,
                bottom: -10,
                border: '2px solid',
                borderColor: 'secondary.main',
                borderRadius: 2,
                opacity: 0.3,
                transform: 'rotate(5deg)',
              }
            }}
          >
            <Box
              component="img"
              src="/images/profile.jpg" // Add your profile image here
              alt="Dev Zaveri"
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                borderRadius: 2,
                filter: 'grayscale(20%)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.02)',
                }
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
