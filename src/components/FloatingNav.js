import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Article as BlogIcon,
  Apps as ProjectsIcon,
  Mail as ContactIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const navItems = [
  { icon: <HomeIcon />, label: "Home", href: "#home" },
  { icon: <PersonIcon />, label: "About", href: "#about" },
  { icon: <CodeIcon />, label: "Skills", href: "#skills" },
  { icon: <WorkIcon />, label: "Experience", href: "#experience" },
  { icon: <SchoolIcon />, label: "Education", href: "#education" },
  { icon: <ProjectsIcon />, label: "Projects", href: "#projects" },
  { icon: <BlogIcon />, label: "Blog", href: "#blog" },
  { icon: <ContactIcon />, label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.pageYOffset + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ y: -100, rotate: 0 }}
      animate={{ y: 0, rotate: 90 }}
      sx={{
        position: "fixed",
        right: "-10%",
        top: "50%",
        zIndex: 1000,
        display: "flex",
        flexDirection: "row",
        gap: 1,
        p: 2,
        transformOrigin: "center",
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            sx={{
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              p: 1,
              display: "flex",
              flexDirection: "row",
              gap: 1,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {navItems.map((item, index) => (
              <Tooltip
                key={item.label}
                title={item.label}
                placement="bottom"
                arrow
              >
                <IconButton
                  component={motion.a}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  sx={{
                    color:
                      activeSection === item.href.slice(1)
                        ? "#4ECDC4"
                        : "white",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        )}
      </AnimatePresence>

      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          color: "white",
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default FloatingNav;
