import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  Work as WorkIcon,
  Timeline as TimelineIcon,
} from "@mui/icons-material";

const Experience = () => {
  const experiences = [
    {
      company: "Logistic Infotech",
      position: "React Native Developer",
      duration: "2023 - Present",
      responsibilities: [
        "Developed and maintained React Native applications",
        "Implemented complex UI components and animations",
        "Integrated RESTful APIs and managed state with Redux",
        "Collaborated with cross-functional teams for feature development",
      ],
    },
    {
      company: "BinaryGeckos",
      position: "React Native Developer",
      duration: "2022 - 2023",
      responsibilities: [
        "Built responsive mobile applications from scratch",
        "Optimized app performance and reduced load times",
        "Implemented state management solutions",
        "Worked on both Android and iOS platforms",
      ],
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        minHeight: "100vh",
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
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: ["0vh", "100vh"],
              x: Math.sin(i) * 30,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * -0.2,
            }}
            sx={{
              position: "absolute",
              width: "1px",
              height: "20px",
              background: "linear-gradient(180deg, #FF6B6B, transparent)",
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
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
            {experiences.map((exp, index) => (
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
                          "radial-gradient(circle at top left, rgba(255, 107, 107, 0.1), transparent 70%)",
                        opacity: 0.5,
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", zIndex: 2 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "12px",
                            background:
                              "linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, transparent 100%)",
                            color: "#FF6B6B",
                            mr: 2,
                          }}
                        >
                          <WorkIcon />
                        </Box>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              background:
                                "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {exp.position}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "rgba(255, 255, 255, 0.7)",
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <TimelineIcon sx={{ fontSize: 16 }} />
                            {exp.duration} • {exp.company}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ mt: 3 }}>
                        {exp.responsibilities.map((resp, i) => (
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
                              {resp}
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

export default Experience;
