import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  School as SchoolIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      school: "Marwadi University",
      location: "Rajkot, Gujarat",
      duration: "2019 - 2023",
      achievements: [
        "Specialized in Mobile Application Development",
        "Completed projects in React Native and Android",
        "Participated in tech competitions and hackathons",
        "Maintained excellent academic performance",
      ],
    },
    {
      degree: "Higher Secondary Education",
      school: "Shree Swaminarayan Gurukul",
      location: "Rajkot, Gujarat",
      duration: "2017 - 2019",
      achievements: [
        "Science Stream with Computer Science",
        "Participated in science exhibitions",
        "Active member of the coding club",
        "Achieved high scores in computer science",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      component="section"
      id="education"
      sx={{
        // py: 10,
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
        {[...Array(40)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              x: ["0vw", "100vw"],
              y: Math.cos(i) * 40,
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * -0.2,
            }}
            sx={{
              position: "absolute",
              width: "3px",
              height: "3px",
              background: "linear-gradient(90deg, #4ECDC4, transparent)",
              left: `-${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
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
          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Box
                    sx={{
                      p: 4,
                      background: "rgba(255, 255, 255, 0.03)",
                      borderRadius: "20px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "radial-gradient(circle at top right, rgba(78, 205, 196, 0.1), transparent 70%)",
                        opacity: 0.5,
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", zIndex: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 3,
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "12px",
                            background:
                              "linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, transparent 100%)",
                            color: "#4ECDC4",
                            mr: 2,
                          }}
                        >
                          <SchoolIcon />
                        </Box>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              background:
                                "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {edu.degree}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "rgba(255, 255, 255, 0.7)",
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              mt: 1,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <CalendarIcon sx={{ fontSize: 16 }} />
                              {edu.duration}
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <LocationIcon sx={{ fontSize: 16 }} />
                              {edu.location}
                            </Box>
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              mt: 1,
                              color: "rgba(255, 255, 255, 0.9)",
                            }}
                          >
                            {edu.school}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ mt: 3 }}>
                        {edu.achievements.map((achievement, i) => (
                          <Box
                            key={i}
                            component={motion.div}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1,
                              "&:last-child": { mb: 0 },
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                bgcolor: "#4ECDC4",
                                mr: 2,
                              }}
                            />
                            <Typography
                              variant="body1"
                              sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                            >
                              {achievement}
                            </Typography>
                          </Box>
                        ))}
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

export default Education;
