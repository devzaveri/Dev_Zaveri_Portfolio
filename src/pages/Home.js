import React from "react";
import { Box, CssBaseline, Container, Avatar, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import FloatingNav from "../components/FloatingNav";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from "../sections/Education";

import Blog from "../sections/Blog";
import Contact from "../sections/Contact";
import Projects from "./Projects";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Home = () => {
  return (
    <Box
      sx={{
        background: "#0A0A0A",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <CssBaseline />
      {/* <FloatingNav /> */}

      {/* Hero Section */}
      <Box
        component="section"
        id="home"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Code Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#00ff00",
            overflow: "hidden",
          }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100 }}
              animate={{
                y: ["0%", "100%"],
                x: Math.sin(i) * 50,
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
              style={{
                position: "absolute",
                left: `${(i / 20) * 100}%`,
                whiteSpace: "nowrap",
              }}
            >
              {[...Array(10)].map((_, j) => (
                <div key={j} style={{ marginBottom: "1rem" }}>
                  {`const ${
                    ["component", "function", "hook", "effect"][j % 4]
                  } = () => {`}
                </div>
              ))}
            </motion.div>
          ))}
        </Box>

        {/* Hero Content */}
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Avatar
                src={require("../PortfolioImage/DevImage.jpeg")} // Add your profile photo here
                alt="Dev Zaveri"
                sx={{
                  width: 200,
                  height: 200,
                  border: "4px solid #4ECDC4",
                  boxShadow: "0 0 20px rgba(78, 205, 196, 0.3)",
                }}
              />
            </motion.div>

            <Box
              sx={{
                textAlign: "center",
                p: 4,
                background: "rgba(0,0,0,0.5)",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
              }}
            >
              <motion.h1
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: "4rem",
                  fontWeight: 800,
                  margin: 0,
                  background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Dev Zaveri
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  fontSize: "1.5rem",
                  color: "rgba(255,255,255,0.8)",
                  marginTop: "1rem",
                }}
              >
                React Native Developer
              </motion.p>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1.5rem",
                  marginTop: "1.5rem",
                }}
              >
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/devzaveri"
                  target="_blank"
                  sx={{ color: "#0077b5", height: "48px" }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/devzaveri"
                  target="_blank"
                  sx={{ color: "#333", height: "48px" }}
                >
                  <GitHub />
                </IconButton>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Blog />
    </Box>
  );
};

export default Home;
