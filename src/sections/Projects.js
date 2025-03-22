import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';

const projects = [
  {
    title: 'React Native Project Structure',
    description: 'Dynamic drawer navigation implementation in React Native with best practices and scalable architecture.',
    image: '/images/drawer/main.png',
    tags: ['React Native', 'React Navigation', 'Redux'],
    github: 'https://github.com/yourusername/dynamic-drawer',
    live: 'https://medium.com/@devsoni5880/your-blog-url'
  },
  {
    title: 'Coin Animation Tutorial',
    description: 'Comprehensive guide on implementing complex animations in React Native, featuring a coin flip animation.',
    image: '/images/coin/main.png',
    tags: ['React Native', 'Reanimated 2', 'Gesture Handler'],
    github: 'https://github.com/yourusername/coin-animation',
    live: 'https://medium.com/@devsoni5880/your-animation-blog'
  },
  {
    title: 'BeautyApp',
    description: 'A beauty and cosmetics e-commerce app with authentication and favorites system.',
    image: '/images/beauty/main.png',
    tags: ['React Native', 'Redux', 'Firebase', 'Styled Components'],
    github: 'https://github.com/yourusername/beauty-app',
    live: ''
  },
];

const Projects = () => {
  return (
    <Box
      component="section"
      id="projects"
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #4ECDC4, #45B7D1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '20px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%'
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        height: 250,
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />

                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: '#4ECDC4'
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          mb: 2,
                          color: 'rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.tags.map((tag, i) => (
                          <Box
                            key={i}
                            sx={{
                              px: 2,
                              py: 0.5,
                              borderRadius: '15px',
                              background: 'rgba(78, 205, 196, 0.1)',
                              border: '1px solid rgba(78, 205, 196, 0.2)',
                              color: '#4ECDC4',
                              fontSize: '0.875rem'
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'white',
                            '&:hover': { color: '#4ECDC4' }
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        {project.live && (
                          <IconButton
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: 'white',
                              '&:hover': { color: '#4ECDC4' }
                            }}
                          >
                            <LaunchIcon />
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
