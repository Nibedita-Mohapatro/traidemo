'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#0b4d9c', // TRAI / Government Royal Navy Blue
      light: '#2563eb',
      dark: '#07336b',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0284c7',
      light: '#38bdf8',
      dark: '#0369a1',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f6fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      disabled: '#94a3b8',
    },
    divider: '#e2e8f0',
    success: {
      main: '#16a34a',
      light: '#dcfce7',
      dark: '#15803d',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ea580c',
      light: '#ffedd5',
      dark: '#c2410c',
      contrastText: '#ffffff',
    },
    error: {
      main: '#dc2626',
      light: '#fee2e2',
      dark: '#b91c1c',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0284c7',
      light: '#e0f2fe',
      dark: '#0369a1',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#1e293b',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '1.35rem',
      fontWeight: 600,
      color: '#1e293b',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.15rem',
      fontWeight: 600,
      color: '#1e293b',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#1e293b',
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#1e293b',
    },
    h6: {
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: '#334155',
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#334155',
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.45,
      color: '#64748b',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.8125rem',
    },
    caption: {
      fontSize: '0.75rem',
      color: '#64748b',
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: 'none',
          padding: '6px 16px',
          fontSize: '0.8125rem',
          '&:hover': {
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          backgroundColor: '#0b4d9c',
          '&:hover': {
            backgroundColor: '#07336b',
          },
        },
        outlined: {
          borderColor: '#cbd5e1',
          color: '#334155',
          '&:hover': {
            borderColor: '#94a3b8',
            backgroundColor: '#f8fafc',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid #e2e8f0',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 600,
          fontSize: '0.75rem',
          height: 24,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: '#ffffff',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#cbd5e1',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#94a3b8',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0b4d9c',
            borderWidth: 1.5,
          },
        },
        input: {
          padding: '8.5px 14px',
          fontSize: '0.8125rem',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          minHeight: 44,
          padding: '8px 20px',
          color: '#64748b',
          '&.Mui-selected': {
            color: '#0b4d9c',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          backgroundColor: '#0b4d9c',
          borderRadius: '3px 3px 0 0',
        },
      },
    },
  },
});

export default theme;
