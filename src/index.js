import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
      light: '#a5ffea',
      dark: '#14b8a6',
    },
    secondary: {
      main: '#7000ff',
      light: '#9b4dff',
      dark: '#4a00b3',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
      light: '#1e3a8a',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
      accent: '#64ffda',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "'Fira Code', monospace",
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 500,
          padding: '0.7rem 1.5rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 16px rgba(100, 255, 218, 0.2)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: 'rgba(17, 34, 64, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(100, 255, 218, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(100, 255, 218, 0.3)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
