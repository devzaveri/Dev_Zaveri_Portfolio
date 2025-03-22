import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Integrating ThirdWeb Wallet v5 in React Native",
    description:
      "A comprehensive guide on implementing ThirdWeb Wallet v5 in React Native applications, covering setup, configuration, and best practices for Web3 integration.",
    image:
      "https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_23-2149215736.jpg",
    technologies: ["React Native", "ThirdWeb", "Web3", "Wallet Integration"],
    github: "https://github.com/devzaveri/ThirdWebWallet",
    live: "https://medium.com/@devsoni5880/integrating-thirdweb-wallet-v5-in-react-native-a-step-by-step-guide-c3bcde6d2b26",
  },
  {
    title: "React Native Project Structure with Dynamic Drawer Navigation",
    description:
      "Learn how to create a scalable React Native project structure with dynamic drawer navigation, including best practices for folder organization and navigation implementation.",
    image:
      "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
    technologies: ["React Native", "Navigation", "Project Structure"],
    github:
      "https://github.com/devzaveri/React-Native-Project-Structure-with-Dynamic-Drawer-Navigation",
    live: "https://medium.com/stackademic/react-native-project-structure-with-dynamic-drawer-navigation-6ec8c4f3af3c",
  },
  {
    title: "Mastering React Native Animation: Creating a Coin Animation",
    description:
      "Deep dive into React Native animations by creating an engaging coin animation effect, exploring animation techniques and performance optimization.",
    image: require("../PortfolioImage/coinAnimation.png"),
    technologies: ["React Native", "Animation", "UI/UX"],
    github: "https://github.com/devzaveri/Coin-Animation-in-React-Native",
    live: "https://medium.com/stackademic/mastering-react-native-animation-creating-a-coin-animation-30050437cf6b",
  },
  {
    title: "Beauty App - React Native UI Implementation",
    description:
      "A showcase of modern UI implementation for a beauty services application, featuring elegant design patterns and smooth user interactions.",
    image: require("../PortfolioImage/faishon.jpg"),
    technologies: ["React Native", "UI Design", "Mobile App"],
    github: "https://github.com/devzaveri/BeautyApp",
    live: "https://github.com/devzaveri/BeautyApp",
  },
];

const BlogPosts = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #3B0B3B 0%, #1E0B3B 50%, #0B0B3B 100%)",
        py: 12,
        minHeight: "100vh",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 8,
              fontWeight: 800,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              textShadow: "0 0 20px rgba(255,255,255,0.3)",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                width: 150,
                height: 4,
                background: "linear-gradient(90deg, #4B91FF 0%, #FF4B91 100%)",
                borderRadius: 2,
              },
            }}
          >
            Blog Posts
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-12px) scale(1.02)",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                      "& .blog-image": {
                        transform: "scale(1.1)",
                      },
                      "& .blog-overlay": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "relative",
                        pt: "66.67%",
                        overflow: "hidden",
                      }}
                    >
                      <CardMedia
                        className="blog-image"
                        component="img"
                        image={post.image}
                        alt={post.title}
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                      <Box
                        className="blog-overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent
                    sx={{
                      p: 4,
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        mb: 2,
                        fontSize: "1.5rem",
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                        mb: 4,
                      }}
                    >
                      {post.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "flex-end",
                        mt: "auto",
                      }}
                    >
                      <IconButton
                        href={post.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "white",
                          background: "rgba(255,255,255,0.1)",
                          backdropFilter: "blur(10px)",
                          "&:hover": {
                            background: "#4B91FF",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton
                        href={post.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "white",
                          background: "rgba(255,255,255,0.1)",
                          backdropFilter: "blur(10px)",
                          "&:hover": {
                            background: "#FF4B91",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Launch />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPosts;
