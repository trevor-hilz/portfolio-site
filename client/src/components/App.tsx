import React from 'react';
import { createRoot } from 'react-dom/client';
import SiteContainer from './SiteContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, CssBaseline } from '@mui/material';
import theme from '../styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
          }}
        >
          <SiteContainer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;