import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <Box sx={{ bgcolor: "#0a0a0a", minHeight: "100vh" }}>
      <CssBaseline />
      <Navbar />
      <Box component="main">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Blog />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
