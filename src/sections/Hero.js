import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Download,
  ArrowRight,
  CheckCircle,
  Star,
} from "@mui/icons-material";

const Hero = () => {
  const stats = [{ label: "Years Experience", value: "3+", icon: <Star /> }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: { xs: 8, md: 0 }, // Account for fixed navbar
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left Column - Content */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
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
                  WELCOME TO MY PORTFOLIO
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 2,
                    background:
                      "linear-gradient(45deg, #ffffff 0%, #4ECDC4 50%, #45B7D1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hi, I'm Dev Zaveri
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
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
                  React Native Developer & Mobile App Specialist
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
                  Specializing in React Native development with AI/ML
                  integration and advanced mobile technologies. Let's build
                  innovative solutions together.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    color: "rgba(255, 255, 255, 0.7)",
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  Transforming ideas into powerful, user-friendly mobile
                  applications. Specialized in React Native development with a
                  proven track record of delivering high-quality solutions for
                  startups and enterprises.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    mb: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight />}
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
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
                        boxShadow: "0 8px 25px rgba(78, 205, 196, 0.3)",
                      },
                    }}
                  >
                    Explore Projects
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    endIcon={<Download />}
                    href="/Dev_Zaveri_Resume.pdf"
                    download
                    sx={{
                      borderColor: "#4ECDC4",
                      color: "#4ECDC4",
                      fontWeight: 600,
                      px: 3,
                      py: 1.5,
                      borderRadius: "25px",
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
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/devzaveri"
                    target="_blank"
                    sx={{
                      color: "#0077b5",
                      background: "rgba(0, 119, 181, 0.1)",
                      width: 50,
                      height: 50,
                      "&:hover": {
                        background: "rgba(0, 119, 181, 0.2)",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://github.com/devzaveri"
                    target="_blank"
                    sx={{
                      color: "#333",
                      background: "rgba(51, 51, 51, 0.1)",
                      width: 50,
                      height: 50,
                      "&:hover": {
                        background: "rgba(51, 51, 51, 0.2)",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://twitter.com/devzaveri"
                    target="_blank"
                    sx={{
                      color: "#1DA1F2",
                      background: "rgba(29, 161, 242, 0.1)",
                      width: 50,
                      height: 50,
                      "&:hover": {
                        background: "rgba(29, 161, 242, 0.2)",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Twitter />
                  </IconButton>
                </Box>
              </motion.div>
            </Grid>

            {/* Right Column - Profile & Stats */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    textAlign: "center",
                    mb: 4,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.5,
                    }}
                  >
                    <Avatar
                      src={require("../PortfolioImage/DevImage.jpeg")}
                      alt="Dev Zaveri"
                      sx={{
                        width: { xs: 200, md: 250 },
                        height: { xs: 200, md: 250 },
                        border: "4px solid #4ECDC4",
                        boxShadow: "0 0 30px rgba(78, 205, 196, 0.4)",
                        mx: "auto",
                        mb: 3,
                      }}
                    />
                  </motion.div>
                </Box>
              </motion.div>

              {/* Stats Cards */}
              <Grid container spacing={2} justifyContent="center">
                {stats.map((stat, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card
                        sx={{
                          background: "rgba(255, 255, 255, 0.03)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "15px",
                          textAlign: "center",
                          py: 2,
                          height: "100%",
                          "&:hover": {
                            background: "rgba(78, 205, 196, 0.1)",
                            border: "1px solid rgba(78, 205, 196, 0.3)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        <CardContent sx={{ p: 1 }}>
                          <Box
                            sx={{
                              color: "#4ECDC4",
                              mb: 1,
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {stat.icon}
                          </Box>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              color: "white",
                              mb: 0.5,
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "rgba(255, 255, 255, 0.7)",
                              fontSize: "0.8rem",
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
