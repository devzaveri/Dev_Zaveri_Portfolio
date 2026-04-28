import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        background: "#0a0a0a",
        height: "100vh",
        color: "white",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ color: "#4ECDC4", fontWeight: 700 }}>
          Dev Zaveri
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              mb: 1,
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(78, 205, 196, 0.1)",
                transform: "translateX(5px)",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: { color: "white", fontWeight: 500 },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background: scrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "none",
            transition: "all 0.3s ease",
            zIndex: 1100,
          }}
        >
          <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component="div"
                onClick={() => scrollToSection("hero")}
                sx={{
                  cursor: "pointer",
                  background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  mr: 4,
                }}
              >
                Dev Zaveri
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      mx: 1,
                      fontWeight: 500,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        width: 0,
                        height: "2px",
                        background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                        transform: "translateX(-50%)",
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        color: "#4ECDC4",
                        "&::after": {
                          width: "80%",
                        },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="contained"
                href="/Dev_Zaveri_Resume.pdf"
                download
                startIcon={<DownloadIcon />}
                sx={{
                  display: { xs: "none", md: "flex" },
                  background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                  color: "white",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: "25px",
                  "&:hover": {
                    background: "linear-gradient(45deg, #45B7D1, #4ECDC4)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(78, 205, 196, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Resume
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "white",
                ml: 2,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            background: "#0a0a0a",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
