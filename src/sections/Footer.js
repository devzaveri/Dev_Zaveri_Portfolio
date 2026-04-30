import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  LocationOn,
  KeyboardArrowUp,
} from "@mui/icons-material";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "#0a0a0a",
        color: "white",
        py: 6,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand & Description */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Dev Zaveri
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Transforming ideas into powerful, user-friendly mobile
              applications with React Native expertise and a commitment to
              excellence.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/dev-zaveri-211635201/"
                target="_blank"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  background: "rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    color: "#0077b5",
                    background: "rgba(0, 119, 181, 0.1)",
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
                  color: "rgba(255, 255, 255, 0.7)",
                  background: "rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    color: "#333",
                    background: "rgba(51, 51, 51, 0.1)",
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
                  color: "rgba(255, 255, 255, 0.7)",
                  background: "rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    color: "#1DA1F2",
                    background: "rgba(29, 161, 242, 0.1)",
                  },
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
              }}
            >
              {[
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Projects", id: "projects" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <Box component="li" key={link.id} sx={{ mb: 1 }}>
                  <Typography
                    component="a"
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#4ECDC4",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Email
                  sx={{
                    color: "#4ECDC4",
                    mr: 2,
                    fontSize: 20,
                  }}
                />
                <Typography
                  component="a"
                  href="mailto:devsoni5880@gmail.com"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#4ECDC4",
                    },
                  }}
                >
                  devsoni5880@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <LocationOn
                  sx={{
                    color: "#4ECDC4",
                    mr: 2,
                    fontSize: 20,
                  }}
                />
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Gujarat, India
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 4,
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              mb: { xs: 2, md: 0 },
            }}
          >
            {new Date().getFullYear()} Dev Zaveri. All rights reserved.
          </Typography>

          <IconButton
            onClick={scrollToTop}
            sx={{
              color: "#4ECDC4",
              background: "rgba(78, 205, 196, 0.1)",
              "&:hover": {
                background: "rgba(78, 205, 196, 0.2)",
                transform: "translateY(-3px)",
              },
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
