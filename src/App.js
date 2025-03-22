import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* <Navbar /> */}
      <Box component="main">
        <section id="home">
          <Home />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </Box>
    </Box>
  );
}

export default App;
