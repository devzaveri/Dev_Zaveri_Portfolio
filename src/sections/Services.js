import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  PhoneAndroid,
  Speed,
  Rocket,
  CheckCircle,
  DesignServices,
  CloudQueue,
  Support,
  Security,
} from "@mui/icons-material";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const technicalSkills = [
    {
      id: 1,
      title: "AI & Machine Learning Integration",
      level: "Expert",
      icon: <Rocket sx={{ fontSize: 40 }} />,
      color: "#4ECDC4",
      description:
        "Advanced AI/ML integration in mobile applications with cutting-edge libraries and frameworks",
      skills: [
        "TensorFlow Lite for Mobile",
        "Core ML (iOS) & ML Kit (Android)",
        "OpenAI API Integration",
        "Natural Language Processing",
        "Computer Vision & Image Recognition",
        "Custom Model Deployment",
        "Real-time AI Inference",
        "Edge AI Implementation",
      ],
      experience: "2+ years",
      deliveryTime: "2-4 weeks",
      suitableFor: "Mobile apps, AI-powered features, ML integration projects",
      features: [
        "Custom AI model development",
        "Real-time inference optimization",
        "Cross-platform ML deployment",
        "API integration services",
        "Performance optimization",
        "Data privacy & security",
      ],
    },
    {
      id: 2,
      title: "React Native Development",
      level: "Expert",
      icon: <PhoneAndroid sx={{ fontSize: 40 }} />,
      color: "#FF6B6B",
      description:
        "Professional React Native development with advanced architecture and modern best practices",
      skills: [
        "React Native CLI & Expo",
        "Cross-platform Architecture",
        "State Management (Redux, Zustand, Context)",
        "Navigation & Routing",
        "Native Module Integration",
        "Push Notifications",
        "App Store Deployment",
        "Code Push & OTA Updates",
      ],
      experience: "3+ years",
      deliveryTime: "1-3 weeks",
      suitableFor: "Cross-platform mobile apps, startups, enterprise solutions",
      features: [
        "Custom component development",
        "Performance optimization",
        "State management implementation",
        "Native module integration",
        "Automated testing setup",
        "App store deployment",
      ],
    },
    {
      id: 3,
      title: "Advanced Backend Integration",
      level: "Expert",
      icon: <Speed sx={{ fontSize: 40 }} />,
      color: "#45B7D1",
      description:
        "Comprehensive backend integration with modern APIs, databases, and cloud services",
      skills: [
        "GraphQL & REST APIs",
        "WebSocket Real-time Communication",
        "Firebase (Firestore, Auth, Functions)",
        "AWS Services (S3, Lambda, DynamoDB)",
        "MongoDB & PostgreSQL",
        "Authentication & Security",
        "Cloud Storage Solutions",
        "Microservices Architecture",
      ],
      experience: "3+ years",
      deliveryTime: "1-3 weeks",
      suitableFor:
        "Full-stack applications, enterprise systems, data-intensive platforms",
      features: [
        "API design & implementation",
        "Database architecture",
        "Real-time communication",
        "Cloud service integration",
        "Security implementation",
        "Scalability solutions",
      ],
    },
  ];

  const additionalSkills = [
    {
      title: "Blockchain & Web3",
      icon: <Security />,
      description: "Smart contracts, Web3 integration, and decentralized apps",
      experience: "1+ years",
      deliveryTime: "2-4 weeks",
      suitableFor: "Startups, DeFi projects, NFT platforms",
      skills: [
        "Smart Contract Development",
        "Web3.js Integration",
        "Ethereum & Polygon Networks",
        "DeFi Protocols",
        "NFT Marketplaces",
        "Wallet Integration",
      ],
      features: [
        "Smart contract audit and deployment",
        "Multi-chain compatibility",
        "Secure wallet integration",
        "Gas optimization strategies",
        "DeFi protocol integration",
      ],
    },
    {
      title: "Cloud Architecture",
      icon: <CloudQueue />,
      description: "AWS, Firebase, and scalable cloud solutions",
      experience: "3+ years",
      deliveryTime: "1-3 weeks",
      suitableFor: "Enterprise apps, SaaS platforms, high-traffic services",
      skills: [
        "AWS Services (EC2, S3, Lambda)",
        "Firebase (Firestore, Functions)",
        "Cloud Storage Solutions",
        "Load Balancing",
        "Auto Scaling",
        "CDN Implementation",
      ],
      features: [
        "Scalable infrastructure design",
        "Cost optimization strategies",
        "High availability architecture",
        "Disaster recovery planning",
        "Performance monitoring",
      ],
    },
    {
      title: "DevOps & CI/CD",
      icon: <Support />,
      description: "Automated deployment, testing, and monitoring pipelines",
      experience: "2+ years",
      deliveryTime: "1-2 weeks",
      suitableFor: "Development teams, startups, enterprise projects",
      skills: [
        "Docker & Kubernetes",
        "GitHub Actions & CI/CD",
        "Automated Testing",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Performance Optimization",
      ],
      features: [
        "Automated deployment pipelines",
        "Continuous integration workflows",
        "Automated testing suites",
        "Infrastructure monitoring",
        "Rollback strategies",
      ],
    },
    {
      title: "Advanced Testing",
      icon: <DesignServices />,
      description: "Unit testing, E2E testing, and performance testing",
      experience: "Expert level",
      deliveryTime: "1-2 weeks",
      suitableFor:
        "Production apps, enterprise software, quality-critical systems",
      skills: [
        "Jest & React Testing Library",
        "E2E Testing (Cypress)",
        "Performance Testing",
        "Accessibility Testing",
        "Manual & Automated Testing",
        "Test Coverage Analysis",
      ],
      features: [
        "Comprehensive test suites",
        "Performance benchmarking",
        "Accessibility compliance",
        "Cross-platform testing",
        "Automated test reporting",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Box
      id="services"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0F0F1E 0%, #1A1A2E 100%)",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(69, 183, 209, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="overline"
              sx={{
                color: "#4ECDC4",
                fontWeight: 600,
              }}
            >
              SKILLS & EXPERTISE
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
              Technical Skills & Services
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
              Specialized expertise in React Native development and mobile app
              architecture
            </Typography>
          </motion.div>

          {/* Main Skills */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {technicalSkills.map((skill) => (
              <Grid item xs={12} md={4} key={skill.id}>
                <motion.div variants={itemVariants} whileHover={{ y: -10 }}>
                  <Card
                    sx={{
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "20px",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.05)",
                        transform: "scale(1.02)",
                        boxShadow: "0 20px 40px rgba(78, 205, 196, 0.2)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          mb: 2,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: "15px",
                            background: `linear-gradient(135deg, ${skill.color}20 0%, transparent 100%)`,
                            color: skill.color,
                          }}
                        >
                          {skill.icon}
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "white",
                          mb: 1,
                          textAlign: "center",
                        }}
                      >
                        {skill.title}
                      </Typography>

                      {/* Level Badge */}
                      <Box sx={{ mb: 2, textAlign: "center" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: skill.color,
                            fontWeight: 600,
                            fontSize: "0.9rem",
                          }}
                        >
                          {skill.level}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          mb: 2,
                          textAlign: "center",
                          lineHeight: 1.5,
                        }}
                      >
                        {skill.description}
                      </Typography>

                      {/* Skills List */}
                      <Box sx={{ mb: 3 }}>
                        {skill.skills?.map((skillItem, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1,
                              color: "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            <CheckCircle
                              sx={{
                                fontSize: 16,
                                mr: 1,
                                color: "#4ECDC4",
                              }}
                            />
                            <Typography
                              variant="caption"
                              sx={{ fontSize: "0.85rem" }}
                            >
                              {skillItem}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Experience & Projects */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          pt: 2,
                          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgba(255, 255, 255, 0.5)",
                              fontSize: "0.9rem",
                            }}
                          >
                            {skill.experience}
                          </Typography>
                        </Box>
                        <Button
                          size="small"
                          onClick={() => setSelectedService(skill)}
                          sx={{
                            background:
                              "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                            color: "white",
                            fontWeight: 600,
                            px: 2,
                            "&:hover": {
                              background:
                                "linear-gradient(45deg, #45B7D1, #4ECDC4)",
                            },
                          }}
                        >
                          Details
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Additional Skills */}
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: 600,
              mb: 3,
              mt: 6,
            }}
          >
            Additional Expertise
          </Typography>
          <Grid container spacing={3}>
            {additionalSkills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.05)",
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2, textAlign: "center" }}>
                      <Box sx={{ mb: 2, color: "#4ECDC4" }}>{skill.icon}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {skill.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        {skill.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#4ECDC4", fontWeight: 600, mt: 2 }}
                      >
                        {skill.experience}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Service Detail Dialog */}
      <Dialog
        open={!!selectedService}
        onClose={() => setSelectedService(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #1A1A2E 0%, #0F0F1E 100%)",
            border: "1px solid rgba(78, 205, 196, 0.3)",
            borderRadius: "20px",
          },
        }}
      >
        {selectedService && (
          <>
            <DialogTitle
              sx={{
                background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                fontSize: "1.8rem",
              }}
            >
              {selectedService.title}
            </DialogTitle>
            <DialogContent>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                {selectedService.description}
              </Typography>

              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#4ECDC4", mb: 1 }}
                  >
                    Best For
                  </Typography>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {selectedService.suitableFor}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                    >
                      Experience Level
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: selectedService.color }}
                    >
                      {selectedService.level}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                    >
                      Experience
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: selectedService.color }}
                    >
                      {selectedService.experience}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography
                variant="h6"
                sx={{ color: "white", mb: 2, fontWeight: 600 }}
              >
                Expertise & Capabilities:
              </Typography>
              <List>
                {selectedService?.features?.map((feature, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <CheckCircle sx={{ color: selectedService.color }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{
                        sx: { color: "rgba(255, 255, 255, 0.8)" },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button
                onClick={() => setSelectedService(null)}
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSelectedService(null);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                  color: "white",
                  fontWeight: 600,
                  px: 3,
                  py: 1.5,
                  borderRadius: "25px",
                  "&:hover": {
                    background: "linear-gradient(45deg, #45B7D1, #4ECDC4)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Discuss Project
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Services;
