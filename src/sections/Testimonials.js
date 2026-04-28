import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  FormatQuote,
  ChevronLeft,
  ChevronRight,
  Star,
  Business,
} from "@mui/icons-material";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "LegalTech Startup",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "Dev delivered our Lawhub application ahead of schedule and exceeded all our expectations. The AI integration was seamless and the user experience is outstanding. Highly recommend for any React Native project!",
    project: "Lawhub - AI Legal Assistant",
    results: "40% faster document processing, 95% user satisfaction",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    company: "Wellness Company",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "Working with Dev on Sonata was a game-changer for our wellness platform. The audio processing capabilities and smooth animations created an exceptional user experience. Our app revenue increased significantly.",
    project: "Sonata - Therapeutic Sound App",
    results: "50K+ downloads, 4.8★ rating, $100K+ revenue",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Operations Director",
    company: "Restaurant Chain",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "Treamo transformed our food delivery business. Dev's expertise in React Native and real-time tracking helped us scale to 200+ restaurants. The app is stable, fast, and our customers love it.",
    project: "Treamo - Food Delivery Platform",
    results: "15K+ daily users, 25% efficiency increase",
  },
  {
    id: 4,
    name: "David Kim",
    position: "CTO",
    company: "Web3 Startup",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "WeCollect is a complex NFT marketplace with real-time features and blockchain integration. Dev handled the technical challenges brilliantly and delivered a production-ready app that handles millions in trading volume.",
    project: "WeCollect - NFT Marketplace",
    results: "$2M+ trading volume, 50K+ registered users",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Founder",
    company: "E-commerce Startup",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "Dev's React Native expertise helped us launch our e-commerce app in record time. The performance optimization and UI/UX improvements led to a 60% increase in conversion rates. Absolutely professional work!",
    project: "Mobile Shopping App",
    results: "60% conversion increase, 4.7★ app store rating",
  },
  {
    id: 6,
    name: "James Wilson",
    position: "VP Engineering",
    company: "FinTech Company",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "Dev integrated complex financial APIs and built a secure banking app that passed all compliance requirements. The attention to security and performance was impressive. A true professional.",
    project: "Banking & Finance App",
    results: "Zero security incidents, 99.9% uptime",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

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
      id="testimonials"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#0a0a0a",
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
        {[...Array(30)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: ["0vh", "100vh"],
              x: Math.cos(i) * 30,
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * -0.2,
            }}
            sx={{
              position: "absolute",
              width: "1px",
              height: "20px",
              background: "linear-gradient(180deg, #4ECDC4, transparent)",
              left: `-${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
          {/* Section Header */}
          <motion.div variants={itemVariants} style={{ textAlign: "center", mb: 8 }}>
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
              CLIENT TESTIMONIALS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 800,
                mb: 3,
                background: "linear-gradient(45deg, #ffffff 0%, #4ECDC4 50%, #45B7D1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              What Clients Say
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
              Don't just take my word for it. Here's what satisfied clients have to say about working together.
            </Typography>
          </motion.div>

          {/* Testimonials Carousel */}
          <Box sx={{ position: "relative", mb: 6 }}>
            {/* Navigation Buttons */}
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: "absolute",
                left: { xs: -20, md: -40 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
                background: "rgba(78, 205, 196, 0.1)",
                color: "#4ECDC4",
                border: "1px solid rgba(78, 205, 196, 0.3)",
                width: 50,
                height: 50,
                "&:hover": {
                  background: "rgba(78, 205, 196, 0.2)",
                  transform: "translateY(-50%) scale(1.1)",
                },
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: { xs: -20, md: -40 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
                background: "rgba(78, 205, 196, 0.1)",
                color: "#4ECDC4",
                border: "1px solid rgba(78, 205, 196, 0.3)",
                width: 50,
                height: 50,
                "&:hover": {
                  background: "rgba(78, 205, 196, 0.2)",
                  transform: "translateY(-50%) scale(1.1)",
                },
              }}
            >
              <ChevronRight />
            </IconButton>

            {/* Testimonials Grid */}
            <Grid container spacing={4}>
              {visibleTestimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={`${currentIndex}-${index}`}>
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "20px",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(78, 205, 196, 0.3)",
                          transform: "scale(1.02)",
                          boxShadow: "0 20px 40px rgba(78, 205, 196, 0.2)",
                        },
                      }}
                    >
                      {/* Quote Icon */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 20,
                          right: 20,
                          color: "rgba(78, 205, 196, 0.2)",
                          fontSize: "3rem",
                        }}
                      >
                        <FormatQuote sx={{ fontSize: 40 }} />
                      </Box>

                      <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                        {/* Rating */}
                        <Box sx={{ display: "flex", mb: 2 }}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              sx={{
                                color: "#FFD700",
                                fontSize: 20,
                                mr: 0.5,
                              }}
                            />
                          ))}
                        </Box>

                        {/* Testimonial */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            mb: 3,
                            lineHeight: 1.6,
                            fontStyle: "italic",
                            flexGrow: 1,
                          }}
                        >
                          "{testimonial.testimonial}"
                        </Typography>

                        {/* Project Info */}
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#4ECDC4",
                              fontWeight: 600,
                              display: "block",
                              mb: 0.5,
                            }}
                          >
                            Project: {testimonial.project}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "rgba(255, 255, 255, 0.6)",
                              fontSize: "0.8rem",
                            }}
                          >
                            Results: {testimonial.results}
                          </Typography>
                        </Box>

                        {/* Client Info */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Avatar
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            sx={{
                              width: 50,
                              height: 50,
                              border: "2px solid #4ECDC4",
                            }}
                          />
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: "white",
                                fontWeight: 600,
                                lineHeight: 1.2,
                              }}
                            >
                              {testimonial.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "rgba(255, 255, 255, 0.7)",
                                display: "block",
                              }}
                            >
                              {testimonial.position} at {testimonial.company}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                background: "linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(69, 183, 209, 0.1) 100%)",
                border: "1px solid rgba(78, 205, 196, 0.2)",
                borderRadius: "20px",
                p: 4,
                textAlign: "center",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={6} md={3}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#4ECDC4",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    50+
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontWeight: 500,
                    }}
                  >
                    Projects Delivered
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#4ECDC4",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    30+
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontWeight: 500,
                    }}
                  >
                    Happy Clients
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#4ECDC4",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    4.9★
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontWeight: 500,
                    }}
                  >
                    Average Rating
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#4ECDC4",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    100%
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontWeight: 500,
                    }}
                  >
                    Client Satisfaction
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Testimonials;
