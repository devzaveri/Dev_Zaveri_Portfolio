import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip,
  IconButton,
  Dialog,
  Button,
  Card,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material";
import {
  GitHub,
  Launch,
  Close,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  CheckCircle,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Lawhub",
    category: "Legal Tech",
    description: `AI-powered legal assistant with advanced document analysis and intelligent chat capabilities. Features include real-time document processing, multi-language support, and secure cloud storage.`,
    technicalFocus: [
      "AI/ML integration for document analysis",
      "Real-time chat interface implementation",
      "Secure document storage and retrieval",
      "Multi-language support system",
      "Cross-platform mobile optimization",
    ],
    frontendSkills: [
      "React Native",
      "React Navigation",
      "Function Components",
      "Hooks (useState, useEffect, useContext)",
      "Styled Components",
      "React Animation (Framer Motion)",
      "Third-Party Libraries (OpenAI, TensorFlow)",
      "UI/UX Optimization",
    ],
    mobileSkills: [
      "Android Development",
      "iOS Development",
      "Native Modules",
      "Performance Optimization",
      "State Management (Redux)",
      "Mobile UI/UX",
    ],
    backendSkills: [
      "Redux",
      "AsyncStorage",
      "Axios",
      "API Integration",
      "Data Caching",
      "Serverless Computing",
      "Cloud Storage (AWS)",
    ],
    devOpsSkills: [
      "Git & GitHub",
      "CI/CD Pipeline",
      "Code Review",
      "Testing Frameworks",
    ],
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
    // github: "https://github.com/devzaveri/lawhub",
    // demo: "https://lawhub-demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "Sonata",
    category: "Wellness",
    description: `Therapeutic sound application featuring advanced audio processing, frequency manipulation, and cloud-based sound libraries. Implements custom audio algorithms for wellness and relaxation.`,
    technicalFocus: [
      "Custom audio processing algorithms",
      "Real-time frequency manipulation",
      "AWS S3 cloud storage integration",
      "Battery optimization techniques",
      "Audio streaming and caching",
    ],
    frontendSkills: [
      "React Native",
      "React Navigation",
      "Function Components",
      "Hooks (useState, useEffect, useCallback)",
      "Styled Components",
      "React Animation",
      "Third-Party Libraries (Audio APIs)",
      "UI/UX Optimization",
    ],
    mobileSkills: [
      "Android Development",
      "iOS Development",
      "Native Modules (Audio Processing)",
      "Performance Optimization",
      "State Management (Context API)",
      "Mobile UI/UX",
    ],
    backendSkills: [
      "Context API",
      "AsyncStorage",
      "Axios",
      "API Integration",
      "Data Caching",
      "Serverless Computing (AWS Lambda)",
      "Cloud Storage (AWS S3)",
    ],
    devOpsSkills: [
      "Git & GitHub",
      "CI/CD Pipeline",
      "Code Review",
      "Audio Testing",
    ],
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
    // github: "https://github.com/devzaveri/sonata",
    // demo: "https://sonata-demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Treamo",
    category: "Food Delivery",
    description: `Comprehensive food delivery platform with real-time order tracking, restaurant partnerships, and complex delivery logistics. Features Redux state management and multi-language support.`,
    technicalFocus: [
      "Redux state management implementation",
      "Real-time order tracking system",
      "Complex delivery logistics algorithm",
      "Multi-restaurant partnership integration",
      "Scalable architecture design",
    ],
    frontendSkills: [
      "React Native",
      "React Navigation",
      "Function Components",
      "Hooks (useState, useEffect, useSelector)",
      "Styled Components",
      "React Animation",
      "Third-Party Libraries (Maps, Payment)",
      "UI/UX Optimization",
    ],
    mobileSkills: [
      "Android Development",
      "iOS Development",
      "Native Modules (GPS, Payment)",
      "Performance Optimization",
      "State Management (Redux)",
      "Mobile UI/UX",
    ],
    backendSkills: [
      "Redux",
      "AsyncStorage",
      "Axios",
      "API Integration",
      "Data Caching",
      "Serverless Computing",
      "Cloud Storage (AWS, Azure)",
    ],
    devOpsSkills: [
      "Git & GitHub",
      "CI/CD Pipeline",
      "Code Review",
      "E2E Testing",
    ],
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
    github: "https://github.com/devzaveri/treamo",
    demo: "https://treamo-demo.com",
    featured: false,
  },
  {
    id: 4,
    title: "WeCollect",
    category: "NFT Marketplace",
    description: `Advanced NFT marketplace with secure blockchain integration, real-time social features, and comprehensive trading capabilities. Includes WebSocket live updates and multi-language support.`,
    technicalFocus: [
      "Blockchain integration and security",
      "WebSocket real-time updates",
      "Secure in-app purchase system",
      "Social features implementation",
      "Multi-language localization",
    ],
    frontendSkills: [
      "React Native",
      "React Navigation",
      "Function Components",
      "Hooks (useState, useEffect, useReducer)",
      "Styled Components",
      "React Animation",
      "Third-Party Libraries (Web3, WalletConnect)",
      "UI/UX Optimization",
    ],
    mobileSkills: [
      "Android Development",
      "iOS Development",
      "Native Modules (Crypto Wallets)",
      "Performance Optimization",
      "State Management (useReducer)",
      "Mobile UI/UX",
    ],
    backendSkills: [
      "useReducer",
      "AsyncStorage",
      "Axios",
      "API Integration",
      "Data Caching",
      "Serverless Computing",
      "Cloud Storage (IPFS, AWS)",
    ],
    devOpsSkills: [
      "Git & GitHub",
      "CI/CD Pipeline",
      "Code Review",
      "Smart Contract Testing",
    ],
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
    // github: "https://github.com/devzaveri/wecollect",
    // demo: "https://wecollect-demo.com",
    featured: true,
  },
  {
    id: 5,
    title: "AutoSpa - Car Wash Service App",
    category: "On-Demand Service / Mobility",
    description: `A modern on-demand car washing service mobile application that connects users with nearby service providers. Features include real-time booking management, service selection, vehicle management, provider dashboards, and seamless UI/UX for both customers and service providers.`,

    technicalFocus: [
      "Real-time booking and request management system",
      "Dual-role architecture (Customer & Service Provider)",
      "Dynamic service listing and filtering",
      "Location-based service discovery",
      "Interactive dashboard with revenue analytics",
      "Optimized UI rendering for high-performance lists",
    ],

    frontendSkills: [
      "React Native",
      "React Navigation (Stack + Bottom Tabs)",
      "Functional Components",
      "Hooks (useState, useEffect, useMemo)",
      "Custom Reusable Components",
      "Responsive UI Design",
      "Animations & Smooth Transitions",
      "FlatList Optimization",
    ],

    mobileSkills: [
      "Android Development",
      "iOS Development",
      "Native Modules Integration",
      "Performance Optimization (Avoid Re-renders)",
      "Navigation Architecture",
      "App State Handling",
      "UI/UX Design Implementation",
    ],

    backendSkills: [
      "REST API Integration",
      "Axios",
      "AsyncStorage",
      "State Management (Redux)",
      "Booking Data Handling",
      "Caching Strategies",
      "User Session Management",
    ],

    devOpsSkills: [
      "Git & GitHub",
      "Version Control",
      "Code Structuring & Modular Architecture",
      "Debugging & Performance Profiling",
    ],

    technologies: [
      "React Native",
      "Redux",
      "React Navigation",
      "AsyncStorage",
      "REST APIs",
      "Custom Hooks",
      "Reusable Components",
      "Mobile UI/UX",
    ],

    features: [
      "📍 Location-based service provider discovery",
      "🚗 Multiple vehicle management",
      "🧼 Service selection (Exterior, Interior, Engine, etc.)",
      "📅 Real-time booking system",
      "📊 Revenue dashboard for providers",
      "🔔 Notification system",
      "📈 Booking status tracking (Pending, Active, Completed)",
      "🎯 Campaign & promo system",
    ],

    role: "Full Stack Mobile Developer (Frontend Focus)",
    responsibilities: [
      "Designed complete mobile UI/UX from scratch",
      "Developed booking and service flow architecture",
      "Implemented provider dashboard with analytics",
      "Optimized performance for large lists and real-time updates",
      "Integrated APIs and managed application state",
    ],

    challenges: [
      "Handling real-time booking updates efficiently",
      "Avoiding unnecessary re-renders in heavy UI screens",
      "Designing scalable navigation between customer and provider flows",
      "Managing multiple states (booking, vehicle, services)",
    ],

    images: [
      require("../Projects/AutoSpa/AutoSpa1.png"),
      require("../Projects/AutoSpa/AutoSpa2.png"),
      require("../Projects/AutoSpa/AutoSpa3.png"),
      require("../Projects/AutoSpa/AutoSpa4.png"),
      require("../Projects/AutoSpa/AutoSpa5.png"),
    ],

    // github: "https://github.com/devzaveri/autospa-app",
    // demo: "https://autospa-demo.com",

    featured: true,
  },
];

const categories = [
  "All",
  "Legal Tech",
  "Wellness",
  "Food Delivery",
  "NFT Marketplace",
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const displayProjects =
    selectedCategory === "All" ? projects : filteredProjects;

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
        prev === selectedProject.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1,
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
      id="projects"
      sx={{
        minHeight: "100vh",
        background: "#0A0A0A",
        color: "white",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {[...Array(40)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: ["0vh", "100vh"],
              x: Math.sin(i) * 20,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            sx={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(78, 205, 196, 0.5)",
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#4ECDC4",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: 2,
                mb: 2,
                display: "block",
              }}
            >
              FEATURED WORK
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 800,
                mb: 3,
                background:
                  "linear-gradient(45deg, #ffffff 0%, #4ECDC4 50%, #45B7D1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Case Studies & Success Stories
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Discover how I've helped businesses transform their ideas into
              successful mobile applications.
            </Typography>
          </Box>

          {/* Category Tabs */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
            <Tabs
              value={selectedCategory}
              onChange={(e, newValue) => setSelectedCategory(newValue)}
              sx={{
                "& .MuiTabs-indicator": {
                  background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                },
              }}
            >
              {categories.map((category) => (
                <Tab
                  key={category}
                  label={category}
                  value={category}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&.Mui-selected": {
                      color: "#4ECDC4",
                    },
                    "&:hover": {
                      color: "#4ECDC4",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {displayProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(10px)",
                      border: project.featured
                        ? "2px solid #4ECDC4"
                        : "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      transition: "all 0.3s ease-in-out",
                      cursor: "pointer",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.05)",
                        transform: "translateY(-5px)",
                        boxShadow: project.featured
                          ? "0 20px 40px rgba(78, 205, 196, 0.3)"
                          : "0 20px 40px rgba(255, 255, 255, 0.1)",
                      },
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                    {/* Project Header */}
                    {project.featured && (
                      <Box
                        sx={{
                          background:
                            "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                          color: "white",
                          px: 2,
                          py: 1,
                          textAlign: "center",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        ⭐ Featured Project
                      </Box>
                    )}

                    {/* Image/Video Gallery */}
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 1 }}
                      >
                        {project.video && project.images.length === 0
                          ? "🎬 Video Demo"
                          : `📸 Project Gallery (${project.images.length} images)`}
                      </Typography>

                      {/* Show video if no images but video exists */}
                      {project.video && project.images.length === 0 ? (
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: "16/9",
                            overflow: "hidden",
                            borderRadius: "8px",
                            cursor: "pointer",
                            "&:hover": {
                              "& .video-overlay": {
                                opacity: 1,
                              },
                            },
                          }}
                          onClick={() => handleProjectClick(project, 0)}
                        >
                          <Box
                            component="video"
                            src={project.video}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            muted
                            playsInline
                            onMouseEnter={(e) => e.target.play()}
                            onMouseLeave={(e) => e.target.pause()}
                          />
                          <Box
                            className="video-overlay"
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: "rgba(0, 0, 0, 0.5)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "white",
                                fontWeight: 600,
                                fontSize: "1rem",
                              }}
                            >
                              Click to view full video
                            </Typography>
                          </Box>
                        </Box>
                      ) : (
                        <Grid container spacing={1} sx={{ p: 0.5 }}>
                          {project.images.map((image, imgIndex) => (
                            <Grid
                              item
                              xs={6}
                              sm={4}
                              key={imgIndex}
                              sx={{
                                aspectRatio: "4/3",
                                overflow: "hidden",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handleProjectClick(project, imgIndex)
                              }
                            >
                              <Box
                                component="img"
                                src={image}
                                alt={`${project.title} image ${imgIndex + 1}`}
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow:
                                      "0 8px 16px rgba(78, 205, 196, 0.3)",
                                  },
                                }}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      )}
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      {/* Project Info */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "#4ECDC4",
                            mb: 0,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            background: "rgba(78, 205, 196, 0.1)",
                            color: "#4ECDC4",
                            fontSize: "0.75rem",
                          }}
                        />
                      </Box>

                      {/* Technical Skills Overview */}
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 1 }}
                        >
                          <strong>Frontend:</strong>{" "}
                          {project.frontendSkills.slice(0, 3).join(", ")}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 1 }}
                        >
                          <strong>Backend:</strong>{" "}
                          {project.backendSkills.slice(0, 3).join(", ")}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 1 }}
                        >
                          <strong>Mobile:</strong>{" "}
                          {project.mobileSkills.slice(0, 3).join(", ")}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          mb: 2,
                          lineHeight: 1.5,
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Technologies */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 2,
                        }}
                      >
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              background: "rgba(78, 205, 196, 0.1)",
                              border: "1px solid rgba(78, 205, 196, 0.2)",
                              color: "#4ECDC4",
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                        {project.technologies.length > 4 && (
                          <Chip
                            label={`+${project.technologies.length - 4}`}
                            size="small"
                            sx={{
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "rgba(255, 255, 255, 0.7)",
                              fontSize: "0.75rem",
                            }}
                          />
                        )}
                      </Box>

                      {/* Action Buttons */}
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(project);
                          }}
                          sx={{
                            background:
                              "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                            color: "white",
                            fontWeight: 600,
                            "&:hover": {
                              background:
                                "linear-gradient(45deg, #45B7D1, #4ECDC4)",
                            },
                          }}
                        >
                          View Case Study
                        </Button>
                        <IconButton
                          href={project.github}
                          target="_blank"
                          size="small"
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            "&:hover": {
                              color: "white",
                              background: "rgba(255, 255, 255, 0.1)",
                            },
                          }}
                        >
                          <GitHub fontSize="small" />
                        </IconButton>
                        <IconButton
                          href={project.demo}
                          target="_blank"
                          size="small"
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            "&:hover": {
                              color: "white",
                              background: "rgba(255, 255, 255, 0.1)",
                            },
                          }}
                        >
                          <Launch fontSize="small" />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Project Detail Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={true}
            onClose={handleClose}
            maxWidth="xl"
            fullWidth
            PaperProps={{
              sx: {
                background: "#0A0A0A",
                backgroundImage: "none",
                borderRadius: "20px",
                overflow: "hidden",
                maxHeight: { xs: "100vh", md: "90vh" },
                m: { xs: 0, md: 2 },
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                maxHeight: { xs: "100vh", md: "90vh" },
              }}
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
                    right: 16,
                    top: 16,
                    zIndex: 10,
                    color: "white",
                    background: "rgba(0, 0, 0, 0.7)",
                    width: 40,
                    height: 40,
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.9)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Close />
                </IconButton>

                {/* Image Counter */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background:
                      "linear-gradient(45deg, rgba(78, 205, 196, 0.9), rgba(69, 183, 209, 0.9))",
                    color: "white",
                    px: 3,
                    py: 1,
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    zIndex: 10,
                    boxShadow: "0 4px 20px rgba(78, 205, 196, 0.3)",
                  }}
                >
                  {selectedProject.video && selectedProject.images.length === 0
                    ? "Video Demo"
                    : `${currentImageIndex + 1} / ${selectedProject.images.length}`}
                </Box>

                {/* Navigation Arrows */}
                <IconButton
                  onClick={handlePrevImage}
                  disabled={currentImageIndex === 0}
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
                    "&.Mui-disabled": {
                      opacity: 0.3,
                    },
                  }}
                >
                  <ChevronLeft />
                </IconButton>

                <IconButton
                  onClick={handleNextImage}
                  disabled={
                    currentImageIndex === selectedProject.images.length - 1
                  }
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
                    "&.Mui-disabled": {
                      opacity: 0.3,
                    },
                  }}
                >
                  <ChevronRight />
                </IconButton>

                {/* Modern Gallery Design */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 300, md: 450 },
                    overflow: "hidden",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, rgba(78, 205, 196, 0.05), rgba(69, 183, 209, 0.05))",
                    border: "2px solid rgba(78, 205, 196, 0.1)",
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedProject.video &&
                  selectedProject.images.length === 0 ? (
                    <Box
                      component="video"
                      src={selectedProject.video}
                      controls
                      autoPlay
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "12px",
                      }}
                    />
                  ) : (
                    <Box
                      component={motion.div}
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                        sx={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                          display: "block",
                          borderRadius: "12px",
                        }}
                      />
                    </Box>
                  )}

                  {/* Modern Navigation Arrows */}
                  <IconButton
                    onClick={handlePrevImage}
                    disabled={currentImageIndex === 0}
                    sx={{
                      position: "absolute",
                      left: 20,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "white",
                      background:
                        "linear-gradient(135deg, rgba(78, 205, 196, 0.9), rgba(69, 183, 209, 0.9))",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      boxShadow: "0 4px 20px rgba(78, 205, 196, 0.4)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(78, 205, 196, 1), rgba(69, 183, 209, 1))",
                        transform: "translateY(-50%) scale(1.1)",
                        boxShadow: "0 6px 30px rgba(78, 205, 196, 0.6)",
                      },
                      "&.Mui-disabled": {
                        opacity: 0.4,
                        background: "rgba(255, 255, 255, 0.1)",
                        boxShadow: "none",
                      },
                    }}
                  >
                    <ChevronLeft sx={{ fontSize: 26 }} />
                  </IconButton>

                  <IconButton
                    onClick={handleNextImage}
                    disabled={
                      currentImageIndex === selectedProject.images.length - 1
                    }
                    sx={{
                      position: "absolute",
                      right: 20,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "white",
                      background:
                        "linear-gradient(135deg, rgba(78, 205, 196, 0.9), rgba(69, 183, 209, 0.9))",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      boxShadow: "0 4px 20px rgba(78, 205, 196, 0.4)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(78, 205, 196, 1), rgba(69, 183, 209, 1))",
                        transform: "translateY(-50%) scale(1.1)",
                        boxShadow: "0 6px 30px rgba(78, 205, 196, 0.6)",
                      },
                      "&.Mui-disabled": {
                        opacity: 0.4,
                        background: "rgba(255, 255, 255, 0.1)",
                        boxShadow: "none",
                      },
                    }}
                  >
                    <ChevronRight sx={{ fontSize: 26 }} />
                  </IconButton>
                </Box>

                {/* Image Counter */}
                <Box
                  sx={{
                    textAlign: "center",
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "0.9rem",
                      mb: 1,
                    }}
                  >
                    Image Gallery
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#4ECDC4",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                    }}
                  >
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </Typography>
                </Box>

                {/* Enhanced Thumbnail Gallery */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      mb: 3,
                      textAlign: "center",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    📸 Click any thumbnail to navigate
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "center",
                      flexWrap: "wrap",
                      px: 2,
                    }}
                  >
                    {selectedProject.images.map((image, index) => (
                      <Box
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        sx={{
                          position: "relative",
                          width: { xs: 70, md: 90 },
                          height: { xs: 70, md: 90 },
                          borderRadius: "12px",
                          overflow: "hidden",
                          cursor: "pointer",
                          border:
                            currentImageIndex === index
                              ? "3px solid #4ECDC4"
                              : "2px solid rgba(255, 255, 255, 0.1)",
                          opacity: currentImageIndex === index ? 1 : 0.7,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          background: "rgba(255, 255, 255, 0.02)",
                          "&:hover": {
                            opacity: 1,
                            transform: "scale(1.08) translateY(-2px)",
                            border: "3px solid #4ECDC4",
                            boxShadow: "0 8px 25px rgba(78, 205, 196, 0.3)",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        {currentImageIndex === index && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background:
                                "linear-gradient(135deg, rgba(78, 205, 196, 0.8), rgba(69, 183, 209, 0.8))",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              sx={{
                                background: "#4ECDC4",
                                color: "white",
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.8rem",
                                fontWeight: "bold",
                                boxShadow: "0 2px 10px rgba(78, 205, 196, 0.5)",
                              }}
                            >
                              ✓
                            </Box>
                          </Box>
                        )}
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 4,
                            left: 4,
                            background: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            px: 1,
                            py: 0.5,
                            borderRadius: "4px",
                            fontSize: "0.65rem",
                            fontWeight: 600,
                          }}
                        >
                          {index + 1}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Enhanced Project Details */}
              <Box
                sx={{
                  p: { xs: 2, md: 4 },
                  flex: 1,
                  overflowY: "auto",
                  minHeight: 0,
                }}
              >
                {/* Project Header */}
                <Box sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      mb: 2,
                      fontWeight: 800,
                      fontSize: { xs: "1.8rem", md: "2.5rem" },
                      background:
                        "linear-gradient(45deg, #ffffff 0%, #4ECDC4 50%, #45B7D1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {selectedProject.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 3,
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <Chip
                      label={selectedProject.category}
                      sx={{
                        background:
                          "linear-gradient(45deg, rgba(78, 205, 196, 0.2), rgba(69, 183, 209, 0.2))",
                        color: "#4ECDC4",
                        border: "1px solid rgba(78, 205, 196, 0.3)",
                        fontWeight: 600,
                        px: 1,
                      }}
                    />
                    {selectedProject.featured && (
                      <Chip
                        label="⭐ Featured"
                        sx={{
                          background:
                            "linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(255, 193, 7, 0.2))",
                          color: "#FF6B6B",
                          border: "1px solid rgba(255, 107, 107, 0.3)",
                          fontWeight: 600,
                          px: 1,
                        }}
                      />
                    )}
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.85)",
                      mb: 3,
                      lineHeight: 1.7,
                      fontSize: { xs: "0.95rem", md: "1.1rem" },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    {selectedProject.description}
                  </Typography>
                </Box>

                {/* Technical Focus - Enhanced */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#4ECDC4",
                      mb: 3,
                      fontWeight: 700,
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    🎯 Technical Focus & Key Features
                  </Typography>
                  <Grid container spacing={2}>
                    {selectedProject.technicalFocus?.map((focus, index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            p: 2,
                            background: "rgba(78, 205, 196, 0.05)",
                            border: "1px solid rgba(78, 205, 196, 0.1)",
                            borderRadius: "12px",
                            mb: 1,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background: "rgba(78, 205, 196, 0.1)",
                              transform: "translateX(5px)",
                            },
                          }}
                        >
                          <CheckCircle
                            sx={{
                              fontSize: 18,
                              mr: 1.5,
                              color: "#4ECDC4",
                              mt: 0.5,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgba(255, 255, 255, 0.85)",
                              lineHeight: 1.5,
                              fontSize: "0.9rem",
                            }}
                          >
                            {focus}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Technical Skills - Tabbed Layout */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      mb: 3,
                      fontWeight: 700,
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                    }}
                  >
                    🛠 Technical Expertise
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          p: 3,
                          background: "rgba(255, 107, 107, 0.05)",
                          border: "1px solid rgba(255, 107, 107, 0.1)",
                          borderRadius: "16px",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#FF6B6B",
                            mb: 2,
                            fontWeight: 600,
                            fontSize: "1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          📱 Frontend Development
                        </Typography>
                        <Box sx={{ maxHeight: 200, overflowY: "auto" }}>
                          {selectedProject.frontendSkills?.map(
                            (skill, index) => (
                              <Box
                                key={index}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  mb: 1,
                                  color: "rgba(255, 255, 255, 0.8)",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 4,
                                    height: 4,
                                    borderRadius: "50%",
                                    background: "#FF6B6B",
                                    mr: 1.5,
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "0.85rem" }}
                                >
                                  {skill}
                                </Typography>
                              </Box>
                            ),
                          )}
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          p: 3,
                          background: "rgba(69, 183, 209, 0.05)",
                          border: "1px solid rgba(69, 183, 209, 0.1)",
                          borderRadius: "16px",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#45B7D1",
                            mb: 2,
                            fontWeight: 600,
                            fontSize: "1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          ⚙️ Backend Development
                        </Typography>
                        <Box sx={{ maxHeight: 200, overflowY: "auto" }}>
                          {selectedProject.backendSkills?.map(
                            (skill, index) => (
                              <Box
                                key={index}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  mb: 1,
                                  color: "rgba(255, 255, 255, 0.8)",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 4,
                                    height: 4,
                                    borderRadius: "50%",
                                    background: "#45B7D1",
                                    mr: 1.5,
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: "0.85rem" }}
                                >
                                  {skill}
                                </Typography>
                              </Box>
                            ),
                          )}
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          p: 3,
                          background: "rgba(78, 205, 196, 0.05)",
                          border: "1px solid rgba(78, 205, 196, 0.1)",
                          borderRadius: "16px",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#4ECDC4",
                            mb: 2,
                            fontWeight: 600,
                            fontSize: "1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          📲 Mobile Development
                        </Typography>
                        <Box sx={{ maxHeight: 200, overflowY: "auto" }}>
                          {selectedProject.mobileSkills?.map((skill, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 1,
                                color: "rgba(255, 255, 255, 0.8)",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 4,
                                  height: 4,
                                  borderRadius: "50%",
                                  background: "#4ECDC4",
                                  mr: 1.5,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{ fontSize: "0.85rem" }}
                              >
                                {skill}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          p: 3,
                          background: "rgba(255, 193, 7, 0.05)",
                          border: "1px solid rgba(255, 193, 7, 0.1)",
                          borderRadius: "16px",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#FFC107",
                            mb: 2,
                            fontWeight: 600,
                            fontSize: "1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          🚀 DevOps & Tools
                        </Typography>
                        <Box sx={{ maxHeight: 200, overflowY: "auto" }}>
                          {selectedProject.devOpsSkills?.map((skill, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 1,
                                color: "rgba(255, 255, 255, 0.8)",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 4,
                                  height: 4,
                                  borderRadius: "50%",
                                  background: "#FFC107",
                                  mr: 1.5,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{ fontSize: "0.85rem" }}
                              >
                                {skill}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Technologies - Enhanced */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      mb: 3,
                      fontWeight: 700,
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                    }}
                  >
                    🛠 Technologies Stack
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.5,
                      p: 3,
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "16px",
                    }}
                  >
                    {selectedProject.technologies?.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="medium"
                        sx={{
                          background:
                            "linear-gradient(45deg, rgba(78, 205, 196, 0.15), rgba(69, 183, 209, 0.15))",
                          border: "1px solid rgba(78, 205, 196, 0.3)",
                          color: "#4ECDC4",
                          fontWeight: 500,
                          fontSize: "0.85rem",
                          px: 1,
                          py: 0.5,
                          "&:hover": {
                            background:
                              "linear-gradient(45deg, rgba(78, 205, 196, 0.25), rgba(69, 183, 209, 0.25))",
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Key Results - Enhanced */}
                {selectedProject.results &&
                  selectedProject.results.length > 0 && (
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          mb: 3,
                          fontWeight: 700,
                          fontSize: { xs: "1.1rem", md: "1.3rem" },
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        🎯 Key Results & Achievements
                      </Typography>
                      <Grid container spacing={2}>
                        {selectedProject.results?.map((result, index) => (
                          <Grid item xs={12} md={6} key={index}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                p: 2.5,
                                background:
                                  "linear-gradient(135deg, rgba(78, 205, 196, 0.08), rgba(69, 183, 209, 0.08))",
                                border: "1px solid rgba(78, 205, 196, 0.2)",
                                borderRadius: "12px",
                                mb: 1.5,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  background:
                                    "linear-gradient(135deg, rgba(78, 205, 196, 0.15), rgba(69, 183, 209, 0.15))",
                                  transform: "translateY(-3px)",
                                  boxShadow:
                                    "0 8px 25px rgba(78, 205, 196, 0.2)",
                                },
                              }}
                            >
                              <TrendingUp
                                sx={{
                                  color: "#4ECDC4",
                                  mr: 2,
                                  fontSize: 24,
                                  flexShrink: 0,
                                  mt: 0.5,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "rgba(255, 255, 255, 0.9)",
                                  lineHeight: 1.6,
                                  fontSize: "0.9rem",
                                  fontWeight: 500,
                                }}
                              >
                                {result}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}

                {/* Enhanced Action Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 4,
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "stretch", sm: "center" },
                  }}
                >
                  {selectedProject.github && (
                    <Button
                      variant="contained"
                      startIcon={<GitHub />}
                      href={selectedProject.github}
                      target="_blank"
                      sx={{
                        background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                        color: "white",
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: "25px",
                        fontSize: "0.95rem",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #45B7D1, #4ECDC4)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(78, 205, 196, 0.3)",
                        },
                      }}
                    >
                      View Source Code
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button
                      variant="outlined"
                      startIcon={<Launch />}
                      href={selectedProject.demo}
                      target="_blank"
                      sx={{
                        borderColor: "#4ECDC4",
                        color: "#4ECDC4",
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: "25px",
                        fontSize: "0.95rem",
                        "&:hover": {
                          borderColor: "#45B7D1",
                          color: "#45B7D1",
                          background: "rgba(78, 205, 196, 0.1)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(78, 205, 196, 0.2)",
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    variant="text"
                    onClick={handleClose}
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: 600,
                      px: 3,
                      py: 1.5,
                      borderRadius: "25px",
                      fontSize: "0.95rem",
                      "&:hover": {
                        color: "white",
                        background: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    Close
                  </Button>
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
