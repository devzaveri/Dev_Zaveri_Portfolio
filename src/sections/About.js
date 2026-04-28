import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  School as EducationIcon,
  Code as CodeIcon,
  CheckCircle,
  TrendingUp,
  AccessTime,
  Groups,
  Download,
  ArrowRight,
} from "@mui/icons-material";

const About = () => {
  const personalInfo = [
    {
      icon: <PersonIcon />,
      label: "Name",
      value: "Dev Zaveri",
    },
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "devsoni5880@gmail.com",
    },
    {
      icon: <LocationIcon />,
      label: "Location",
      value: "Gujarat, India",
    },
    {
      icon: <EducationIcon />,
      label: "Degree",
      value: "B.Tech in Computer Engineering",
    },
    {
      icon: <CodeIcon />,
      label: "Experience",
      value: "3+ Years React Native Development",
    },
  ];

  const technicalAccomplishments = [
    {
      icon: <CheckCircle />,
      title: "AI/ML Integration Expert",
      description:
        "Successfully implemented TensorFlow Lite, Core ML, and OpenAI APIs in production apps",
    },
    {
      icon: <TrendingUp />,
      title: "Performance Optimization",
      description:
        "Achieved 60%+ app performance improvements through advanced optimization techniques",
    },
    {
      icon: <AccessTime />,
      title: "Scalable Architecture",
      description:
        "Designed and implemented microservices architecture for enterprise applications",
    },
    {
      icon: <Groups />,
      title: "Open Source Contributor",
      description:
        "Active contributor to React Native and mobile development communities",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#0A0A0A",
        color: "white",
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
        {[...Array(30)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              x: ["0vw", "100vw"],
              y: Math.sin(i) * 50,
              opacity: [0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              ease: "linear",
              delay: i * -0.2,
            }}
            sx={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "white",
              left: `-${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px #fff",
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            style={{ textAlign: "center", mb: 8 }}
          >
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
              ABOUT ME
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
              Professional Background & Expertise
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
              Passionate React Native developer with expertise in building
              scalable mobile applications
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {/* Left Column - Personal Info & Achievements */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    p: 4,
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    mb: 4,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Avatar
                      src={require("../PortfolioImage/DevImage.jpeg")}
                      alt="Dev Zaveri"
                      sx={{
                        width: 80,
                        height: 80,
                        border: "3px solid #4ECDC4",
                        mr: 3,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "white",
                          mb: 0.5,
                        }}
                      >
                        Dev Zaveri
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4ECDC4",
                          fontWeight: 600,
                        }}
                      >
                        React Native Developer
                      </Typography>
                    </Box>
                  </Box>

                  {personalInfo.map((info, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        p: 2,
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.02)",
                        "&:hover": {
                          background: "rgba(255, 255, 255, 0.05)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mr: 2,
                          p: 1,
                          borderRadius: "12px",
                          background:
                            "linear-gradient(135deg, #FF6B6B20 0%, transparent 100%)",
                          color: "#FF6B6B",
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                        >
                          {info.label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Card>
              </motion.div>

              {/* Achievements */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    mb: 3,
                  }}
                >
                  🔧 Technical Accomplishments
                </Typography>
                <Grid container spacing={2}>
                  {technicalAccomplishments.map((accomplishment, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card
                        sx={{
                          p: 2,
                          height: "100%",
                          background: "rgba(255, 255, 255, 0.03)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(78, 205, 196, 0.1)",
                            border: "1px solid rgba(78, 205, 196, 0.3)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              color: "#4ECDC4",
                              mt: 0.5,
                            }}
                          >
                            {accomplishment.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: "white",
                                fontWeight: 600,
                                mb: 0.5,
                                fontSize: "0.9rem",
                              }}
                            >
                              {accomplishment.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "rgba(255, 255, 255, 0.7)",
                                fontSize: "0.8rem",
                                lineHeight: 1.4,
                              }}
                            >
                              {accomplishment.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>

            {/* Right Column - About Text & CTA */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                      background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Technical Expertise & Approach
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.8,
                    }}
                  >
                    I'm a React Native developer with 3+ years of experience
                    building cross-platform mobile applications. My technical
                    foundation includes deep expertise in React Native
                    ecosystem, state management, and performance optimization.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.8,
                    }}
                  >
                    I specialize in creating scalable, maintainable code
                    following industry best practices. My focus areas include
                    mobile app architecture, UI/UX implementation, and
                    performance tuning for optimal user experience.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.8,
                    }}
                  >
                    I'm committed to continuous learning and staying current
                    with emerging technologies and development methodologies in
                    the mobile development landscape.
                  </Typography>

                  {/* Value Proposition */}
                  <Box sx={{ mb: 4, flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      � Technical Capabilities:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {[
                        "Expert React Native development with modern best practices",
                        "Clean, maintainable, and scalable code architecture",
                        "Focus on performance optimization and user experience",
                        "Clear communication and regular project updates",
                        "Problem-solving mindset and attention to detail",
                        "Commitment to deadlines and project success",
                      ].map((item, index) => (
                        <Typography
                          key={index}
                          component="li"
                          variant="body2"
                          sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            mb: 1,
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  {/* CTA Buttons */}
                  <Box>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowRight />}
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      sx={{
                        background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                        color: "white",
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: "25px",
                        width: "100%",
                        mb: 2,
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #45B7D1, #4ECDC4)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(78, 205, 196, 0.3)",
                        },
                      }}
                    >
                      Let's Discuss Your Project
                    </Button>

                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Download />}
                      href="/resume.pdf"
                      download
                      sx={{
                        borderColor: "#4ECDC4",
                        color: "#4ECDC4",
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: "25px",
                        width: "100%",
                        "&:hover": {
                          borderColor: "#45B7D1",
                          color: "#45B7D1",
                          background: "rgba(78, 205, 196, 0.1)",
                        },
                      }}
                    >
                      Download Resume
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
