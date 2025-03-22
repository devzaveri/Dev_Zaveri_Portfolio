import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  Code as CodeIcon,
  PhoneAndroid as MobileIcon,
  Storage as StateIcon,
  Api as ApiIcon,
  JavaScript as JsIcon,
  Web as WebIcon,
} from "@mui/icons-material";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <CodeIcon />,
      color: "#FF6B6B",
      items: [
        "React Native",
        "React Navigation",
        "Function Components",
        "Hooks",
        "Styled Components",
        "React Animation",
        "Third-Party Libraries",
        "UI/UX Optimization",
      ],
    },
    {
      category: "Mobile",
      icon: <MobileIcon />,
      color: "#4ECDC4",
      items: [
        "Android Development",
        "iOS Development",
        "Native Modules",
        "Performance Optimization",
        "State Management",
        "Mobile UI/UX",
        "Cloud Storage (AWS, Azure)",
      ],
    },
    {
      category: "Backend",
      icon: <ApiIcon />,
      color: "#45B7D1",
      items: [
        "Redux",
        "AsyncStorage",
        "Axios",
        "API Integration",
        "Data Caching",
        "Serverless Computing",
        "Git & GitHub",
        "Agile Development",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        // minHeight: "100vh",
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
        {[...Array(50)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: ["0vh", "100vh"],
              opacity: [0, 1, 0],
              x: Math.sin(i) * 20,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            sx={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "white",
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
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
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      p: 4,
                      height: "100%",
                      borderRadius: "20px",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                        opacity: 0.5,
                        transition: "opacity 0.3s",
                      },
                      "&:hover::before": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Box
                        sx={{
                          mb: 3,
                          width: 80,
                          height: 80,
                          borderRadius: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `linear-gradient(135deg, ${skill.color}40 0%, transparent 100%)`,
                          color: skill.color,
                        }}
                      >
                        {React.cloneElement(skill.icon, {
                          sx: { fontSize: 40 },
                        })}
                      </Box>
                    </motion.div>

                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        fontWeight: 700,
                        background: `linear-gradient(to right, ${skill.color}, white)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {skill.category}
                    </Typography>

                    <Box
                      component={motion.div}
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                    >
                      {skill.items.map((item, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Box
                            sx={{
                              px: 2,
                              py: 1,
                              borderRadius: "10px",
                              background: `linear-gradient(135deg, ${skill.color}20 0%, transparent 100%)`,
                              border: "1px solid",
                              borderColor: `${skill.color}30`,
                              color: "rgba(255, 255, 255, 0.9)",
                              fontSize: "0.9rem",
                              fontWeight: 500,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {item}
                          </Box>
                        </motion.div>
                      ))}
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

export default Skills;
