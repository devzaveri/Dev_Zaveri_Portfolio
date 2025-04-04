import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  School as EducationIcon,
  Code as CodeIcon,
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
      value: "React Native Developer",
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
        // minHeight: "50vh",
        py: 10,
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
          <Grid container spacing={6}>
            {/* Left Column - Personal Info */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
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
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                        >
                          {info.label}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Grid>

            {/* Right Column - About Text */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 4,
                      fontWeight: 700,
                      background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    About Me
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.8,
                    }}
                  >
                    I'm a passionate React Native developer with a strong
                    foundation in mobile app development. My journey in software
                    development began during my B.Tech studies, and I've since
                    specialized in creating seamless, user-friendly mobile
                    applications.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.8,
                    }}
                  >
                    With experience in both Android and iOS development, I focus
                    on writing clean, efficient code and implementing modern
                    design patterns. I'm particularly interested in creating
                    intuitive user interfaces and optimizing app performance.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.8,
                    }}
                  >
                    When I'm not coding, I enjoy staying up-to-date with the
                    latest tech trends and contributing to the developer
                    community. I'm always excited to take on new challenges and
                    learn new technologies.
                  </Typography>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
