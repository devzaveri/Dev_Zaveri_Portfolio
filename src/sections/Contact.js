import React, { useState, useRef } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Grid,
  Card,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Send as SendIcon,
  Email as EmailIcon,
  Person as PersonIcon,
  Message as MessageIcon,
  Phone as PhoneIcon,
  LocationOn,
  AccessTime,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    "React Native App Development",
    "App Optimization",
    "UI/UX Design",
    "API Integration",
    "Code Review",
    "Consultation",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      message: formData.message,
      date: new Date().toLocaleString(),
    };

    try {
      const result = await emailjs.send(
        "service_hwb2bxj", // Replace with your EmailJS service ID
        "template_pee128b", // Replace with your EmailJS template ID
        templateParams,
        "Tkjco9zNsXrQImfLa", // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! I'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);

      // Check for specific Gmail API errors
      if (error.text && error.text.includes("Invalid grant")) {
        setStatus({
          type: "error",
          message:
            "Email service temporarily unavailable. Please contact directly at devsoni5880@gmail.com",
        });
      } else {
        setStatus({
          type: "error",
          message:
            "Failed to send message. Please try again or contact directly at devsoni5880@gmail.com",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
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
              GET IN TOUCH
            </Typography>
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
              Let's Build Something Amazing Together
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
              Have a project in mind? I'd love to hear about it. Send me a
              message and let's discuss how we can bring your ideas to life.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Card
                sx={{
                  p: 4,
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                }}
              >
                {status.message && (
                  <Alert
                    severity={status.type}
                    sx={{
                      mb: 3,
                      background:
                        status.type === "success"
                          ? "rgba(78, 205, 196, 0.1)"
                          : "rgba(255, 72, 66, 0.1)",
                      color: status.type === "success" ? "#4ECDC4" : "#ff4842",
                      border: `1px solid ${
                        status.type === "success" ? "#4ECDC4" : "#ff4842"
                      }`,
                      "& .MuiAlert-icon": {
                        color:
                          status.type === "success" ? "#4ECDC4" : "#ff4842",
                      },
                    }}
                  >
                    {status.message}
                  </Alert>
                )}

                <Box
                  component="form"
                  ref={form}
                  onSubmit={handleSubmit}
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="name"
                        label="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <PersonIcon
                              sx={{ mr: 1, color: "rgba(255, 255, 255, 0.3)" }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.1)",
                            },
                            "&:hover fieldset": {
                              borderColor: "#4ECDC4",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#4ECDC4",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.5)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <EmailIcon
                              sx={{ mr: 1, color: "rgba(255, 255, 255, 0.3)" }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.1)",
                            },
                            "&:hover fieldset": {
                              borderColor: "#4ECDC4",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#4ECDC4",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.5)",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="phone"
                        label="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <PhoneIcon
                              sx={{ mr: 1, color: "rgba(255, 255, 255, 0.3)" }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.1)",
                            },
                            "&:hover fieldset": {
                              borderColor: "#4ECDC4",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#4ECDC4",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.5)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="projectType"
                        label="Project Type"
                        select
                        value={formData.projectType}
                        onChange={handleChange}
                        SelectProps={{
                          native: true,
                        }}
                        InputProps={{
                          startAdornment: (
                            <MessageIcon
                              sx={{ mr: 1, color: "rgba(255, 255, 255, 0.3)" }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.1)",
                            },
                            "&:hover fieldset": {
                              borderColor: "#4ECDC4",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#4ECDC4",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.5)",
                          },
                        }}
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>

                  <TextField
                    required
                    fullWidth
                    name="message"
                    label="Tell me about your project"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements, timeline, and any specific features you have in mind..."
                    InputProps={{
                      startAdornment: (
                        <MessageIcon
                          sx={{
                            mr: 1,
                            mt: 1,
                            color: "rgba(255, 255, 255, 0.3)",
                          }}
                        />
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                          borderColor: "rgba(255, 255, 255, 0.1)",
                        },
                        "&:hover fieldset": {
                          borderColor: "#4ECDC4",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#4ECDC4",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "rgba(255, 255, 255, 0.5)",
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      mt: 2,
                      py: 2,
                      background: "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      borderRadius: "25px",
                      "&:hover": {
                        background: "linear-gradient(45deg, #45B7D1, #4ECDC4)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(78, 205, 196, 0.3)",
                      },
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Box>
              </Card>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Quick Contact */}
                <Card
                  sx={{
                    p: 3,
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    📞 Quick Contact
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <EmailIcon sx={{ color: "#4ECDC4", fontSize: 20 }} />
                      <Typography
                        component="a"
                        href="mailto:devsoni5880@gmail.com"
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          textDecoration: "none",
                          "&:hover": {
                            color: "#4ECDC4",
                          },
                        }}
                      >
                        devsoni5880@gmail.com
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <LocationOn sx={{ color: "#4ECDC4", fontSize: 20 }} />
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                        Gujarat, India
                      </Typography>
                    </Box>
                  </Box>
                </Card>

                {/* Response Time */}
                <Card
                  sx={{
                    p: 3,
                    background: "rgba(78, 205, 196, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(78, 205, 196, 0.3)",
                    borderRadius: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <AccessTime sx={{ color: "#4ECDC4", fontSize: 20 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: 600,
                      }}
                    >
                      Response Time
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.5,
                    }}
                  >
                    I typically respond to all inquiries within 24 hours. For
                    urgent projects, feel free to call or message directly.
                  </Typography>
                </Card>

                {/* Social Links */}
                <Card
                  sx={{
                    p: 3,
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    🌐 Connect
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/in/dev-zaveri-211635201/"
                      target="_blank"
                      sx={{
                        color: "#0077b5",
                        background: "rgba(0, 119, 181, 0.1)",
                        "&:hover": {
                          background: "rgba(0, 119, 181, 0.2)",
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://github.com/devzaveri"
                      target="_blank"
                      sx={{
                        color: "#333",
                        background: "rgba(51, 51, 51, 0.1)",
                        "&:hover": {
                          background: "rgba(51, 51, 51, 0.2)",
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
