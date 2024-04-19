import React from 'react';
import { createRoot } from 'react-dom/client';
import SiteContainer from './SiteContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained' color='primary'>
        This is the top
        <SiteContainer />
      </Button>
    </ThemeProvider>
  );
};

export default App;
