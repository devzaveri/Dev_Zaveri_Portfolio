import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, Launch } from "@mui/icons-material";

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
    technologies: ["React Native", "UI Design", "User Experience"],
    github: "https://github.com/yourusername/beauty-app",
    live: "https://medium.com/@devsoni5880/beauty-app-ui",
  },
];

const Blog = () => {
  return (
    <Box
      component="section"
      id="blog"
      sx={{
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
        {[...Array(40)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              x: ["0vw", "100vw"],
              y: Math.cos(i) * 40,
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * -0.2,
            }}
            sx={{
              position: "absolute",
              width: "3px",
              height: "3px",
              background: "linear-gradient(90deg, #4ECDC4, transparent)",
              left: `-${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 700,
              background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Latest Blog Posts
          </Typography>

          <Grid container spacing={4}>
            {blogPosts.map((blog, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "20px",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        background: "rgba(255, 255, 255, 0.05)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={blog.image}
                      alt={blog.title}
                      sx={{
                        objectFit: "cover",
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: "white",
                        }}
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: "rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {blog.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          flexWrap: "wrap",
                          mb: 2,
                        }}
                      >
                        {blog.technologies.map((tech, i) => (
                          <Typography
                            key={i}
                            variant="caption"
                            sx={{
                              px: 1,
                              py: 0.5,
                              borderRadius: "4px",
                              background: "rgba(78, 205, 196, 0.1)",
                              border: "1px solid rgba(78, 205, 196, 0.2)",
                              color: "#4ECDC4",
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          justifyContent: "flex-end",
                        }}
                      >
                        <IconButton
                          href={blog.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: "white" }}
                        >
                          <GitHub />
                        </IconButton>
                        <IconButton
                          href={blog.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: "white" }}
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default Blog;
