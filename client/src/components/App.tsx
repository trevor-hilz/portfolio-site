import React from 'react';
import { createRoot } from 'react-dom/client';
import SiteContainer from './SiteContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121212',
    },
    secondary: {
      main: '#121212',
    },
  },
});

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <CssBaseline>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          bgcolor: 'primary.main',
          color: 'white',
          p: 0,
          m: 0,
        }}
      >
        <SiteContainer />
      </Box>
    </CssBaseline>
    // </ThemeProvider>
  );
};

export default App;
