import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { text: 'Home', id: 'home' },
    { text: 'Projects', id: 'projects' },
    { text: 'Blog Posts', id: 'blogs' },
    { text: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: scrolled ? 'background.paper' : 'transparent',
          boxShadow: scrolled ? 1 : 'none',
          transition: 'all 0.3s ease-in-out',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={() => scrollToSection('home')}
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              color: 'primary.main',
              fontWeight: 'bold'
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  mx: 1,
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer */}

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: 240,
            bgcolor: 'background.paper',
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  color: 'text.primary',
                  '& .MuiTypography-root': {
                    fontWeight: 500
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
