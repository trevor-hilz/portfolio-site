import React from 'react';
import Photo from './Photo';
import Summary from './Summary';
import Welcome from './Welcome';
import { Box } from '@mui/material';
import theme from '../styles/theme';
import { ThemeProvider } from '@mui/material/styles';

const SiteContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display='flex' flexDirection='column'>
        <Box margin='auto' paddingTop='10vh' paddingBottom='60vh'>
          <Welcome />
        </Box>
        <Photo />
        <Summary />
      </Box>
    </ThemeProvider>
  );
};

export default SiteContainer;
