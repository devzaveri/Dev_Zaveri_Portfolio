import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip,
  IconButton,
  Dialog,
  useTheme,
} from "@mui/material";
import { GitHub, Launch, Close, OpenInNew, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import BlogPosts from "../components/BlogPosts";

const projects = [
  {
    title: "Lawhub",
    description: `A sophisticated AI-powered legal assistant that revolutionizes document management and legal consultation. Built with React Native, this app delivers intelligent chat-based interactions and seamless document analysis. The app features an elegant interface with real-time AI responses, secure document storage, and supports multiple languages for global accessibility.`,
    images: [
      require("../Projects/Lawhub/Lawhub.png"),
      require("../Projects/Lawhub/Lawhub2.png"),
      require("../Projects/Lawhub/Lawhub3.png"),
    ],
    technologies: [
      "React Native",
      "React Navigation",
      "AsyncStorage",
      "Styled Components",
      "REST APIs",
      "Custom Hooks",
      "i18n",
      "AI Integration",
    ],
    github: 'https://github.com/lawhub',
    demo: 'https://lawhub.com',
  },
  {
    title: "Sonata",
    description: `An innovative therapeutic sound application that harnesses the power of healing frequencies. Built with React Native and AWS integration, Sonata offers a unique sound mixing experience for wellness and relaxation. Features include premium frequency collections, custom sound blending, and cloud sync for personalized soundscapes.`,
    images: [
      require("../Projects/Sonata/Sonata.png"),
      require("../Projects/Sonata/Sonata2.png"),
      require("../Projects/Sonata/Sonata3.png"),
    ],
    technologies: [
      "React Native",
      "React Navigation",
      "AsyncStorage",
      "Styled Components",
      "REST APIs",
      "Custom Hooks",
      "AWS S3",
      "In-App Purchase",
    ],
    github: 'https://github.com/sonata',
    demo: 'https://sonata.com',
  },
  {
    title: "Treamo",
    description: `A feature-rich food delivery platform that connects food enthusiasts with their favorite restaurants. This React Native application incorporates Redux for state management and offers a seamless ordering experience. With real-time tracking and multi-language support, Treamo delivers a superior food delivery experience.`,
    images: [
      require("../Projects/Treamo/Treamo1.png"),
      require("../Projects/Treamo/Treamo2.png"),
      require("../Projects/Treamo/Treamo3.png"),
    ],
    technologies: [
      "React Native",
      "React Navigation",
      "AsyncStorage",
      "Styled Components",
      "Redux",
      "REST APIs",
      "Custom Hooks",
      "i18n",
    ],
    github: 'https://github.com/treamo',
    demo: 'https://treamo.com',
  },
  {
    title: "WeCollect",
    description: `A state-of-the-art NFT marketplace that redefines digital collectible trading. This comprehensive platform combines secure trading with social features, including 24-hour stories and real-time chat. Built with React Native and integrating WebSocket for live updates, WeCollect supports 10 languages and secure in-app purchases.`,
    images: [
      require("../Projects/WeCollect/WeCollect.png"),
      require("../Projects/WeCollect/WeCollect2.png"),
      require("../Projects/WeCollect/WeCollect3.png"),
    ],
    technologies: [
      "React Native",
      "React Navigation",
      "AsyncStorage",
      "Styled Components",
      "Redux",
      "WebSocket",
      "AWS S3",
      "In-App Purchase",
      "i18n",
    ],
    github: 'https://github.com/wecollect',
    demo: 'https://wecollect.com',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();

  const handleProjectClick = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      handlePrevImage();
    } else if (event.key === "ArrowRight") {
      handleNextImage();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0A0A0A",
        color: "white",
        pt: 8,
        pb: 12,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
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
                textAlign: "center",
                background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Featured Projects
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      cursor: "pointer",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        background: "rgba(255, 255, 255, 0.05)",
                      },
                    }}
                  >
                    {/* Image Grid */}
                    <Grid container spacing={0.5} sx={{ p: 0.5 }}>
                      {project.images.map((image, imgIndex) => (
                        <Grid
                          item
                          xs={project.images.length <= 2 ? 6 : project.images.length === 3 ? 4 : 6}
                          key={imgIndex}
                          sx={{
                            aspectRatio: "4/3",
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            component="img"
                            src={image}
                            alt={`${project.title} preview ${imgIndex + 1}`}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              borderRadius: "8px",
                              transition: "all 0.3s ease",
                              cursor: "pointer",
                              "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0 4px 20px rgba(78, 205, 196, 0.2)",
                              },
                            }}
                            onClick={() => handleProjectClick(project, imgIndex)}
                          />
                        </Grid>
                      ))}
                    </Grid>

                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: "#4ECDC4",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: "rgba(255, 255, 255, 0.8)",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              background: "rgba(78, 205, 196, 0.1)",
                              border: "1px solid rgba(78, 205, 196, 0.2)",
                              color: "#4ECDC4",
                              "&:hover": {
                                background: "rgba(78, 205, 196, 0.2)",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Project Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={true}
            onClose={handleClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{
              sx: {
                background: "#0A0A0A",
                backgroundImage: "none",
                borderRadius: "20px",
                overflow: "hidden",
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Box 
                sx={{ position: "relative" }}
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    zIndex: 2,
                    color: "white",
                    background: "rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                >
                  <Close />
                </IconButton>

                {/* Navigation Arrows */}
                <IconButton
                  onClick={handlePrevImage}
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    background: "rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                >
                  <ChevronLeft />
                </IconButton>

                <IconButton
                  onClick={handleNextImage}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    background: "rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                >
                  <ChevronRight />
                </IconButton>

                <Box
                  component="img"
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "80vh",
                    objectFit: "contain",
                  }}
                />

                {/* Image Navigation */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: 2,
                    p: 2,
                    background: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {selectedProject.images.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        overflow: "hidden",
                        cursor: "pointer",
                        border:
                          currentImageIndex === index
                            ? "2px solid #4ECDC4"
                            : "2px solid transparent",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Box
                        component="img"
                        src={selectedProject.images[index]}
                        alt={`Thumbnail ${index + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  }}
                >
                  <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
                    {selectedProject.title}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      onClick={() => window.open(selectedProject.github, "_blank")}
                      sx={{ color: "white" }}
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      onClick={() => window.open(selectedProject.demo, "_blank")}
                      sx={{ color: "white" }}
                    >
                      <Launch />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Projects;
